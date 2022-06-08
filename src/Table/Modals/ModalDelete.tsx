import React from 'react';
import s from './Modal.module.css'

type ModalDeleteType = {
    onClickDelete: () => void
    onClickDeleteClose: () => void
    children?: React.ReactNode
}

const ModalAdd: React.FC<ModalDeleteType> = (props) => {
    return (
        <div className={s.background}>
            <div className={s.hystmodal} id="myModal">
                <div className={s.hystmodal__window}>
                    <span className={s.universal}><b>Удалить сотрудника:</b></span>
                    <div style={{padding: "3px", margin: "5px"}}>{props.children}</div>
                    <span><button onClick={props.onClickDelete}
                                  className={s.hystmodal__close}
                                  style={{padding: "3px", margin: "5px"}}>Удалить
        </button>
        <button onClick={props.onClickDeleteClose}
                className={s.hystmodal__close}
                style={{padding: "3px", margin: "5px"}}>Закрыть</button></span>
                </div>
            </div>
        </div>
    )
}
export default ModalAdd;