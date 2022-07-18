import React from 'react';
import { Modal, Button } from 'antd';
import style from './EditBank.module.css';
import BankBlock from './EditBank__block.jsx';

import { ReactComponent as Logo } from '../../icons/OrganisationLogo2.svg';
import { ReactComponent as Trash } from '../../icons/Delete.svg';


const EditBank = () => {

    return (
        <Modal footer={null} visible={true} className={style.popupWrapper}>
            <div className={style.popup}>
                <div className={style.header}>
                    <Logo className={style.logo} />
                    <h4 className={style.bankTitle}>Совкомбанк</h4>
                </div>

                <BankBlock />
                <BankBlock />

                <div className={style.footer}>
                    <div className={style.saveButtonWrapper}>
                        <Button disabled={false} className={style.saveButton}>Сохранить изменения</Button>
                    </div>
                    <div className={style.deleteButtonWrapper}>
                        <Button  className={style.deleteButton} icon={<Trash />}>Удалить банк</Button>
                    </div>
                </div>


            </div>
        </Modal>
    )
}

export default EditBank; 