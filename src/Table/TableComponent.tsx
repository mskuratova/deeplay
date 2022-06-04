import React, {useState} from "react"
import {listType} from "../store";
import {list} from './../store'
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer, TableHead,
    TableRow, TableSortLabel,
} from "@mui/material";


export const TableComponent = (
    // list : listType []
) => {
    // const line: listType = list[0]
    // const [order, setOrder] = React.useState('asc');
    // const [orderBy, setOrderBy] = React.useState('Ф.И.О.');
    // const createSortHandler = (property) => (event) => {
    //     debugger
    //     onRequestSort(event, property);
    // };
    // const onRequestSort = (event, property) => {
    //     const isAsc = orderBy === property && order === 'asc';
    //     setOrder(isAsc ? 'desc' : 'asc');
    //     setOrderBy(property);
    // };
    // console.log('list', list)
    // const sortedList = [...list]
    const onClickHandlerUp = () => {
        const sortedList =[...list]
        sortedList.sort((a, b) => a.fullName > b.fullName ? 1 : -1)
        setList(sortedList)
    }
    const onClickHandlerUpDown = () => {
        const sortedList =[...list]
        sortedList.sort((a, b) => a.fullName > b.fullName ? -1 : 1)
        setList(sortedList)
    }
    const [list, setList] = useState<listType[]>(
        [{
            id: 1,
            fullName: "Иванов Иван Иванович",
            bd: "01.01.1990",
            sex: "м.",
            jobTitle: "Директор",
            unit: null,
            fullNameLeader: ""
        },
            {
                id: 2,
                fullName: "Петров Иван Петрович",
                bd: "10.03.1989",
                sex: "м.",
                jobTitle: "Руководитель подразделения",
                unit: "Отдел продаж",
                fullNameLeader: ""
            },
            {
                id: 3,
                fullName: "Светлова Алена Сергеева",
                bd: "10.03.1998",
                sex: "ж.",
                jobTitle: "Руководитель подразделения",
                unit: "Отдел закупки",
                fullNameLeader: ""
            },
            {
                id: 4,
                fullName: "Иванова Мария Николавна",
                bd: "11.08.1985",
                sex: "ж.",
                jobTitle: "Контролер",
                unit: "Отдел продаж",
                fullNameLeader: "Петров Иван Петрович"
            },
            {
                id: 5,
                fullName: "Сидорова Ульяна Павлона",
                bd: "29.07.1980",
                sex: "ж.",
                jobTitle: "Контролер",
                unit: "Отдел продаж",
                fullNameLeader: "Петров Иван Петрович"
            },
            {
                id: 6,
                fullName: "Никифоров Николай Викторович",
                bd: "21.07.1983",
                sex: "м.",
                jobTitle: "Рабочий",
                unit: "Отдел продаж",
                fullNameLeader: "Петров Иван Петрович"
            },
            {
                id: 7,
                fullName: "Гаврилов Петр Владиморович",
                bd: "11.02.1980",
                sex: "м.",
                jobTitle: "Рабочий",
                unit: "Отдел продаж",
                fullNameLeader: "Петров Иван Петрович"
            },
            {
                id: 8,
                fullName: "Сергеев Андрей Иванович",
                bd: "20.04.1978",
                sex: "м.",
                jobTitle: "Рабочий",
                unit: "Отдел продаж",
                fullNameLeader: "Петров Иван Петрович"
            },
            {
                id: 9,
                fullName: "Романов Павел Викторович",
                bd: "19.09.1982",
                sex: "м.",
                jobTitle: "Рабочий",
                unit: "Отдел продаж",
                fullNameLeader: "Петров Иван Петрович"
            },
            {
                id: 10,
                fullName: "Агафьева Наталья Федоровна",
                bd: "10.10.1972",
                sex: "ж.",
                jobTitle: "Контролер",
                unit: "Отдел закупки",
                fullNameLeader: "Петров Иван Петрович"
            },
            {
                id: 11,
                fullName: "Кимова Светлана Николаевна",
                bd: "19.11.1985",
                sex: "ж.",
                jobTitle: "Контролер",
                unit: "Отдел закупки",
                fullNameLeader: "Петров Иван Петрович"
            },
            {
                id: 12,
                fullName: "Павлов Сергей Георьгиевич",
                bd: "09.09.1977",
                sex: "м.",
                jobTitle: "Рабочий",
                unit: "Отдел закупки",
                fullNameLeader: "Петров Иван Петрович"
            },
            {
                id: 13,
                fullName: "Сидоров Иван Павлович",
                bd: "14.07.1982",
                sex: "м.",
                jobTitle: "Рабочий",
                unit: "Отдел закупки",
                fullNameLeader: "Петров Иван Петрович"
            }])


    // console.log('sortedList', sortedList.sort((a, b) => a.fullName > b.fullName ? 1 : -1))
    return (


        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="a dense table">
                <TableHead>
                    {/*<TableSortLabel*/}
                    {/*    // active={orderBy === line.fullName}*/}
                    {/*    // direction={orderBy === line.fullName ? order : 'asc'}*/}
                    {/*    // onClick={createSortHandler(line.id)}*/}
                    {/*>*/}
                    <TableCell>№ пп</TableCell>
                    <TableCell>
                        <div><span>Ф.И.О.</span>
                            <button onClick={onClickHandlerUp} id={'fullName'}>↑</button>
                            <button onClick={onClickHandlerUpDown} id={'fullName'}>↓</button>
                        </div>
                    </TableCell>
                    <TableCell>День рождения</TableCell>
                    <TableCell>Пол</TableCell>
                    <TableCell>
                        <div><span>Должность</span>
                            <button id={'jobTitle'}>↑</button>
                            <button id={'jobTitle'}>↓</button>
                        </div>
                    </TableCell>
                    <TableCell>
                        <div><span>Отдел</span>
                            <button id={'unit'}>↑</button>
                            <button id={'unit'}>↓</button>
                        </div>
                    </TableCell>
                    <TableCell>Ф.И.О. начальника</TableCell>
                    {/*</TableSortLabel>*/}
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


export const Line = (
    {
        key, fullName, bd, sex, jobTitle, unit, fullNameLeader, id
    }
) => {

    return (
        <TableBody>
            <TableCell> {id}</TableCell>
            <TableCell>{fullName}</TableCell>
            <TableCell>{bd}</TableCell>
            <TableCell>{sex}</TableCell>
            <TableCell>{jobTitle}</TableCell>
            <TableCell>{unit}</TableCell>
            <TableCell>{fullNameLeader}</TableCell>
        </TableBody>
    )
}
