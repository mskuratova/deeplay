import React from 'react';
// @ts-ignore
import s from './Modal.module.css'

type ModalDeleteType = {
    onClickDelete: () => void
    children?: React.ReactNode
}

const ModalAdd: React.FC<ModalDeleteType> = (props) => {
    return (
        <div className={s.background}>
            <div className={s.hystmodal} id="myModal">
                <div className={s.hystmodal__window}>
                    <span>Удалить сотрудника</span>
                    <div>{props.children}</div>
                        <span><button className={s.hystmodal__close}>Удалить
        </button>
        <button onClick={props.onClickDelete}
                className={s.hystmodal__close}>Закрыть</button></span>
                    </div>
                </div>
            </div>
            )
            }

            export default ModalAdd;