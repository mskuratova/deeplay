import React from 'react';
// @ts-ignore
import s from './Modal.module.css'


const ModalAdd = () => {
    return (
        <div className={s.background}>
            <div className={s.hystmodal} id="myModal">
                <div className={s.hystmodal__window}>
                    <span>Добавить сотрудника</span>
                    <input type={"text"} value={"Ф.И.О."}/>
                    <input style={{padding: "3px", margin: "5px", width: "160px"}}
                           type={"date"} value={"День рождения"}/>
                    <input type={"text"} value={"Должность"}/>
                    <select style={{padding: "3px", margin: "5px", width: "170px"}}>
                        <option>Отдел продаж</option>
                        <option>Отдел закупки</option>
                    </select>
                    <span><button data-hystclose className={s.hystmodal__close}>Добавить
                    </button>
                        <button data-hystclose
                                className={s.hystmodal__close}>Закрыть</button></span>
                </div>
            </div>
        </div>)

}

export default ModalAdd;