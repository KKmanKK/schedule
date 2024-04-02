import React, { FC } from 'react'
import styles from "./ScheduleItem.module.css"
interface IScheduleitemProps{
    data:string[]
    week:string
}

export const Scheduleitem:FC<IScheduleitemProps> = ({data,week}) => {    

  return (
    <div className={styles.wrapper}>
    <div className={styles.week}><div className={styles.week_item}>
    {week}</div></div>
    <div className={styles.cart}>{data.map(el=>{
        if(!el){
            return;
        }
        if(el.split("|").length===1){
          return (
            <div key={el} className={styles.item}>
              <div  className={styles.time}>{el.split("|")}</div>
            </div>
          )
        }        
        return (          
          <div  key={el} className={styles.item}>
            <div className={styles.time}>{el.split("|")[0]}</div>
          <div className={styles.info}>
            <div>{el.split("|")[1]}</div>
            <div>{el.split("|")[3]}</div>
            <div>{el.split("|")[2]}к</div>
          </div>
          </div>
        )
    })}</div>
    </div>
  )
}
