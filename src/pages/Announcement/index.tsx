import React, { useEffect, useState } from "react";
import { Button, Table, Modal, message, Input, Pagination } from 'antd';
import { SearchOutlined } from "@ant-design/icons";
import { deleteAnnouncement, fetchAnnouncement, searchAnnouncement } from "../../request/api";
import ContentForm from "./content-form";
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import "./style.less"

export default function Announcement() {
    const [data, setData] = useState<{ id: number, content: string, time: string }[]>([]);
    const [formState, setFormState] = useState(false);
    const [rowData, setRow] = useState({});
    const [searchVal, setSearchVal] = useState('');
    useEffect(() => {
        fetchAnnouncement().then(res => {
            const data = res.data;
            const formatData = data.map((item: any, index: number) => ({
                ...item,
                key: index,
                time: dayjs(item.time).format("YYYY年M月D日 HH:mm:ss")
            }))
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
                    这篇文章吗？
                </>
            ),
            onOk: () => {
                deleteAnnouncement(record.id).then(res => {
                    if (res.data.affected) {
                        message.success("删除成功");
                        fetchAnnouncement().then(res => {
                            const data = res.data;
                            const formatData = data.map((item: any, index: number) => ({
                                ...item,
                                key: index,
                                time: dayjs(item.time).format("YYYY年M月D日 HH:mm:ss")
                            }))
                            setData(formatData);
                        });
                    }
                })
            }

        });
    }
    //编辑
    const editContent = (record: any) => {
        setFormState(true);
        setRow(record);
    }
    //查询
    const onSearch = () => {
        const params = {
            content: searchVal
        }
        searchAnnouncement(params).then(res =>{
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
            dataIndex: "time",
            key: "content",
            width: 200
        },
        {
            title: '内容',
            dataIndex: 'content',
            key: 'content',
        },
        {
            title: "操作",
            dataIndex: "action",
            key: "action",
            width: 200,
            render: (text: string, record: any) => (
                <>
                    <Button type="primary"  danger onClick={() => handleDelete(record)}>删除</Button>
                    <Button type="primary"  style={{ marginLeft: 10 }} onClick={() => editContent(record)}>编辑</Button>
                </>
            )
        }
    ];
    //控制弹窗开启和关闭
    const handleModal = (isShow: boolean) => {
        setFormState(isShow);
        setRow({});
    }
    return (
        <>
            <section className="announcement-area">
                <div className="announcement-add-area">
                    <Button
                        type="primary"
                        onClick={() => handleModal(true)}>添加公告</Button>
                    <div className="announcement-input-area">
                        <Input
                            placeholder='公告内容'
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

                    {
                        formState ? <ContentForm closeModal={handleModal} setData={setData} rowData={rowData}/> : null
                    }
                </div>
                    <Table
                        dataSource={data}
                        columns={columns}
                        scroll={{  y: "calc(100vh - 300px)"}}
                    />
            </section>
        </>
    );
}
