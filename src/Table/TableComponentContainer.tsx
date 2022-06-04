import React, {MouseEvent, useState} from "react";
import {TableComponent} from "./TableComponent";
import {initializeState, listType} from "../store";


export const TableComponentContainer = () => {

    const [list, setList] = useState<listType[]>(initializeState)

    const onClickHandler = (e: MouseEvent<HTMLSelectElement>) => {
        const id = e.currentTarget.id;
        const sel=document.querySelector(e.currentTarget.id)
        const sortedList = [...list]
        console.log( "id" +id)
        console.log(sel)
        // sortedList.sort((a, b) => a[id] > b[id] ? 1 : -1)
        sortedList.filter((a) => a.unit === id)
        console.log(id)
        setList(sortedList)
    }

    return (
        <>
            <div style={{textAlign: "center"}}><h2>Список сотрудников</h2>
                <select id="mySelect" onClick={(e) => onClickHandler(e)}style={{padding: "3px", margin: "5px", width: "170px"}}>
                    <option  id={'Выбрать отдел'}>Выбрать отдел</option>
                    <option id={'Отдел продаж'}>Отдел продаж</option>
                    <option id={'Отдел закупки'}>Отдел закупки</option>
                </select>
                <select style={{padding: "3px", margin: "5px", width: "170px"}}>
                    <option value="Выбрать должность">Выбрать должность</option>
                    <option value="Директор">Директор</option>
                    <option value="Руководитель подразделения">Руководитель
                        подразделения
                    </option>
                    <option value="Контролер">Контролер</option>
                    <option value="Рабочий">Рабочий</option>
                </select>
                <button style={{padding: "3px", margin: "5px", width: "170px"}}>Добавить
                </button>
                <button style={{padding: "3px", margin: "5px", width: "170px"}}>Удалить
                </button>
                <button style={{padding: "3px", margin: "5px", width: "170px"}}>Повысить
                </button>

            </div>
            <TableComponent/>
        </>
    )
}