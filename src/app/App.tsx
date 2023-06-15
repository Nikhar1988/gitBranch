import { FC, Fragment, MutableRefObject, useRef, useState } from "react";
import { mockData } from "../shared/api/moki";
import { AirlineDirectory } from "../entities/AirlineDirectory";
import { Circle, Container, Line, Text } from '../shared/ui'
 
import "./styles/index.scss"
 
export interface MergesI {
    version_from: string,
    version_to: string
}

export interface ScenariosI {
    scenario: string,
    version: string,
    is_default: boolean,
    type: 'copy' | 'link'
}

export interface VersionsI {
    version: string,
    prev_version: string | null,
    created_at: string,
    diff_variations: string[],
    orderIndex?: number,
    colorIndex?: number,
    scenario?: string[]
}

export interface MockDataI {
    scenarios: ScenariosI[],
    versions: VersionsI[]
    merges: MergesI[]
}

 
interface InfoVersionI {
    name: string, 
    lastVersion: string,
    isMain: boolean,
    type: 'copy' | 'link',
    allVersions: string[],
    dateFrom: string,
    dateTo: string,
    indexesSortVersions?: number[],
    orderIndex?: number,
    parentOrderIndex?: number
}

type variantsVersionType = 'prev_version' | 'version'

const sortDateVersionsHandler = (versions: VersionsI[]) => {
    return versions.sort((a,b) => new Date(b.created_at).valueOf() - new Date(a.created_at).valueOf())
}

const listVersionsByScenario = ( currentVersion: string, versions: VersionsI[], namesProp: variantsVersionType[]) => {
    let searchVersion = currentVersion
    const findNameVersions = versions.filter(item => {
        if(item[namesProp[0]] === searchVersion) {
            searchVersion = item[namesProp[1]]
            return item.version
        }
    }).map(item => item.version)
    
    if(namesProp[0] === 'prev_version') findNameVersions.unshift(currentVersion)
    
    return findNameVersions
} 
interface BranchItemI {
    versionsNameList: string[],
    dateFrom:string,
    dateTo: string,
    deep?: number,
    viewOrder?: number ,
    verticalCoordinatesIndex?: {start: number, end: number} 
}

interface BranchListsI {
    [key:string]: BranchItemI  
}

// сортировка branch по дате 
const earliestChildHandler = (branch:BranchListsI, field: 'dateFrom' | 'dateTo') => {
    return Object.entries(branch).sort((a,b) => new Date(a[1][field]).valueOf() - new Date(b[1][field]).valueOf())
}
// задает порядок отрисовки относительно главной ветки
const orderViewBranchHandler =( branch:BranchListsI, orderIndex: {current: number}): void => {
    const sortOneEarliest = earliestChildHandler( branch, 'dateFrom')
    let storeArr: any = []
    sortOneEarliest.forEach((i,indexI) => {
        sortOneEarliest.forEach((k, indexK) => {
            if(i[1].dateTo < k[1].dateFrom && indexI !== indexK && !storeArr.includes(i[0]) && !storeArr.includes(k[0]) && !i[1].viewOrder && !k[1].viewOrder   ) {
                storeArr.push(i[0]) 
                storeArr.push(k[0]) 
                branch[i[0]].viewOrder = orderIndex.current   
                branch[k[0]].viewOrder = orderIndex.current  
            }  
        })
    })
    
    sortOneEarliest.forEach(item => {
        if(!storeArr.includes(item[0]) && !item[1].hasOwnProperty('viewOrder')) {
            branch[item[0]].viewOrder = ++orderIndex.current 
        }
    })
     
}

const findViewIndex = (branchItem:BranchItemI, versions: VersionsI[]) => {
    const start = versions.findIndex(item => item.version ===  branchItem.versionsNameList[0])
    const end = versions.findIndex(item => item.version === branchItem.versionsNameList[branchItem.versionsNameList.length - 1])
    return {start, end}
}

const dataOrderRenderHandler =(childList:string[], versions: VersionsI[], branch:BranchListsI = {}, orderIndex: {current: number}, deepIndex: number): void => { 
    childList.forEach((item, index) => {
        const versionsNameList = listVersionsByScenario(item, versions, ['prev_version','version'])
        const dateFrom = versions.find(ver => ver.version === versionsNameList[0]).created_at
        const dateTo = versions.find(ver => ver.version === versionsNameList[versionsNameList.length - 1]).created_at
        branch[item] = { versionsNameList, dateFrom, dateTo, deep: deepIndex  }
    }) 
    
    // вычеслить порядок отрисовки 
    orderViewBranchHandler(branch, orderIndex)
}



