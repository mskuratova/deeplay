import React, {ChangeEvent, useState} from 'react';
import s from './Modal.module.css'
import {getRandomFloat, listType} from "../../store";

type ModalAddType = {
    onClickAdd: (value: listType) => void
    onClickAddClose: () => void
}
const ModalAdd: React.FC<ModalAddType> = (props) => {

    const [fullName, semFulName] = useState<string>('Ф.И.О.')
    const [date, setDate] = useState<string>('');
    const [sex, setSex] = useState<string>('');
    const [jobTitle, setJobTitle] = useState<string>('');
    const [unit, setUnit] = useState<string>('');

    const onChangeFullName = (e: ChangeEvent<HTMLInputElement>) => {
        semFulName(e.currentTarget.value);
    }
    const onChangeBD = (e: ChangeEvent<HTMLInputElement>) => {
        setDate(e.currentTarget.value);
    }
    const onChangeSex = (e: ChangeEvent<HTMLSelectElement>) => {
        setSex(e.currentTarget.value);
    }
    const onChangeJobTitle = (e: ChangeEvent<HTMLSelectElement>) => {
        setJobTitle(e.currentTarget.value);
    }
    const onChangeUnit = (e: ChangeEvent<HTMLSelectElement>) => {
        setUnit(e.currentTarget.value);
    }
    const onClickAdd = () => {
        let value: listType = {} as listType
        if (fullName === "Ф.И.О." && jobTitle === "Директор") {
            value = {
                id: getRandomFloat(14, 100),
                fullName: "Нет данных",
                bd: date || "Нет данных",
                sex: sex || "м.",
                jobTitle: jobTitle || "Нет данных",
                unit: null,
                fullNameLeader: null
            }
        } else if (fullName === "Ф.И.О." && jobTitle === "Руководитель подразделения") {
            value = {
                id: getRandomFloat(14, 100),
                fullName: "Нет данных",
                bd: date || "Нет данных",
                sex: sex || "м.",
                jobTitle: jobTitle || "Нет данных",
                unit: unit || "Нет данных",
                fullNameLeader: null
            }
        } else if (jobTitle === "Директор") {
            value = {
                id: getRandomFloat(14, 100),
                fullName: fullName || "Нет данных",
                bd: date || "Нет данных",
                sex: sex || "м.",
                jobTitle: jobTitle,
                unit: null,
                fullNameLeader: null
            }
        } else if (jobTitle === "Руководитель подразделения") {
            value = {
                id: getRandomFloat(14, 100),
                fullName: fullName || "Нет данных",
                bd: date || "Нет данных",
                sex: sex || "м.",
                jobTitle: jobTitle,
                unit: unit || "Нет данных",
                fullNameLeader: null
            }
        } else if (unit === "Отдел закупки") {
            value = {
                id: getRandomFloat(14, 100),
                fullName: fullName || "Нет данных",
                bd: date || "Нет данных",
                sex: sex || "м.",
                jobTitle: jobTitle || "Нет данных",
                unit: unit,
                fullNameLeader: "Светлова Алена Сергеевна"

            }
        } else if (unit === "Отдел продаж") {
            value = {
                id: getRandomFloat(14, 100),
                fullName: fullName || "Нет данных",
                bd: date || "Нет данных",
                sex: sex || "м.",
                jobTitle: jobTitle || "Нет данных",
                unit: unit,
                fullNameLeader: "Петров Иван Петрович"
            }
        } else if (fullName === "Ф.И.О.") {
            value = {
                id: getRandomFloat(14, 100),
                fullName: "Нет данных",
                bd: date || "Нет данных",
                sex: sex || "м.",
                jobTitle: jobTitle || "Нет данных",
                unit: unit || "Нет данных",
                fullNameLeader: null
            }
        } else value = {
            id: getRandomFloat(14, 100),
            fullName: fullName || "Нет данных",
            bd: date || "Нет данных",
            sex: sex || "м.",
            jobTitle: jobTitle || "Нет данных",
            unit: unit || "Нет данных",
            fullNameLeader:  null
        }
        props.onClickAdd(value)
    }

    return (
        <div className={s.background}>
            <div className={s.hystmodal} id="myModal">
                <div className={s.hystmodal__window}>
                    <span>Добавить сотрудника</span>
                    <input type={"text"} value={fullName}
                           onChange={(e) => onChangeFullName(e)}/>
                    <input onChange={(e) => onChangeBD(e)}
                           className={s.universal}
                           type={"date"} name="bday" value={date}/>
                    <select onChange={(e) => onChangeSex(e)} className={s.universal}>
                        <option>м.</option>
                        <option>ж.</option>
                    </select>
                    <select onChange={(e) => onChangeJobTitle(e)}
                            className={s.universal}>
                        <option value={''}></option>
                        <option value={'Директор'}>Директор</option>
                        <option value={'Руководитель подразделения'}>Руководитель
                            подразделения
                        </option>
                        <option value={'Контролер'}>Контролер</option>
                        <option value={'Рабочий'}>Рабочий</option>
                    </select>
                    <select onChange={(e) => onChangeUnit(e)}
                            className={s.universal}>
                        <option value={null}></option>
                        <option value={'Отдел продаж'}>Отдел продаж</option>
                        <option value={'Отдел закупки'}>Отдел закупки</option>
                    </select>
                    <span>
                        <button
                            onClick={onClickAdd}
                            className={s.hystmodal__close}>Добавить</button>
                        <button
                            onClick={props.onClickAddClose}
                            className={s.hystmodal__close}>Закрыть</button>
                        </span>
                </div>
            </div>
        </div>)
}

export default ModalAdd;