import React, { useEffect, useState } from "react";
import { Button, Input, message, Modal, Table } from 'antd';
import { SearchOutlined } from "@ant-design/icons";
import { deleteComment, fetchComment, searchComment } from "../../request/api";
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import "./style.less"

export default function Comment() {
    const [data, setData] = useState<{ id: number, content: string, time: string }[]>([]);
    const [searchVal, setSearchVal] = useState('');
    useEffect(() => {
        fetchComment().then(res => {
            const data = res.data;
            const formatData = data.map((item: any, index: number) => ({
                ...item,
                key: index,
                createdAt: dayjs(item.createdAt).format("YYYY年M月D日 HH:mm:ss")
            }));
            setData(formatData);
        });
    }, []);
    const handleDelete = (record: any) => {
        Modal.confirm({
            title: `删除确认`,
            content: (
                <>
                    <span>确定要删除id为</span>
                    <span style={{ color: "red" }}>{record.id}</span>
                    这个评论吗？
                </>
            ),
            onOk: () => {
                console.log("recordId", typeof record.id);
                deleteComment(record.id).then(res => {
                    if (res.data.affected) {
                        message.success("删除成功");
                        fetchComment().then(res => {
                            const data = res.data;
                            const formatData = data.map((item: any, index: number) => ({
                                ...item,
                                key: index,
                                createdAt: dayjs(item.createdAt).format("YYYY年M月D日 HH:mm:ss")
                            }))
                            setData(formatData);
                        });
                    }
                }).catch(err => {
                    if (err.message) {
                        message.error(`当前评论已有回复，请先删除评论id为${record.id}的回复`)
                    }
                })
            }
        });
    }
    //查询
    const onSearch = () => {
        const params = {
            content: searchVal
        }
        searchComment(params).then(res => {
            const data = res.data;
            setData(data);
        })
    }

    const columns = [
        {
            title: "Id",
            dataIndex: "id",
            key: "id",
            width: 100
        },
        {
            title: "创建时间",
            dataIndex: "createdAt",
            key: "createdAt",
            width: 200
        },
        {
            title: '内容',
            dataIndex: 'content',
            key: 'content',
        },
        {
            title: "年纪",
            dataIndex: "grade",
            key: "grade"
        },
        {
            title: "班级",
            dataIndex: "className",
            key: "className"
        },
        {
            title: "操作",
            dataIndex: "action",
            key: "action",
            width: 200,
            render: (text: string, record: any) => (
                <>
                    <Button type="primary" danger onClick={() => handleDelete(record)}>删除</Button>
                </>
            )
        }
    ];
    return (
        <>
            <section className="comment-area">
                <div className="comment-input-area">
                    <Input
                        placeholder='评论内容'
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
                <Table
                    dataSource={data}
                    columns={columns}
                    scroll={{ y: "calc(100vh - 300px)" }}
                />
            </section>
        </>
    );
}
