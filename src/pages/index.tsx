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


    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold">Legends of Tomorrow</h1> 

      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <p className="text-2xl font-bold">Table of Contents</p>
        <div className="flex flex-row flex-wrap w-full justify-around">
          {tableData.map((data) => (
            <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center" key={data.name}>
              <p className="text-2xl font-bold">{data.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
