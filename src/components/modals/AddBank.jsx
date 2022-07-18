import React from 'react';
import { Modal, Button, Input } from 'antd';
import style from './AddBank.module.css';


const EditBank = () => {

    return (
        <Modal visible={true} className={style.modal} footer={null}>
            <h4 className={style.title}>Добавить банк для города</h4>

            <div className={style.subtitleWrapper}>
                <p className={style.subtitle}>Укажите город и выберите для него нужные банки.</p>
                <p className={style.subtitle}>После этого сможете задать тарифы отдельно для каждого банка.</p>
            </div>

            <div className={style.inputsWrapper}>
                <Input className={style.input} placeholder='Выберите город' />
                <Input className={style.input} placeholder='Выбрать банки' />
            </div>

            <div className={style.footer}>
                <div className={style.buttonWrapper}>
                    <Button className={style.saveButton}>Сохранить изменения</Button>
                </div>
            </div>


        </Modal>
    )
}

export default EditBank; 