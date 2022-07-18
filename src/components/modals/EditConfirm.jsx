import React from 'react';
import { Modal, Button, Input } from 'antd';
import style from './EditConfirm.module.css';

import { ReactComponent as Warning } from '../../icons/Warning.svg';


const EditConfirm = () => {

    return (
        <Modal visible={true} className={style.modal} footer={null}>
            <Warning className={style.icon} />

            <h5 className={style.title}>Внесены изменения</h5>
            <h5 className={style.subtitle}>Вы уверены что хотите удалить банк для этого города?</h5>

            <div className={style.buttonWrapper}>
                <div>
                    <Button className={`${style.button} ${style.save}`}>Сохранить</Button>
                </div>
                <div>
                    <Button className={`${style.button} ${style.cancel}`}>Не сохранять</Button>
                </div>
            </div>
            

        </Modal>
    )
}

export default EditConfirm; 