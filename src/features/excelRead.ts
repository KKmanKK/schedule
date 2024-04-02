import * as XLSX from "xlsx";

export const readExcel= ():any=>{
 
    return new Promise(async (resolve)=>{
      const res =  await fetch("http://localhost:5173/Prepodavateli.xlsx");
      console.log();
      
      const reader = new FileReader();
      reader.onload = (e:ProgressEvent<FileReader>) => {
        
        const data = e.target?.result;
        const workbook = XLSX.read(data, { type: "binary" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const parsedData: any[] = XLSX.utils.sheet_to_json(sheet);
  
        let str: string ="";
  
        parsedData.forEach((el) => {
          for (let i in el) {
           
            if (i === "__EMPTY_60") {
              str = str + "|"+el[i];
            }
            if (i === "__EMPTY_3") {//звонки            
              str = str +";"+ el[i];
            }
            if (i === "__EMPTY_63") {
              str = str +"|"+el[i] ;
            }
            if (i === "__EMPTY") {
              str = str + ",";
            }
          }
        });
  
        let arrData:any=[]
        
        str.split(",")
        .filter((el)=>
         el.trim() && el.split(";").length>=5
        )
        .forEach((el)=>{        
          arrData.push( el.split(";"))
        })

        resolve(arrData)
      }
      res.blob().then(data => reader.readAsBinaryString(data))
      // reader.readAsBinaryString(files);

    })
    
    
}