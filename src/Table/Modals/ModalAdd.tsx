import React, {ChangeEvent, useState} from 'react';
import s from './Modal.module.css'

type ModalAddType = {
    onClickAdd: () => void
    onClickAddClose: () => void
}
const ModalAdd: React.FC<ModalAddType> = (props) => {
    const [fullName, semFulName] = useState<string>('Ф.И.О.')
    const [date, setDate] = useState<string>('');
    const onChangeFullName = (e: ChangeEvent<HTMLInputElement>) => {
        semFulName(e.currentTarget.value)
        console.log(fullName)
    }
    const onChangeUnit = (e: ChangeEvent<HTMLSelectElement>) => {
        const value = e.currentTarget.value;
        console.log(value)
    }
    const onChangeBD = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        setDate(value);
        console.log(value)
    }
    const onChangeJob = (e: ChangeEvent<HTMLSelectElement>) => {
        const value = e.currentTarget.value;
        console.log(value)
    }
    return (
        <div className={s.background}>
            <div className={s.hystmodal} id="myModal">
                <div className={s.hystmodal__window}>
                    <span>Добавить сотрудника</span>
                    <input type={"text"} value={fullName}
                           onChange={(e) => onChangeFullName(e)}/>
                    <input onChange={(e) => onChangeBD(e)}
                        style={{padding: "3px", margin: "5px", width: "160px"}}
                           type={"date"} name="bday" value={date}/>
                    <select onChange={(e) => onChangeJob(e)}
                            style={{padding: "3px", margin: "5px", width: "170px"}}>
                        <option value={'Директор'}>Директор</option>
                        <option value={'Руководитель подразделения'}>Руководитель
                            подразделения
                        </option>
                        <option value="Контролер">Контролер</option>
                        <option value="Рабочий">Рабочий</option>
                    </select>
                    <select onChange={(e) => onChangeUnit(e)}
                            style={{padding: "3px", margin: "5px", width: "170px"}}>
                        <option></option>
                        <option>Отдел продаж</option>
                        <option>Отдел закупки</option>
                    </select>
                    <span>
                        <button
                            onClick={props.onClickAdd}
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