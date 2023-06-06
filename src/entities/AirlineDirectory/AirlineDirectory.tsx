import useFetch from "../../shared/lib/hooks/useFetch";
import { tableColumnsName } from "../../shared/lib/helpers/tableColumnsName";
import { Table } from "../../shared/ui/Table";

const AirlineDirectory:React.FC = ():JSX.Element => {
    const { data, loading, error } = useFetch('http://localhost:8080/api/v1/dictionary/airlines/all')
    
    const content = !loading ? <Table columns={tableColumnsName(data[0])} data={data}></Table> : null
    return content
}

export default AirlineDirectory;
  