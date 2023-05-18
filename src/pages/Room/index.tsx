import React, { useEffect, useState } from 'react';
import { Button, Input, Table } from 'antd';
import { getOneRoom, getRoom } from '../../request/api';
import { Link } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import RoomAddModal from './room-add-modal';
import './style.less'

export default function Room() {
    const [data, setData] = useState([]);
    const [searchVal, setSearchVal] = useState('');
    const [isShowModal, setIsShowModal] = useState(false);
    useEffect(() => {
        getRoom().then(res => {
            const data = res.data;
            setData(data);
        })
    }, []);
    const columns = [
        {
            title: '自习室Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '自习室编号',
            dataIndex: 'roomNumber',
            key: 'roomNumber',
        },
        {
            title: '自习室名称',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '自习室描述',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: '座位',
            dataIndex: 'seat',
            key: 'seat',
            render: (text: string, record: any ) => {
                return <Link to={`/room/seat/${record.id}`}>座位</Link>
            }
        }
    ];
    const onSearch = () => {
        const description = searchVal;
        getOneRoom(description).then(res => {
            const data = res.data;
            setData(data);
        })
    }

    return (
        <section className='room-area'>
            {
                isShowModal ? <RoomAddModal setModalState={setIsShowModal} setData={setData}/> : null
            }
            <div className='room-search-area'>
                <Button
                    type='primary'
                    onClick={() => setIsShowModal(true)}
                >添加自习室
                </Button>
                <div>
                    <Input
                        placeholder='自习室描述'
                        style={{ width: 230 }}
                        onChange={(e) => setSearchVal(e.target.value.trim())}
                        onPressEnter={(e) => onSearch()}
                    />
                    <Button
                        type='primary'
                        icon={<SearchOutlined/>}
                        style={{ width: 46 }}
                        onClick={(e) => onSearch()}
                    />
                </div>
            </div>
            <div className="table-area">
                <Table dataSource={data} columns={columns} scroll={{  y: "calc(100vh - 300px)" }}/>
            </div>
        </section>
    )
}
