import { useState } from "react";
import * as XLSX from "xlsx";
function App() {
  const [data, setData] = useState();
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
      console.log(parsedData);
      let arr: any[] = [];
      let bool = false;
      let week: any = {
        ПОНЕДЕЛЬНИК: 0,
        ВТОРНИК: 1,
        СРЕДА: 2,
        ЧЕТВЕРГ: 3,
        ПЯТНИЦА: 4,
        СУББОТА: 5,
      };
      let arr2: any[] = [];
      let arr3: any[] = [];
      let arr4: any[] = [];
      let count = 0;
      let str: any;
      parsedData.forEach((el) => {
        for (let i in el) {
          if (i === "__EMPTY_55") {
            console.log(el[i] + `   ${i}`);
            str = str + el[i] + " ";
            // arr2.push(el[i]);
          }
          if (i === "__EMPTY_3") {
            str = str + " ; ";
            console.log(el[i] + `   ${i}`);
          }
          // if (i === "__EMPTY_58") {
          //   console.log(el[i] + `   ${i}`);
          // }
          if (i === "__EMPTY") {
            console.log(el[i] + `   ${i}`);
            str = str + " , ";
            // if (week[el[i]]) {
            //   console.log(el[i] + `   ${i}`);
            // }
          }
        }
      });
      console.log(str);
    };
  };
  return (
    <>
      <input type="file" accept=".xlsx, .xls" onChange={handleUpload} />
    </>
  );
}

export default App;
// i === "__EMPTY_55" || i === "__EMPTY_3" || i === "__EMPTY_58";
