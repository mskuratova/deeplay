import {TableBody, TableCell} from "@mui/material";
import React, {ChangeEvent, useState} from "react";

export const Line = (
    {
        fullName, bd, sex, jobTitle, unit, fullNameLeader, id, onChecked
    }
) => {
    const [checked, setChecked] = useState<boolean>(false)
    const onChangeChecked= (e:ChangeEvent) => {
        setChecked(!checked)
        const value= e.target.id
        onChecked(value)
    }

    return (

        <TableBody>
            {checked ?
                <TableCell><div><input type="radio" name="radioButton" /><span>{id}</span></div></TableCell>
            :<TableCell><div><input id={id} type="radio" name="radioButton" onChange={(e)=>onChangeChecked(e)}/><span>{id}</span></div></TableCell>
            }
            <TableCell>{fullName}</TableCell>
            <TableCell>{bd}</TableCell>
            <TableCell>{sex}</TableCell>
            <TableCell>{jobTitle}</TableCell>
            <TableCell>{unit}</TableCell>
            <TableCell>{fullNameLeader}</TableCell>
        </TableBody>
    )
}