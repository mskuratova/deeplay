import React, {ChangeEvent, useState} from 'react';
import s from './Modal.module.css'


type ModalChangeType = {
    onClickChangeFullName: (value: string) => void
    onClickChangeClose: () => void
    children?: React.ReactNode
}

const ModalChangeFullName: React.FC<ModalChangeType> = (props) => {
    const fullName = props.children[0] as string

    const [newFullName, semNewFulName] = useState<string>(fullName)

    const setFullName = (e: ChangeEvent<HTMLInputElement>) => {
        semNewFulName(e.currentTarget.value);
    }
    const onChangeFullName = () => {
        props.onClickChangeFullName(newFullName)
    }
    return (
        <div className={s.background}>
            <div className={s.hystmodal} id="myModal">
                <div className={s.hystmodal__window}>
                    <span><b>Изменить Ф.И.О.</b></span>
                    <div>{props.children}</div>
                    <input type={"text"} value={newFullName}
                           onChange={(e) => setFullName(e)}/>
                    <span><button onClick={onChangeFullName}
                                  className={s.hystmodal__close}>Изменить
        </button>
        <button onClick={props.onClickChangeClose}
                className={s.hystmodal__close}>Закрыть</button></span>
                </div>
            </div>
        </div>)
}

export default ModalChangeFullName;