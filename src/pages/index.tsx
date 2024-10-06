import { useTableData } from "@/store/useTableData";
import { useEffect } from "react";

const mockTableData = [
  {
    col1: 'name',
    col2: 'desc',
  },
  {
    col1: 'name',
    col2: 'desc',
  },
  {
    col1: 'name',
    col2: 'desc',
  },
  {
    col1: 'name',
    col2: 'desc',
  },
]
export default function Home() {

  const {tableData, setTableData} =  useTableData()

  useEffect(()=>{
    setTableData(mockTableData)
  },[])

  return (
      <table>
        <thead>
          <tr>
            {Object.keys(tableData[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={Object.values(row).join('')}>
              {Object.values(row).map((value) => (
                <td key={value}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

  );
}

