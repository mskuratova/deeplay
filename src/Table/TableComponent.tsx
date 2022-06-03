import React from "react"
import {listType} from "../store";
import {list} from './../store'
// import s from "./tableComponent.css"


export const TableComponent = (
    // list : listType []
) => {
    const line:listType = list[0]

    console.log(list)
    return (
        <div >
            <table>
            {/*<div>{list[0].fullName}</div>*/}
            {/*<div>{list.map(l=> <div>{list[1].fullName}</div>)}</div>*/}
            <th>
                <td> № пп</td>
                <td>Ф.И.О.</td>
                <td>День рождения</td>
                <td>Пол</td>
                <td>Должность</td>
                <td>Отдел</td>
                <td>Ф.И.О. начальника</td>
            </th>
                {list.map(l => <Line fullName={l.fullName} bd={l.bd} sex={l.sex} jobTitle={l.jobTitle} unit={l.unit} fullNameLeader={l.fullNameLeader} key = {l.id} id = {l.id}/>)}

            {/*<Line fullName={line.fullName}  bd={line.bd} sex={line.sex} jobTitle={line.jobTitle} unit={line.unit} fullNameLeader={line.fullNameLeader} key = {list[0].id}/>*/}

            </table>
        </div>
    )
}

export const Line = ({key, fullName, bd, sex, jobTitle, unit, fullNameLeader , id}) => {
    return(
        <tr>
            <td>{id}</td>
            <td>{fullName}</td>
            <td>{bd}</td>
            <td>{sex}</td>
            <td>{jobTitle}</td>
            <td>{unit}</td>
            <td>{fullNameLeader}</td>
        </tr>
    )
}