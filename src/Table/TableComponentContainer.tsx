import React, {ChangeEvent} from "react";
import {TableComponent} from "./TableComponent";
import {list} from './../store'

export const TableComponentContainer = () => {


    return (
        <>
            <h2>Список сотрудников</h2>
            <TableComponent
                // list={list}
            />
        </>
    )
}