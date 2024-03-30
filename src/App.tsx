import { FC, useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { ScheduleList } from "./components/ScheduleList/ScheduleList";
import "./App.css"
const App:FC=() =>{
  const [data, setData] = useState<string[]>([]);
  const handleUpload: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files === null) {
      return;
    }
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target?.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const parsedData: any[] = XLSX.utils.sheet_to_json(sheet);
     console.log(parsedData)
      let str: string ="";
      parsedData.forEach((el) => {
        for (let i in el) {
         
          if (i === "__EMPTY_60") {
            str = str + el[i] + "|";
          }
          if (i === "__EMPTY_3") {//звонки            
            str = str + el[i]+";";
          }
          if (i === "__EMPTY_63") {
            str = str + el[i] + "|";
          }
          if (i === "__EMPTY") {
            str = str + ",";
          }
        }
      });
      let obj:any =[]
      str.split(",").filter((el)=>
       el.trim() && el.split(";").length>=5
      ).forEach((el)=>{        
        obj.push( el.split(";"))
      })
      setData(obj)
    };

  };
  useEffect(()=>{
    // console.log(data)
  },[data])
  return (
    
      <div className="container">
      <input type="file" accept=".xlsx, .xls" onChange={handleUpload} />

      {data && <ScheduleList key={new Date().toDateString()} data={data}/>}
      </div>
    
  );
}

export default App;
