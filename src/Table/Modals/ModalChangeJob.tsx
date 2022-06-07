import React, {ChangeEvent} from 'react';
import s from './Modal.module.css'

type ModalChangeType = {
    onChangeJob: (e: ChangeEvent<HTMLSelectElement>) => void
    onClickChange: () => void
    onClickChangeClose: () => void
    children?: React.ReactNode
}

const ModalChangeJob: React.FC<ModalChangeType> = (props) => {
    const jobTitle = props.children[1]

    return (
        <div className={s.background}>
            <div className={s.hystmodal} id="myModal">
                <div className={s.hystmodal__window}>
                    <span><b>Повысить</b></span>
                    <div>{props.children[0]}</div>
                    <select onChange={(e) => props.onChangeJob(e)} className={s.universal}>
                        <option value={''}></option>
                        <option value={'Директор'}>Директор</option>
                        {(jobTitle === "Рабочий") ? <>
                            <option value={'Руководитель подразделения'}>Руководитель подразделения</option>
                            <option value={'Контролер'}>Контролер</option>
                        </>:
                        (jobTitle === "Контролер") ? <option value={'Руководитель подразделения'}>Руководитель подразделения</option>
                            : <></>}
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

export default ModalChangeJob;