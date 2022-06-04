import React, {ChangeEvent, MouseEvent, useState} from "react";
import {TableComponent} from "./TableComponent";
import {initializeState, listType} from "../store";


export const TableComponentContainer = () => {

    const [list, setList] = useState<listType[]>(initializeState)
    const filterValue = (value: string, option:string) => {
      if (value === "Выбрать") return
        else if (value === option) return
    }

    const onChangeHandlerUnit = (e: ChangeEvent<HTMLSelectElement>) => {
        const value = e.currentTarget.value;
        const filterList = [...list]
        const newFilterList = filterList.filter(e => value.includes(e.unit))
        console.log(filterList.filter(e => value.includes(e.unit)));
        console.log(newFilterList)
        debugger
        setList(newFilterList)
    }
    const onChangeHandlerJob = (e: ChangeEvent<HTMLSelectElement>) => {
        const value = e.currentTarget.value;
        const filterList = [...list]
        const newFilterList = filterList.filter(e => value.includes(e.jobTitle))
        console.log(filterList.filter(e => value.includes(e.jobTitle)));
        console.log(newFilterList)
        setList(newFilterList)
    }

    return (
        <>
            <div style={{textAlign: "center"}}><h2>Список сотрудников</h2>
                <select id="Select" onChange={(e) => onChangeHandlerUnit(e)}
                        style={{padding: "3px", margin: "5px", width: "170px"}}>
                    <option value={'Выбрать отдел'}>Выбрать отдел</option>
                    <option value={'Отдел продаж'}>Отдел продаж</option>
                    <option value={'Отдел закупки'}>Отдел закупки</option>
                </select>
                <select onChange={(e) => onChangeHandlerJob(e)}
                        style={{padding: "3px", margin: "5px", width: "170px"}}>
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