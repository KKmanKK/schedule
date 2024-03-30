import React, { FC } from 'react'
import styles from "./ScheduleItem.module.css"
interface IScheduleitemProps{
    data:string[]
    week:string
}

export const Scheduleitem:FC<IScheduleitemProps> = ({data,week}) => {    
  console.log(data.map(el=>{
    if(!el){
        return "_"
    }
    return el.split("|")
}))
  return (
    <>
    {week}
    <div className={styles.cart}>{data.map(el=>{
        if(!el){
            return "_"
        }
        if(el.split("|").length===1){
          return (
            <div className={styles.item}>
              <div>{el.split("|")}</div>
              <div></div>
            </div>
          )
        }        
        return (          
          <div className={styles.item}>
            <div className={styles.time}>{el.split("|")[3]}</div>
          <div className={styles.info}>
            <div>{el.split("|")[0]}</div>
            <div>{el.split("|")[2]}</div>
            <div>{el.split("|")[1]}к</div>
          </div>
          </div>
        )
    })}</div>
    </>
  )
}
