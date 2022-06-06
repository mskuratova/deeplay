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
import ModalAdd from "./Modals/ModalAdd";
import ModalChange from "./Modals/ModalChange";

export const TableComponent: React.FC = () => {
    const [list, setList] = useState<listType[]>(initializeState)
    const [filterList, setFilterList] = useState<listType[]>(list)
    const [flagAdd, setFlagAdd] = useState<boolean>(false)
    const [flagDelete, setFlagDelete] = useState<boolean>(false)
    const [flagChange, setFlagChange] = useState<boolean>(false)
    const [valueRadio, setValueRadio] = useState<number>()
    const [valueFullName, setValueFullName] = useState<string>()

    const onChangeHandlerUnit = (e: ChangeEvent<HTMLSelectElement>) => {
        const value = e.currentTarget.value;
        // const filterList = [...initializeState]
        const secondFilterList = [...filterList].filter(e => value.includes(e.unit))
        if (!value) {
            setList(filterList)
        } else setList(secondFilterList)
    }
    const onChangeHandlerJob = (e: ChangeEvent<HTMLSelectElement>) => {
        const value = e.currentTarget.value;
        const secondFilterList = [...filterList].filter(e => value.includes(e.jobTitle))
        if (!value) {
            setList(filterList)
        } else setList(secondFilterList)
        // const filterList = [...initializeState]
        // const newFilterList = filterList.filter(e => value.includes(e.jobTitle))
        // if (!value) {
        //     setList(initializeState)
        // } else setList(newFilterList)
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
    const onClickAdd = () => setFlagAdd(!flagAdd)
    const onCheckedList = (value: number) => {
        setValueRadio(value)
    }
    const onClickDelete = () => {
        const name = list[valueRadio].fullName
        setValueFullName(name)
        const listDelete = [...list]
        const newList = listDelete.filter(l => l.fullName !== name)
        setList(newList)
        setFilterList(newList)
        setFlagDelete(false)
    }
    console.log(valueFullName)
    const onClickDeleteClose = () => setFlagDelete(!flagDelete)
    const onClickChange = () => setFlagChange(!flagChange)

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
                <button onClick={onClickAdd}
                        style={{padding: "3px", margin: "5px", width: "170px"}}>Добавить
                </button>
                <button onClick={onClickDeleteClose}
                        style={{padding: "3px", margin: "5px", width: "170px"}}>Удалить
                </button>
                <button onClick={onClickChange}
                        style={{padding: "3px", margin: "5px", width: "170px"}}>Изменить
                    должность
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
                                           id={id + 1}
                                           onChecked={() => onCheckedList(id)}/>)}
            </Table>
            {flagAdd ? <ModalAdd onClickAdd={onClickAdd}/> : ''}
            {flagDelete ? <ModalDelete onClickDelete={onClickDelete}
                                       onClickDeleteClose={onClickDeleteClose}><span>{'Ф.И.О.' + valueFullName}</span></ModalDelete> : ''}
            {flagChange ? <ModalChange onClickChange={onClickChange}/> : ''}
        </TableContainer>
    )
}
