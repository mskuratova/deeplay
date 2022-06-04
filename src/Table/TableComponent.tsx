import React, {MouseEvent, useState} from "react"
import {initializeState, listType} from "../store";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer, TableHead,
} from "@mui/material";

export const TableComponent = () => {
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
    const [list, setList] = useState<listType[]>(initializeState)

    return (
        <TableContainer component={Paper}>
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
                    <TableCell>
                        <div><span>Отдел</span>
                            <button onClick={(e) => onClickHandlerUp(e)} id={'unit'}>↑
                            </button>
                            <button onClick={(e) => onClickHandlerUpDown(e)}
                                    id={'unit'}>↓
                            </button>
                        </div>
                    </TableCell>
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
