import { FC,  useEffect,  useState } from "react";
import { ScheduleList } from "./components/ScheduleList/ScheduleList";
import { readExcel } from "./features/excelRead";

import "./App.css"
const App:FC=() =>{
  const [data, setData] = useState<string[]>([]);

  
useEffect( ()=>{
  const fethExcel=async()=>{
    let fileData = await readExcel();
    setData(fileData)
  }
  fethExcel();
},[])
  return (
    
      <div className="container">

      {data && data.length>0 && <ScheduleList key={new Date().toDateString()} data={data}/>}
      </div>
    
  );
}

export default App;
