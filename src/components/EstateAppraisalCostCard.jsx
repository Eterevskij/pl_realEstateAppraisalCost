import React from 'react';
import { Button } from 'antd';
import style from './EstateAppraisalCostCard.module.css';

import { ReactComponent as Edit } from '../icons/Edit.svg';

const EstateAppraisalCostCard = (props) => {

    const {companyName, Logo, table} = props;

    return (
        <div className={style.card}>
            <div className={style.header}>
                <div className={style.headerLeft}>
                    {Logo}
                    <h6 className={style.organisationName}>{companyName}</h6>
                </div>

                <div className={style.headerRight}>
                    <Button className={style.editButton} icon={<Edit />}>Редактировать</Button>
                </div>
            </div>

            <div className={style.table}>



                <div>

                    <div className={style.tableItem}>
                        <div className={style.tableItemLeft}>
                            <p className={style.columnName}>Квартира / комната / зем. участок</p>
                            <p className={`${style.columnValue} ${style.price}`}>{table[0].price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ") } ₽</p>
                        </div>

                        <div className={style.tableItemRight}>
                            <p className={style.columnName}>Формат</p>
                            <p className={style.columnValue}>{table[0].format === 'electronic' ? 'электронный' : table[1].format === 'printed' ? 'печатный' : ''}</p>
                        </div>

                    </div>

                </div>



                <div>

                    <div className={style.tableItem}>
                        <div className={style.tableItemLeft}>
                            <p className={style.columnName}>Дом с зем. участком</p>
                            <p className={`${style.columnValue} ${style.price}`}>{table[1].price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ") } ₽</p>
                        </div>

                        <div className={style.tableItemRight}>
                            <p className={style.columnName}>Формат</p>
                            <p className={style.columnValue}>{table[1].format === 'electronic' ? 'электронный' : table[1].format === 'printed' ? 'печатный' : ''}</p>
                        </div>

                    </div>

                </div>


            </div>

            <div className={style.editButtonFooterWrapper}>
                <Button className={style.editButton} icon={<Edit />}>Редактировать</Button>
            </div>

        </div>

    )
}

export default EstateAppraisalCostCard; 