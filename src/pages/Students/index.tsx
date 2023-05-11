import React, { useEffect, useState } from "react";
import { Button, Input, Table } from 'antd';
import { SearchOutlined } from "@ant-design/icons";
import './style.less'
import { fetchOneStudent, fetchStudent } from "../../request/api";
import AddStudentModal from "./AddStudentModal";


export default function Students() {
    const [data, setData] = useState([]);
    const [searchVal, setSearchVal] = useState('');
    const [modalState, setModalState] = useState(false);
    const [rowData, setRowData] = useState(null);
    useEffect(() => {
        fetchStudent({ student_name: "" }).then(res => {
            const data = res.data;
            setData(data);
        })
    }, [])
    const editRow = (isShow: boolean, rowData: any) => {
        setModalState(isShow);
        setRowData(rowData)
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
                    <Button type="primary"  danger onClick={() => console.log('删除')}>删除</Button>
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
