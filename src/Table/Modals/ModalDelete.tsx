import React from 'react';
// @ts-ignore
import s from './Modal.module.css'


const ModalAdd = () => {
    return (
        <div className={s.background}>
        <div className={s.hystmodal} id="myModal">
    <div className={s.hystmodal__window}>
        <span>Удалить сотрудника</span>
<div>Иванов Иван Иванович</div>
    <span><button data-hystclose className={s.hystmodal__close}>Удалить
        </button>
        <button data-hystclose
    className={s.hystmodal__close}>Закрыть</button></span>
    </div>
    </div>
    </div>)

}

export default ModalAdd;