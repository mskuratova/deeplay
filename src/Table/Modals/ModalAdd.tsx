import React, {ChangeEvent, MouseEvent, useState} from 'react';
import s from './Modal.module.css'

type ModalAddType = {
    onClickAdd: (e: MouseEvent<HTMLButtonElement>) => void
    onClickAddClose: () => void
}
const ModalAdd: React.FC<ModalAddType> = (props) => {

    const [fullName, semFulName] = useState<string>('Ф.И.О.')
    const [date, setDate] = useState<string>('');
    const [value, setValue] = useState<Array<string | null>>(null)

    const onChangeFullName = (e: ChangeEvent<HTMLInputElement>) => {
        semFulName(e.currentTarget.value)
        setValue([e.currentTarget.value])
    }
    const onChangeBD = (e: ChangeEvent<HTMLInputElement>) => {
        const bd = e.currentTarget.value;
        setDate(bd);
        setValue([...value, bd.toString()])
    }
    const onChangeJob = (e: ChangeEvent<HTMLSelectElement>) => {
        const job = e.currentTarget.value;
        setValue([...value, job])
    }
    const onChangeUnit = (e: ChangeEvent<HTMLSelectElement>) => {
        const unit = e.currentTarget.value;
        setValue([...value, unit])
    }
    console.log(value)

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
                        <option value={''}></option>
                        <option value={'Директор'}>Директор</option>
                        <option value={'Руководитель подразделения'}>Руководитель
                            подразделения
                        </option>
                        <option value={'Контролер'}>Контролер</option>
                        <option value={'Рабочий'}>Рабочий</option>
                    </select>
                    <select onChange={(e) => onChangeUnit(e)}
                            style={{padding: "3px", margin: "5px", width: "170px"}}>
                        <option value={null}></option>
                        <option value={'Отдел продаж'}>Отдел продаж</option>
                        <option value={'Отдел закупки'}>Отдел закупки</option>
                    </select>
                    <span>
                        <button
                            onClick={(e) => props.onClickAdd(e)}
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