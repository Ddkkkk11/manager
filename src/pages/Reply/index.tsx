import React, { useEffect, useState } from "react";
import { deleteComment, deleteReply, fetchComment, fetchReply, searchComment } from "../../request/api";
import { Button, Input, message, Modal, Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

export default function Reply() {
    const [data, setData] = useState<{ id: number, content: string, time: string }[]>([]);
    const [searchVal, setSearchVal] = useState('');
    useEffect(() => {
        fetchReply({}).then(res => {
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
        console.log("record", record);
        Modal.confirm({
            title: `删除确认`,
            content: (
                <>
                    <span>确定要删除评论id为</span>
                    <span style={{ color: "red" }}>{record.parentCommentId}</span>
                    这个回复吗？
                </>
            ),
            onOk: () => {
                console.log("recordId", typeof record.id);
                deleteReply(record.id).then(res => {
                    if (res.data.affected) {
                        message.success("删除成功");
                        fetchReply({}).then(res => {
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
                        message.error(err.message)
                    }
                })
            }
        });
    }
    //查询
    const onSearch = () => {
        const params = {
            parentCommentId: searchVal !== "" ? Number(searchVal) : ""
        }
        fetchReply(params).then(res => {
            const data = res.data;
            const formatData = data.map((item: any, index: number) => ({
                ...item,
                key: index,
                createdAt: dayjs(item.createdAt).format("YYYY年M月D日 HH:mm:ss")
            }));
            setData(formatData);
        })
    }

    const columns = [
        {
            title: "评论Id",
            dataIndex: "parentCommentId",
            key: "parentCommentId",
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
            title: "年级",
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
                        placeholder='评论Id'
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
