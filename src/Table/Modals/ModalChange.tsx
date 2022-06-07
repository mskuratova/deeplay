import React, {ChangeEvent, useState} from 'react';
import s from './Modal.module.css'

type ModalChangeType = {
    onChangeJob: (e: ChangeEvent<HTMLSelectElement>) => void
    onClickChange: () => void
    onClickChangeClose: () => void
    children?: React.ReactNode
}

const ModalChange: React.FC<ModalChangeType> = (props) => {

    return (
        <div className={s.background}>
            <div className={s.hystmodal} id="myModal">
                <div className={s.hystmodal__window}>
                    <span>Изменить должность</span>
                    <div>{props.children}</div>
                    <select onChange={(e) => props.onChangeJob(e)}>
                        <option value={''}></option>
                        <option value={'Директор'}>Директор</option>
                        <option value={'Руководитель подразделения'}>Руководитель
                            подразделения
                        </option>
                        <option value={'Контролер'}>Контролер</option>
                        <option value={'Рабочий'}>Рабочий</option>
                    </select>
                    <span><button onClick={props.onClickChange}
                                  className={s.hystmodal__close}>Изменить
        </button>
        <button onClick={props.onClickChangeClose}
                className={s.hystmodal__close}>Закрыть</button></span>
                </div>
            </div>
        </div>)
}

export default ModalChange;