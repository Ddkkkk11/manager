import React, { useEffect, useState } from "react";
import { Button, Input, message, Modal, Table } from 'antd';
import { SearchOutlined } from "@ant-design/icons";
import './style.less'
import { deleteStudent, fetchOneStudent, fetchStudent } from "../../request/api";
import AddStudentModal from "./AddStudentModal";
import dayjs from 'dayjs';


export default function Students() {
    const [data, setData] = useState([]);
    const [searchVal, setSearchVal] = useState('');
    const [modalState, setModalState] = useState(false);
    const [rowData, setRowData] = useState(null);
    useEffect(() => {
        fetchStudent({ student_name: '' }).then(res => {
            const data = res.data;
            setData(data);
        })
    }, []);
    const editRow = (isShow: boolean, rowData: any) => {
        setModalState(isShow);
        setRowData(rowData)
    }
    const onDeleteStudent = (record: any) => {
        const id = record.userId;
        Modal.confirm({
            title: `删除确认`,
            content: (
                <>
                    <span>确定删除用户</span>
                    <span style={{ color: "red" }}>{record.username}</span>
                    吗？
                </>
            ),
            onOk: () => {
                deleteStudent(id).then(res => {
                    message.success('删除成功');
                    fetchStudent({ student_name: "" }).then(res => {
                        const data = res.data;
                        setData(data);
                    })
                }).catch(err => {
                    message.error('删除失败');
                })
            }

        });

    }
    const columns = [
        {
            title: '学生Id',
            dataIndex: 'userId',
            key: 'userId',
        },
        {
            title: '学生用户名',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: "学生班级",
            dataIndex: "className",
            key: "className"
        },
        {
            title: '学生年级',
            dataIndex: 'grade',
            key: 'grade',
        },
        {
            title: "Icon",
            dataIndex: "icon",
            key: 'icon',
            render: (url: string) => {
                return <img src={url} alt="" style={{ width: 128, height: 128 }}/>
        }
        },
        {
            title: "操作",
            dataIndex: "action",
            key: "action",
            width: 200,
            render: (text: string, record: any) => (
                <>
                    <Button type="primary"  danger onClick={() => onDeleteStudent(record)}>删除</Button>
                    <Button type="primary"  style={{ marginLeft: 10 }} onClick={() => editRow(true, record)}>编辑</Button>
                </>
            )
        }
    ];
    const onSearch = () => {
        const params = {
            username: searchVal
        }
        fetchOneStudent(params).then(res =>{
            const data = res.data;
            setData(data);
        })
    }
    const onSetStudentModal = (isShow: boolean) => {
        setModalState(isShow);
        setRowData(null);
    }
    return (
        <section>
            <div className="search-area">
                <div>
                    <Input
                        placeholder='学生名称'
                        style={{ width: 230 }}
                        onChange={(e) => setSearchVal(e.target.value.trim())}
                        onPressEnter={(e) => onSearch()}
                    />
                    <Button
                        type='primary'
                        icon={<SearchOutlined/>}
                        style={{ width: 46 }}
                        onClick={() => onSearch()}
                    />
                </div>
                <Button type="primary" onClick={() => onSetStudentModal(true)} style={{ position: "absolute", left: 200 }}>添加学生</Button>
                {
                    modalState? <AddStudentModal onSetStudentModal={onSetStudentModal} rowData={rowData} setData={setData}/> : null
                }

            </div>
            <div className="table-area">
                <Table dataSource={data} columns={columns} scroll={{  y: "calc(100vh - 300px)" }}/>
            </div>
        </section>
    );
}
