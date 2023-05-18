import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Input, message, Modal, Table } from 'antd';
import { addSeat, deleteSeat, getSeat, getSeatByNumber } from '../../request/api';
import { SearchOutlined } from '@ant-design/icons';
import './style.less'
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
    const onDeleteSeat = (seatId: number) => {
        Modal.confirm({
            title: '释放座位',
            content: `确定要释放这个ID为${seatId}的座位吗`,
            onOk: () => {
                deleteSeat(seatId).then(res => {
                    message.success('释放成功');
                    getSeat(id).then(res => {
                        const data = res.data;
                        setData(data);
                    })

                }).catch(err => {
                    message.error('释放失败');
                })
            }
        })
    }
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
                return record.status===1 ? <Button type="primary"  danger onClick={() => onDeleteSeat(record.id)}>释放</Button> : '--'
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

    //点击添加座位
    const onHandle = (roomId: any) => {
        const params = {
            roomId: Number(roomId),
            status: 0,
            seatNumber: Number(roomId)
        }
        Modal.confirm({
            title: `添加`,
            content: '是否增加一个新的座位',
            onOk: () => {
                addSeat(params).then(res => {
                    message.success('添加成功');
                    getSeat(id).then(res => {
                        const data = res.data;
                        setData(data);
                    })
                }).catch(err => {
                    message.error('添加失败');
                })
            }
        });
    }
    return (
        <section className='seat-area'>
            <div className='seat-search-area'>
                <Button
                    type='primary'
                    onClick={() => onHandle(id)}
                >添加座位
                </Button>

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
