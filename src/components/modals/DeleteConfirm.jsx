import React from 'react';
import { Modal, Button, Input } from 'antd';
import style from './DeleteConfirm.module.css';

import { ReactComponent as Alert } from '../../icons/Alert.svg';


const DeleteConfirm = () => {

    return (
        <Modal visible={true} className={style.modal} footer={null}>
            <Alert className={style.icon} />

            <h5 className={style.title}>Удалить банк</h5>
            <h5 className={style.subtitle}>Вы уверены что хотите удалить банк для этого города?</h5>

            <div className={style.buttonWrapper}>
                <div>
                    <Button className={`${style.button} ${style.delete}`}>Удалить</Button>
                </div>
                <div>
                    <Button className={`${style.button} ${style.cancel}`}>Отмена</Button>
                </div>
            </div>
            

        </Modal>
    )
}

export default DeleteConfirm; 