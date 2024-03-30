import React, { FC } from 'react'
import styles from "./ScheduleList.module.css"
import { Scheduleitem } from '../ScheduleItem/Scheduleitem'
interface IScheduleListProps{
    data:string[]
}
const week:any={
    0:"Понедельник",
    1:"Вторник",
    2:"Среда",
    3:"Четверг",
    4:"Пятница",
    5:"Суббота"
}
export const ScheduleList:FC<IScheduleListProps> = ({data}) => {
    // console.log(data.map(el=>Array.from(el).slice(0,5)))
  return (
    <div className={styles.wrapper}>
        {data.slice(0,6).map((el,index)=><Scheduleitem week={week[index]}data={Array.from(el)}/>)}
        {data.slice(6,12).map((el,index)=><Scheduleitem week={week[index]}data={Array.from(el)}/>)}
    </div>
  )
}
