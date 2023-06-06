import { FC, Fragment, useState } from "react";
import { mockData } from "../shared/api/moki";
import { AirlineDirectory } from "../entities/AirlineDirectory";
import { Circle, Container, Line, Text } from '../shared/ui'
 
import "./styles/index.scss"
import { CommonAxisSettingsLabel } from "devextreme-react/polar-chart";

export interface MergesI {
    versionFrom: string,
    versionTo: string
}

export interface ScenariosI {
    scenario: string,
    version: string,
    isDefault: boolean,
    type: 'copy' | 'link'
}

export interface VersionsI {
    version: string,
    prevVersion: string | null,
    createdAt: string,
    diffVariations: string[],
    refer?: string[],
    orderIndex?: number,
    colorIndex?: number 
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

const sortDateVersionsHandler = (versions: VersionsI[]) => {
    return versions.sort((a,b)=> new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf())
}

// const findAvailableOrderIndex = (updateScenariosInfo:InfoVersionI[], index: number) => {
//     updateScenariosInfo.findIndex(item => {
//         return item.dateTo 
//     })
// }

const determineIndex = (updateScenariosInfo:InfoVersionI[], index: number, orderIndexes:number[]) => {
    console.log('updateScenariosInfo',updateScenariosInfo, index , orderIndexes )
    if(index <= 1) {
        if( orderIndexes.length === index) orderIndexes.push(index)
        return index
    } 
    else if (index > 1 && updateScenariosInfo[index - 1].dateTo < updateScenariosInfo[index].dateFrom) {
        if( orderIndexes.length=== index) orderIndexes.push(orderIndexes[orderIndexes.length-1])
        return orderIndexes[orderIndexes.length-1] 
    } 
    else {
        if( orderIndexes.length === index) orderIndexes.push(orderIndexes[orderIndexes.length-1]+1)
        return orderIndexes[orderIndexes.length-1]
    }   
}

const addFieldWithScenarioName = (versions: VersionsI[], updateScenariosInfo:InfoVersionI[]) => {
    let addReferToScenario:VersionsI[] = versions
    const orderIndexes: number[] = []

    updateScenariosInfo.forEach((item, i) => {
        addReferToScenario = addReferToScenario.map(ver => {   
            if(item.allVersions.includes(ver.version)) {
                if(ver.refer) return {
                    ...ver, 
                    refer: [...ver.refer, item.name ],
                    orderIndex: determineIndex(updateScenariosInfo,i, orderIndexes),
                    colorIndex: i
                }   
                else return {
                    ...ver, 
                    refer: [ item.name ], 
                    orderIndex: determineIndex(updateScenariosInfo,i, orderIndexes),
                    colorIndex: i
                }
            } else {
                return ver  
            } 
        })
    })
    return addReferToScenario
}


const listVersionsByScenario = ( currentVersion: string, versions: VersionsI[]) => {
    
    let searchVersion = currentVersion
    return versions.filter(item => {
        if(item.version === searchVersion) {
            searchVersion = item.prevVersion
            return item.version
        }
    }).map(item => item.version)    
} 

const findVersionsEveryScenario = (scenario:ScenariosI, versions:VersionsI[], usedVersions: string[]) => {
    let itemVersions = listVersionsByScenario(scenario.version, versions)
    return itemVersions.filter(item => {
       if(!usedVersions.includes(item)) {
           usedVersions.push(item) 
           return true
       }  
    })
} 



const filterScenariousByVersions = (scenarios:ScenariosI[], versions:VersionsI[]) => {
      const usedVersions: string[] = []
        console.log('usedVersions', usedVersions)




    return scenarios.map(scenario => {
        //   const itemVersions = listVersionsByScenario(scenario.version, versions) 
        //   console.log('itemVersions', itemVersions)
         const  itemVersions = findVersionsEveryScenario(scenario, versions, usedVersions)
        
        return {
            name: scenario.scenario, 
            lastVersion: scenario.version,
            isMain: scenario.isDefault,
            type: scenario.type,
            allVersions: itemVersions,
            dateFrom: versions.find(ver => ver.version === itemVersions[itemVersions.length-1]).createdAt,
            dateTo: versions.find(ver => ver.version === itemVersions[0]).createdAt   
        } 
    }) 
    .sort((a,b) => new Date(a.dateFrom).valueOf() - new Date(b.dateFrom).valueOf())

    
}

const findIndexesEveryBranch = (versions: VersionsI[], updateScenariosInfo:InfoVersionI[]) => {
    const indexBranchStore:{[key:string]: number[]} = {}
    const nameBranch = updateScenariosInfo.map(item => item.name)
    const lastVersionBranchList = updateScenariosInfo.map(item => item.lastVersion) 
    
    versions.forEach((version, index) => {
        version.refer.map(item1 => {
           return nameBranch.findIndex((item2 ) => item1===item2)
        }).forEach(branchIndex=> {
            if(indexBranchStore[branchIndex]) indexBranchStore[branchIndex].push(index)  
            else indexBranchStore[branchIndex] = [index]
        })
    })
    
    const orderIndexBranchStore:number[] = lastVersionBranchList.map(lastVer => {
        return versions.find(ver => ver.version === lastVer).orderIndex
    })
  
    return updateScenariosInfo.map((item,i) => ({
        ...item, 
        indexesSortVersions: indexBranchStore[i], 
        orderIndex:orderIndexBranchStore[i], 
        parentOrderIndex: versions[indexBranchStore[i][indexBranchStore[i].length-1]+1]?.orderIndex
    })) 
} 



const transformDataForRendering = (data: MockDataI) => {
    // 1. сортируем массив versions по дате    
    const sortedVersionsForDate = sortDateVersionsHandler(data.versions)
    
    // 2. Получить данные где отображены сценарии с названиями именно их версий 
    const scenariosInfo = filterScenariousByVersions(data.scenarios, sortedVersionsForDate)

    // 3. в versions  добовляем поле refer обозначающее какой сценарий относится к какой ветке 
    const versionsRenderData  = addFieldWithScenarioName(sortedVersionsForDate, scenariosInfo)

    // 4. Нахожу с первый и последный индекс каждой ветки для начала и окончания ее отображения
    const updateScenariosInfo =  findIndexesEveryBranch(versionsRenderData, scenariosInfo)

    return {updateScenariosInfo,  versionsRenderData}
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
    
    const
        widthSvg = 400,
        heightSvg = 1200, 
        circleR = 4,
        branchGapWidth = 40,
        branchGapHeight = 40

     const {updateScenariosInfo,  versionsRenderData} = transformDataForRendering(data)
    
    console.log('3', versionsRenderData)
    console.log('4',updateScenariosInfo )
    
  
    return  <Container>
                <svg width={widthSvg} height={heightSvg}>
                    {versionsRenderData.map((item: VersionsI, i: number) => {    
                        return  <Fragment key={i} >
                                    <Circle 
                                        key={i} 
                                        cx={branchGapWidth *(item.orderIndex+1)} 
                                        cy={branchGapHeight*(i+1)} 
                                        r={circleR} 
                                        color={choiseColor(item.colorIndex)}  
                                    /> 
                                    <Text x={branchGapWidth * updateScenariosInfo.length+20} y={branchGapHeight*(i+1)+5} text={item.version}/>  
                                </Fragment>           
                    })}
                    {updateScenariosInfo.map((item: InfoVersionI, i: number) => {
                        const startIndex = item.indexesSortVersions[0]
                        const endIndex = item.indexesSortVersions[item.indexesSortVersions.length -1]
                        return  (
                            <g key={item.name}>
                                <Line  
                                    x1={branchGapWidth * (item.orderIndex+1)} 
                                    y1={branchGapHeight * (startIndex+1)} 
                                    x2={branchGapWidth * (item.orderIndex+1)} 
                                    y2={branchGapHeight * (endIndex+1)} 
                                    color={choiseColor(i)}
                                /> 
                                {i === 0 
                                    ? null 
                                    : <>
                                        <Line 
                                            x1={branchGapWidth * (item.orderIndex+1)} 
                                            y1={branchGapHeight * (endIndex+1)} 
                                            x2={branchGapWidth * (item.parentOrderIndex+1)} 
                                            y2={branchGapHeight * (endIndex+2)} 
                                            color={choiseColor(i)}/>
                                        {/* <Line 
                                            x1={branchGapWidth * (i+1)} 
                                            y1={branchGapHeight * (startIndex+1)}
                                            x2={branchGapWidth * (i >=2 ? i-1 : i)} 
                                            y2={branchGapHeight * (startIndex)} 
                                            color={choiseColor(i)} 
                                            dash="5 5"
                                        /> */}
                                    </> 
                                } 
                            </g>  
                        )
                    })}    
                </svg>
            </Container>  
            
};

export default App;






 