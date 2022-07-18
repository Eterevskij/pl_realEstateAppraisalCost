import React from 'react';
import { Radio } from 'antd';
import style from './EditBank__block.module.css';

const options = [
    { label: 'Электронный', value: 'Electronic' },
    { label: 'Печатный', value: 'Printed' }
];

const EditBank__block = () => {

    return (
        <div className={style.block}>
            <div className={style.blockHeader}>
                <p className={style.blockTitle}>Квартира /  комната / зем. участок</p>
                <div className={style.blockPrice}></div>
            </div>

            <div className={style.blockFooter}>
                <p className={style.footerTitle}>Формат</p>

                <div className={style.radioWrapper}>
                    <Radio.Group className={style.radio} options={options} />
                </div>

            </div>


        </div>
    )
}

export default EditBank__block; 