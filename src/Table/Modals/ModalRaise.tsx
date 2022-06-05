import React from 'react';
// @ts-ignore
import s from './Modal.module.css'


const ModalAdd = () => {
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
                    {/*<select>*/}
                    {/*    <option>Отдел продаж</option>*/}
                    {/*    <option>Отдел закупки</option>*/}
                    {/*</select>*/}
                    <span><button data-hystclose className={s.hystmodal__close}>Изменить
        </button>
        <button data-hystclose
                className={s.hystmodal__close}>Закрыть</button></span>
                </div>
            </div>
        </div>)

}

export default ModalAdd;