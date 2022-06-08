import React, {ChangeEvent, MouseEvent, useState} from "react"
import {initializeState, listType} from "../store";
import {Line} from "./Line"
import {
    Button, Paper, Table,
    TableCell,
    TableContainer, TableHead,
} from "@mui/material";
import ModalDelete from "./Modals/ModalDelete";
import ModalAdd from "./Modals/ModalAdd";
import ModalChangeJob from "./Modals/ModalChangeJob";
import s from './TableComponent.module.css';
import ModalChangeFullName from "./Modals/ModalChangeFullName";

export const TableComponent: React.FC = () => {
    const [list, setList] = useState<listType[]>(initializeState)
    const [filterList, setFilterList] = useState<listType[]>(list)
    const [flagAdd, setFlagAdd] = useState<boolean>(false)
    const [flagDelete, setFlagDelete] = useState<boolean>(false)
    const [flagChangeFullName, setFlagChangeFullName] = useState<boolean>(false)
    const [flagChangeJob, setFlagChangeJob] = useState<boolean>(false)
    const [valueRadio, setValueRadio] = useState<number | null>(null)
    const [valueFullName, setValueFullName] = useState<string>()
    const [valueJob, setValueJob] = useState<string>()

    const buttonStyle = {margin: "3px", color: "black", padding: "4px"}

    const onChangeHandlerUnit = (e: ChangeEvent<HTMLSelectElement>) => {
        const value = e.currentTarget.value;
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
    const onCheckedList = (value: number) => {
        setValueRadio(value)
    }
    const onClickAddClose = () => setFlagAdd(!flagAdd)
    const onClickAdd = (value: listType) => {
        const newList = [...list, value]
        setList(newList)
        setFilterList(newList)
        setFlagAdd(false)
    }
    const onClickDelete = () => {
        const name = list[valueRadio].fullName
        setValueFullName(name)
        const listDelete = [...list]
        const newList = listDelete.filter(l => l.fullName !== name)
        setList(newList)
        setFilterList(newList)
        setFlagDelete(false)
        setValueRadio(null)
    }
    const onClickChangeFullName = (value: string) => {
        const name = list[valueRadio].fullName
        setValueFullName(name)
        const listChange = [...list]
        listChange[valueRadio].fullName = value
        setList(listChange)
        setFilterList(listChange)
        setFlagChangeFullName(false)
    }
    const onClickDeleteClose = () => {
        if (valueRadio !== null) {
            setFlagDelete(!flagDelete)
            const name = list[valueRadio].fullName
            setValueFullName(name)
        } else {
            alert('Выберите сотрудника')
        }
    }
    const onChangeJob = (e: ChangeEvent<HTMLSelectElement>) => {
        const value = e.currentTarget.value
        setValueJob(value)
    }
    const onClickChangeFullNameClose = () => {
        if (valueRadio !== null) {
            setFlagChangeFullName(!flagChangeFullName)
            const name = list[valueRadio].fullName
            setValueFullName(name)
        } else {
            alert('Выберите сотрудника')
        }
    }
    const onClickChange = () => {
        const name = list[valueRadio].fullName
        setValueFullName(name)
        const newList = [...list]
        list[valueRadio].jobTitle = valueJob
        if (valueJob === "Директор") {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            list[valueRadio].unit = null, list[valueRadio].fullNameLeader = null
        } else if (valueJob === "Руководитель подразделения") {
            list[valueRadio].fullNameLeader = null
        } else
            setList(newList)
        setFilterList(newList)
        setFlagChangeJob(false)
    }
    const onClickChangeClose = () => {
        if (valueRadio !== null) {
            setFlagChangeJob(!flagChangeJob)
            const name = list[valueRadio].fullName
            setValueFullName(name)
        } else {
            alert('Выберите сотрудника')
        }
    }

    return (
        <TableContainer component={Paper}>
            <div style={{textAlign: "center"}}><h2>Список сотрудников</h2>
                <select id="Select" onChange={(e) => onChangeHandlerUnit(e)}
                        className={s.universal}>
                    <option value={''}>Выбрать отдел</option>
                    <option value={'Отдел продаж'}>Отдел продаж</option>
                    <option value={'Отдел закупки'}>Отдел закупки</option>
                </select>
                <select onChange={(e) => onChangeHandlerJob(e)}
                        className={s.universal}>
                    <option value={''}>Выбрать должность</option>
                    <option value={'Директор'}>Директор</option>
                    <option value={'Руководитель подразделения'}>Руководитель
                        подразделения
                    </option>
                    <option value="Контролер">Контролер</option>
                    <option value="Рабочий">Рабочий</option>
                </select>
                <Button variant={"outlined"} style={buttonStyle} className={s.button}
                        onClick={onClickAddClose}>Добавить
                </Button>
                <Button variant={"outlined"} style={buttonStyle}
                        onClick={onClickDeleteClose}>Удалить
                </Button>
                <Button variant={"outlined"} style={buttonStyle}
                        onClick={onClickChangeFullNameClose}
                >Изменить Ф.И.О.
                </Button>
                <Button variant={"outlined"} style={buttonStyle}
                        onClick={onClickChangeClose}
                >Повысить
                </Button>
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
            {flagAdd ? <ModalAdd
                onClickAdd={onClickAdd}
                onClickAddClose={onClickAddClose}/> : ''}
            {flagDelete && valueRadio !== null ?
                <ModalDelete onClickDelete={onClickDelete}
                             onClickDeleteClose={onClickDeleteClose}><span>{valueFullName}</span></ModalDelete> : ''}
            {flagChangeFullName && valueRadio !== null ?
                <ModalChangeFullName
                    onClickChangeFullName={onClickChangeFullName}
                    onClickChangeClose={onClickChangeFullNameClose}>{[valueFullName]}</ModalChangeFullName> : ''}
            {flagChangeJob && valueRadio !== null ?
                <ModalChangeJob onChangeJob={onChangeJob} onClickChange={onClickChange}
                                onClickChangeClose={onClickChangeClose}>{[valueFullName, list[valueRadio].jobTitle]}</ModalChangeJob> : ''}
        </TableContainer>
    )
}