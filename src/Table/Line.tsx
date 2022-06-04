import {TableBody, TableCell} from "@mui/material";
import React from "react";


export const Line = (
    {
        fullName, bd, sex, jobTitle, unit, fullNameLeader, id
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