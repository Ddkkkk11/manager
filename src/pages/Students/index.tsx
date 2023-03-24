import React, { useEffect, useState } from "react";
import { Button, Input, Table } from 'antd';
import { SearchOutlined } from "@ant-design/icons";
import './style.less'
import { fetchStudent } from "../../request/api";


export default function Students() {
    const [data, setData] = useState([]);
    const [searchVal, setSearchVal] = useState('');
    useEffect(() => {
        fetchStudent({ student_name: "" }).then(res => {
            const data = res.data;
            setData(data);
        })
    }, [])
    const columns = [
        {
            title: '学生名称',
            dataIndex: 'student_name',
            key: 'student_id',
        },
        {
            title: '学号',
            dataIndex: 'student_id',
            key: 'student_id',
        },
        {
            title: "班级",
            dataIndex: "student_class",
            key: "student_class"
        },
        {
            title: '创建时间',
            dataIndex: 'create_time',
            key: 'student_id',
        },
        {
            title: "学生电话",
            dataIndex: "student_phone",
            key: 'student_id'
        }
    ];
    const onSearch = () => {
        const params = {
            student_name: searchVal
        }
        fetchStudent(params).then(res =>{
            const data = res.data;
            setData(data);
        })
    }
    return (
        <section>
            <div className="search-area">
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
            <div className="table-area">
                <Table dataSource={data} columns={columns}/>
            </div>
        </section>
    );
}
