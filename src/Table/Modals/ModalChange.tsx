import React, {ChangeEvent, useState} from 'react';
import s from './Modal.module.css'

type ModalChangeType = {
    onChangeJob: (e: ChangeEvent<HTMLSelectElement>) => void
    onClickChange: () => void
    onClickChangeClose: () => void
    children?: React.ReactNode
}

const ModalChange: React.FC<ModalChangeType> = (props) => {
    debugger
    const [jobTitle, setJobTitle] = useState<string>('Рабочий');
    const onClickChange = (value: string) => {
        debugger
        setJobTitle(value)
        props.onClickChange()
    }
    console.log(jobTitle)

    return (
        <div className={s.background}>
            <div className={s.hystmodal} id="myModal">
                <div className={s.hystmodal__window}>
                    <span>Повысить</span>
                    <div>{props.children}</div>
                    <select onChange={(e) => props.onChangeJob(e)}>
                        <option value={''}></option>
                        <option value={'Директор'}>Директор</option>
                        <option value={'Руководитель подразделения'}>Руководитель
                            подразделения
                        </option>
                        <option value={'Контролер'}>Контролер</option>
                        {/*{jobTitle === 'Руководитель подразделения' ?*/}
                        {/*    <option value={'Директор'}>Директор</option> :*/}
                        {/*    <div>*/}
                        {/*        <option value={''}></option>*/}
                        {/*        <option value={'Директор'}>Директор</option>*/}
                        {/*        <option value={'Руководитель подразделения'}>Руководитель*/}
                        {/*            подразделения*/}
                        {/*        </option>*/}
                        {/*        <option value={'Контролер'}>Контролер</option>*/}
                        {/*    </div>}*/}
                        {/*{jobTitle === 'Контролер' ?*/}
                        {/*    <option value={'Директор'}>Директор</option> :*/}
                        {/*    <div>*/}
                        {/*        <option value={''}></option>*/}
                        {/*        <option value={'Директор'}>Директор</option>*/}
                        {/*        <option value={'Руководитель подразделения'}>Руководитель*/}
                        {/*            подразделения*/}
                        {/*        </option>*/}
                        {/*        <option value={'Контролер'}>Контролер</option>*/}
                        {/*    </div>}*/}
                    </select>
                    <span><button onClick={(value) => onClickChange}
                                  className={s.hystmodal__close}>Изменить
        </button>
        <button onClick={props.onClickChangeClose}
                className={s.hystmodal__close}>Закрыть</button></span>
                </div>
            </div>
        </div>)
}

export default ModalChange;