import dummy from "../db/data.json"
export default function DayList() {
    //console.log(dummy);
    return (
       <ul>
        {dummy.days.map(day=>(
            <li key={day.id}>
                Day {day.day}
            </li>
        ))}
       </ul>
    )
}