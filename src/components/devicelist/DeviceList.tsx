import React, { useState } from 'react';
import styles from './devicelist.module.scss'

//antd
import { Col, Radio, Row } from 'antd';

//react icon
import { CiGrid41, CiViewList } from "react-icons/ci";
import { TbAccessPoint } from 'react-icons/tb';
import TableDevice from '../tabledevice/TableDevice';
import CardDevice from '../carddevice/CardDevice';

const App: React.FC = () => {
    const [view, setView] = useState('table');

    const handleViewEvent = () => {
        if (view === 'table') {
            setView('grid')
        } else if (view === 'grid') {
            setView('table')
        }
    }
    
    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles.wrapperTitle}>
                    <TbAccessPoint className={styles.iconAccess} />
                    <p className={styles.title}>Danh sách thiết bị</p>
                </div>
                <div className={styles.wrapperButton}>
                    <Radio.Group value={view} onChange={handleViewEvent} optionType="button" buttonStyle="solid">
                        <Radio.Button value="table">
                            <CiViewList />
                        </Radio.Button>
                        <Radio.Button value="grid">
                            <CiGrid41 />
                        </Radio.Button>
                    </Radio.Group>
                </div>
            </div>

            {view === 'table' ? (
                <>
                    <TableDevice />
                </>
            ) : (
                <>
                    <CardDevice />
                </>
            )}
        </div>
    );
};

export default App;