const findStartEndBranch  = ( branch:BranchListsI, versions: VersionsI[]): void => {   
    for(let key in branch) {
        branch[key].verticalCoordinatesIndex  =  findViewIndex(branch[key], versions)
     }
}

const determineOrderView = (childList:string[], versions: VersionsI[], branchs:BranchListsI={}, orderIndex:{current:number}, deepIndex: number) => {
    let versionUpdate = versions

    dataOrderRenderHandler(childList, versionUpdate, branchs, orderIndex,  deepIndex)
    
    console.log('dataOrderRender', branchs )

    childList.forEach((item, index) => {
        // задаем расположенеие точек по вертикали и по горизонтали
        versionUpdate = versionUpdate.map(ver => branchs[item].versionsNameList.includes(ver.version) ? {...ver, orderIndex: branchs[item].viewOrder, colorIndex: branchs[item].viewOrder} : ver)
        // ищем детей если есть дети запускаем функцию заново 
        const childVersions = versionUpdate.filter(ver => branchs[item].versionsNameList.includes(ver.prev_version) && !ver.hasOwnProperty('orderIndex')).map(ver => ver.version)
        if(childVersions.length) versionUpdate = determineOrderView(childVersions, versionUpdate, branchs, orderIndex,  deepIndex+1 ) 
        
    }) 
    findStartEndBranch(branchs,versions )
 
    return versionUpdate 
} 

const findOrderLineHandler =(versions: VersionsI[], scenarios:ScenariosI[], orderIndex: {current:number}) => {
    const mainVersionName = scenarios.find(scen => scen.is_default).version 
    const mainVersionsList = listVersionsByScenario(mainVersionName, versions, ['version','prev_version'])
 
    const mainWithOrder = versions
        .map(ver => mainVersionsList.includes(ver.version) ? {...ver, orderIndex: 0, colorIndex: 0} : ver)
        .sort((a,b) => new Date(a.created_at).valueOf() - new Date(b.created_at).valueOf())


    const mainChild = mainWithOrder.filter(ver => mainVersionsList.includes(ver.prev_version) && !ver.hasOwnProperty('orderIndex')).map(ver => ver.version)
    // mainBranchInfo
    const branchesInfo:BranchListsI = {[mainVersionName]: {
        viewOrder: 0, 
        versionsNameList: mainVersionsList.reverse(), 
        deep: 0,
        dateFrom: versions.find(ver => ver.version === mainVersionsList[0]).created_at,
        dateTo:versions.find(ver => ver.version === mainVersionsList[mainVersionsList.length - 1]).created_at,
    }}
 
    let deepIndex = 1

    const orderViewInfo = determineOrderView(mainChild, mainWithOrder, branchesInfo, orderIndex, deepIndex )
    
    return {orderViewInfo, branchesInfo}
}

const assignScenarioHandler = (versions: VersionsI[], scenarios:ScenariosI[]): void => {
    versions.forEach(ver => {ver.scenario = []})
    scenarios.forEach(scen => {
         const index = versions.findIndex(ver => scen.version === ver.version)
         versions[index].scenario.push(scen.scenario)
    })
}

const findMergeCortdinate = (versions: VersionsI[], merges: MergesI[]) => {
    return  merges.map(item => {
        const from = versions.find (f => f.version === item.version_from)
        const to = versions.find (f => f.version === item.version_to) 
        return {
            ...item, 
            verticalFrom: versions.findIndex(f => f.version === item.version_from),
            verticalTo: versions.findIndex(f => f.version === item.version_to), 
            horizontalFrom:from.orderIndex,
            horizontalTo: to.orderIndex,
            colorFrom:from.colorIndex, 
        } 
    })
}

