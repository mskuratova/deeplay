import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
import {listType} from "./store";

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'fullName',
        headerName: 'Full name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'fullNameLeader',
        headerName: 'Full name leader',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        // valueGetter: (params: GridValueGetterParams) =>
        //     `${params.getValue(params.id, 'firstName') || ''} ${
        //         params.getValue(params.id, 'lastName') || ''
        //     }`,
    },
];

// const rows = [
//     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];
const list: listType[] =
    [{id: 1, fullName: "Иванов Иван Иванович", bd: "01.01.1990", sex: "м.", jobTitle: "Директор", unit: null, fullNameLeader: "" },
        {id: 2, fullName: "Петров Иван Петрович", bd: "10.03.1989", sex: "м.", jobTitle: "Руководитель подразделения", unit: "Отдел продаж", fullNameLeader: "" },
        {id: 3, fullName: "Светлова Алена Сергеева", bd: "10.03.1998", sex: "ж.", jobTitle: "Руководитель подразделения", unit: "Отдел закупки", fullNameLeader: "" },
        {id: 4, fullName: "Иванова Мария Николавна", bd: "11.08.1985", sex: "ж.", jobTitle: "Контролер", unit: "Отдел продаж", fullNameLeader: "Петров Иван Петрович" },
        {id: 5, fullName: "Сидорова Ульяна Павлона", bd: "29.07.1980", sex: "ж.", jobTitle: "Контролер", unit: "Отдел продаж", fullNameLeader: "Петров Иван Петрович" },
        {id: 6, fullName: "Никифоров Николай Викторович", bd: "21.07.1983", sex: "м.", jobTitle: "Рабочий", unit: "Отдел продаж", fullNameLeader: "Петров Иван Петрович" },
        {id: 7, fullName: "Гаврилов Петр Владиморович", bd: "11.02.1980", sex: "м.", jobTitle: "Рабочий", unit: "Отдел продаж", fullNameLeader: "Петров Иван Петрович" },
        {id: 8, fullName: "Сергеев Андрей Иванович", bd: "20.04.1978", sex: "м.", jobTitle: "Рабочий", unit: "Отдел продаж", fullNameLeader: "Петров Иван Петрович" },
        {id: 9, fullName: "Романов Павел Викторович", bd: "19.09.1982", sex: "м.", jobTitle: "Рабочий", unit: "Отдел продаж", fullNameLeader: "Петров Иван Петрович" },
        {id: 10, fullName: "Агафьева Наталья Федоровна", bd: "10.10.1972", sex: "ж.", jobTitle: "Контролер", unit: "Отдел закупки", fullNameLeader: "Петров Иван Петрович" },
        {id: 11, fullName: "Кимова Светлана Николаевна", bd: "19.11.1985", sex: "ж.", jobTitle: "Контролер", unit: "Отдел закупки", fullNameLeader: "Петров Иван Петрович" },
        {id: 12, fullName: "Павлов Сергей Георьгиевич", bd: "09.09.1977", sex: "м.", jobTitle: "Рабочий", unit: "Отдел закупки", fullNameLeader: "Петров Иван Петрович" },
        {id: 13, fullName: "Сидоров Иван Павлович", bd: "14.07.1982", sex: "м.", jobTitle: "Рабочий", unit: "Отдел закупки", fullNameLeader: "Петров Иван Петрович" },]
export default function DataTable() {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={list}
                columns={columns}
                pageSize={5}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
}