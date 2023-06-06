 import './table.scss'
 
interface TableProps {
    columns: any,
    data: any
}

const Table:React.FC<TableProps> = ({columns, data}):JSX.Element => {
    console.log('table',columns, data )
    const col = columns.map((c: any) => <div key={c.dataField} className="attribute">{c.caption}</div> )
    const row = data.map((d: any,i: number)=> <li key={i} className="item item-container">
                                        <div className="attribute">{d.iata_code}</div>
                                        <div className="attribute">{d.alliance}</div>
                                        <div className="attribute">{d.country}</div>
                                        <div className="attribute">{d.icao_code}</div>
                                        <div className="attribute">{d.name_en}</div>
                                        <div className="attribute">{d.iata_code}</div>
                                        <div className="attribute">{d.iata_code}</div>
                                        <div className="attribute">{d.iata_code}</div>
                                        <div className="attribute">{d.iata_code}</div>
                                        <div className="attribute">{d.iata_code}</div>
                                        <div className="attribute">{d.iata_code}</div>
                                        <div className="attribute">{d.iata_code}</div>
                                        <div className="attribute">{d.iata_code}</div>
                                        <div className="attribute">{d.description}</div>
                                        <div className="attribute" data-name="Select">
                                            <input type="checkbox" defaultChecked={true} name="" id=""/>
                                        </div>
                                    </li> ) 
    return (
        <>
        <section>
            <ol className="collection collection-container">
                <li className="item item-container">
                    {col}
                </li>
                {row}
            </ol>
        </section>
        </>
    
    )
}

export default Table;
  