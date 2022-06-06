import React from 'react';
import s from './Modal.module.css'

type ModalChangeType = {
    onClickChange: () => void
    children?: React.ReactNode
}

const ModalChange:React.FC<ModalChangeType> = (props) => {
    return (
        <div className={s.background}>
            <div className={s.hystmodal} id="myModal">
                <div className={s.hystmodal__window}>
                    <span>Изменить должность</span>
                    <div>Иванов Иван Иванович</div>
                    <select>
                        <option>Директор</option>
                        <option>Руководитель подразделения</option>
                        <option>Контролер</option>
                        <option>Рабочий</option>
                    </select>
                    <span><button className={s.hystmodal__close}>Изменить
        </button>
        <button onClick={props.onClickChange} className={s.hystmodal__close}>Закрыть</button></span>
                </div>
            </div>
        </div>)
}

export default ModalChange;