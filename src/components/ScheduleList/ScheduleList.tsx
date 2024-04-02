import { FC } from 'react'
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
  return (
    <section className={styles.wrapper}>
      <div className={styles.column}>
        Четная
        {data.slice(0,6).map((el,index)=><Scheduleitem key={index} week={week[index]}data={Array.from(el)}/>)}
      </div>
      <div className={styles.column}>
        Нечетная
        {data.slice(6,12).map((el,index)=><Scheduleitem key={index} week={week[index]}data={Array.from(el)}/>)}
      </div>
    </section>
  )
}
