import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Input, Table } from 'antd';
import { getSeat, getSeatByNumber } from '../../request/api';
import { SearchOutlined } from '@ant-design/icons';
export default function Seat() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [searchVal, setSearchVal] = useState('');
    useEffect(() => {
        getSeat(id).then(res => {
            const data = res.data;
            setData(data);
        })
    }, []);
    const columns = [
        {
            title: '座位ID',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: '座位编号',
            dataIndex: 'seatNumber',
            key: 'seatNumber'
        },
        {
            title: '座位状态',
            dataIndex: 'status',
            key: 'status',
            render: (status: number) => {
                return (
                    status ? '忙碌' : '空闲'
                )
            }
        },
        {
            title: '使用者',
            dataIndex: 'username',
            key: 'username'
        },
        {
            title: '操作',
            dataIndex: 'action',
            key: 'action',
            render: (action: any, record: any) => {
                return record.status===1 ? <Button type="primary"  danger>释放</Button> : '--'
            }
        }
    ]
    const onSearch = () => {
        const seatNumber = searchVal;
        console.log(seatNumber);
        getSeatByNumber(seatNumber).then(res => {
            const data = res.data;
            setData(data);
            //TODO 接口问题传空值报错
        })


    }
    return (
        <section>
            <div className='search-area'>
                <div>
                    <Input
                        placeholder='座位编号'
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