const transformDataForRendering = (data: MockDataI, orderIndex:{current:number}) => {
    // 1. сортируем массив versions по дате    
    const sortedVersionsForDate = sortDateVersionsHandler(data.versions)

    // 2. добавляем в версии названия сценариев      
    assignScenarioHandler(sortedVersionsForDate, data.scenarios)

    //3. надо отсортировать и создать поле orderLine отрисовки для main она будет 0 и для других
    const findOrderList = findOrderLineHandler(sortedVersionsForDate, data.scenarios, orderIndex) 

    //4. создаем данные для отрисовки merge
    const mergeCortdinate = findMergeCortdinate(findOrderList.orderViewInfo,data.merges )
   
    return {...findOrderList, mergeCortdinate}
}

const choiseColor = (numberBranch: number) => {
    switch(numberBranch) {
        case 0:   
           return "#848B8B" 
      
        case 1:   
           return "#E9AA3E"
        
        case 2:   
           return "#ABDC44"   
        
        case 3:   
           return "#47C9D6" 
        
        case 4:   
           return "#D64F47" 
        
        default:
            return "#848B8B"
      }
}


const App = () => { 
    const data = mockData.interseckDate;
    console.log('data', data)
    const orderIndex = useRef<number>(1)
    const
        widthSvg = 800, 
        circleR = 4,
        branchGapWidth = 40,
        branchGapHeight = 40

    const { orderViewInfo, branchesInfo, mergeCortdinate } = transformDataForRendering(data, orderIndex)
    const versionsCount = orderViewInfo.length

console.log('конечные данные', orderViewInfo, branchesInfo, mergeCortdinate)
   
    return  <Container>
                 <svg width={widthSvg} height={branchGapHeight * versionsCount+40}>
                    {orderViewInfo.map((item: VersionsI, i: number) => {
                        const textItem = orderViewInfo[versionsCount-1- i]  
                        const text = textItem.scenario.length ?  `version: ${textItem.version}, variations: ${textItem.diff_variations}, scenario: ${textItem.scenario}` : `version: ${textItem.version}, variations: ${textItem.diff_variations}` 
                        return  <Fragment key={i}>
                                    <Circle 
                                        key={i} 
                                        cx={branchGapWidth * (item.orderIndex+1)} 
                                        cy={(branchGapHeight * versionsCount) - branchGapHeight * i} 
                                        r={circleR} 
                                        color={choiseColor(item.colorIndex)}  
                                    /> 
                                    <Text x={branchGapWidth * (orderIndex.current + 1) +20} y={branchGapHeight*(i+1)} text={text}/>  
                                </Fragment>           
                    })}
                    {Object.entries(branchesInfo).map((item: [string, BranchItemI], i: number) => {
                         
                        return  (
                            <g key={item[0]}>
                                <Line  
                                    x1={branchGapWidth * (item[1].viewOrder+1)} 
                                    y1={(branchGapHeight * versionsCount) - branchGapHeight* (item[1].verticalCoordinatesIndex.start)} 
                                    x2={branchGapWidth * (item[1].viewOrder+1)} 
                                    y2={(branchGapHeight * versionsCount) - branchGapHeight* (item[1].verticalCoordinatesIndex.end)} 
                                    color={choiseColor(item[1].viewOrder)}
                                />
                                {i === 0 
                                    ? null 
                                    : <>
                                        <Line 
                                            x1={branchGapWidth * (item[1].viewOrder+1)} 
                                            y1={(branchGapHeight * versionsCount) - branchGapHeight* (item[1].verticalCoordinatesIndex.start)} 
                                            x2={branchGapWidth * (item[1].deep)} 
                                            y2={(branchGapHeight * versionsCount) - branchGapHeight* (item[1].verticalCoordinatesIndex.start-1)} 
                                            color={choiseColor(item[1].viewOrder)}/>
                                    </> 
                                }            
                            </g>  
                        )
                    })}
                    { mergeCortdinate.map((item, index) => {
                        return <Line 
                                key ={index} 
                                x1={branchGapWidth * (item.horizontalFrom+1)} 
                                y1={(branchGapHeight * versionsCount) - branchGapHeight* (item.verticalFrom)}
                                x2={branchGapWidth * (item.horizontalTo+1)} 
                                y2={(branchGapHeight * versionsCount) - branchGapHeight * (item.verticalTo)} 
                                color={choiseColor(item.colorFrom)} 
                                dash="5 5"
                            />
                    })} 
                </svg>
            </Container>  
            
};

export default App;






 