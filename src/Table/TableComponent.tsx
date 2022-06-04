import React from "react"
import {listType} from "../store";
import {list} from './../store'
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer, TableHead,
    TableRow, TableSortLabel
} from "@mui/material";
// import s from "./tableComponent.css"


export const TableComponent = (
    // list : listType []
) => {
    const line: listType = list[0]
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('Ф.И.О.');
    const createSortHandler = (property) => (event) => {
        debugger
        onRequestSort(event, property);
    };
    const onRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };
    console.log(list)
    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="a dense table">
                <TableHead>
                    <TableSortLabel
                        active={orderBy === line.fullName}
                        // direction={orderBy === line.fullName ? order : 'asc'}
                        onClick={createSortHandler(line.id)}
                    >
                        <TableCell> № пп</TableCell>
                        <TableCell>Ф.И.О.</TableCell>
                        <TableCell>День рождения</TableCell>
                        <TableCell>Пол</TableCell>
                        <TableCell>Должность</TableCell>
                        <TableCell>Отдел</TableCell>
                        <TableCell>Ф.И.О. начальника</TableCell>
                    </TableSortLabel>
                </TableHead>
                {list.map(l => <Line fullName={l.fullName} bd={l.bd} sex={l.sex}
                                     jobTitle={l.jobTitle} unit={l.unit}
                                     fullNameLeader={l.fullNameLeader} key={l.id}
                                     id={l.id}/>)}


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
