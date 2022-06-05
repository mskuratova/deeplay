import React, {ChangeEvent, MouseEvent, useState} from "react"
import {initializeState, listType} from "../store";
import {Line} from "./Line"
import {
    Paper,
    Table,
    TableCell,
    TableContainer, TableHead,
} from "@mui/material";
import ModalDelete from "./Modals/ModalDelete";

export const TableComponent = () => {
    const [list, setList] = useState<listType[]>(initializeState)

    const onChangeHandlerUnit = (e: ChangeEvent<HTMLSelectElement>) => {
        const value = e.currentTarget.value;
        const filterList = [...initializeState]
        const newFilterList = filterList.filter(e => value.includes(e.unit))
        if (!value) {
            setList(initializeState)
        } else setList(newFilterList)
    }
    const onChangeHandlerJob = (e: ChangeEvent<HTMLSelectElement>) => {
        const value = e.currentTarget.value;
        const filterList = [...initializeState]
        const newFilterList = filterList.filter(e => value.includes(e.jobTitle))
        if (!value) {
            setList(initializeState)
        } else setList(newFilterList)
    }
    const onClickHandlerUp = (e: MouseEvent<HTMLButtonElement>) => {
        const id = e.currentTarget.id;
        const sortedList = [...list]
        sortedList.sort((a, b) => a[id] > b[id] ? 1 : -1)
        setList(sortedList)
    }
    const onClickHandlerUpDown = (e: MouseEvent<HTMLButtonElement>) => {
        const id = e.currentTarget.id;
        const sortedList = [...list]
        sortedList.sort((a, b) => a[id] > b[id] ? -1 : 1)
        setList(sortedList)
    }
    const onClickDelete = () => {
        alert('Delete')
        debugger
        return(<ModalDelete/>)
    }

    return (
        <TableContainer component={Paper}>
            <div style={{textAlign: "center"}}><h2>Список сотрудников</h2>
                <select id="Select" onChange={(e) => onChangeHandlerUnit(e)}
                        style={{padding: "3px", margin: "5px", width: "170px"}}>
                    <option value={''}>Выбрать отдел</option>
                    <option value={'Отдел продаж'}>Отдел продаж</option>
                    <option value={'Отдел закупки'}>Отдел закупки</option>
                </select>
                <select onChange={(e) => onChangeHandlerJob(e)}
                        style={{padding: "3px", margin: "5px", width: "170px"}}>
                    <option value={''}>Выбрать должность</option>
                    <option value={'Директор'}>Директор</option>
                    <option value={'Руководитель подразделения'}>Руководитель
                        подразделения
                    </option>
                    <option value="Контролер">Контролер</option>
                    <option value="Рабочий">Рабочий</option>
                </select>
                <button onClick={() => alert("Добавить")}
                        style={{padding: "3px", margin: "5px", width: "170px"}}>Добавить
                </button>
                <button onClick={onClickDelete}
                        style={{padding: "3px", margin: "5px", width: "170px"}}>Удалить
                </button>
                <button onClick={() => alert("Повысить")}
                        style={{padding: "3px", margin: "5px", width: "170px"}}>Изменить должность
                </button>

            </div>
            <Table sx={{minWidth: 650}} aria-label="a dense table">
                <TableHead>
                    <TableCell>№ пп</TableCell>
                    <TableCell>
                        <div><span>Ф.И.О.</span>
                            <button onClick={(e) => onClickHandlerUp(e)}
                                    id={'fullName'}>↑
                            </button>
                            <button onClick={(e) => onClickHandlerUpDown(e)}
                                    id={'fullName'}>↓
                            </button>
                        </div>
                    </TableCell>
                    <TableCell>День рождения</TableCell>
                    <TableCell>Пол</TableCell>
                    <TableCell>
                        <div><span>Должность</span>
                            <button onClick={(e) => onClickHandlerUp(e)}
                                    id={'jobTitle'}>↑
                            </button>
                            <button onClick={(e) => onClickHandlerUpDown(e)}
                                    id={'jobTitle'}>↓
                            </button>
                        </div>
                    </TableCell>
                    <TableCell>Отдел</TableCell>
                    <TableCell>Ф.И.О. начальника</TableCell>
                </TableHead>
                {list.map((l, id) => <Line fullName={l.fullName} bd={l.bd}
                                           sex={l.sex}
                                           jobTitle={l.jobTitle} unit={l.unit}
                                           fullNameLeader={l.fullNameLeader}
                                           key={l.id}
                                           id={id + 1}/>)}
            </Table>
        </TableContainer>
    )
}
