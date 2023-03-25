import React, { useState } from "react";
import { Form, Input, message, Modal } from "antd";
import { addAnnouncement, editAnnouncement, fetchAnnouncement } from "../../../request/api";
import dayjs from "dayjs";
interface IProps {
    closeModal: (isShow: boolean) => void,
    setData: any,
    rowData: any
}
export default function ContentForm(props: IProps) {
    const [form] = Form.useForm();
    const { closeModal, setData, rowData } = props;
    const onFinish = (values: { content: string }) => {
        const params = values;
        if (!rowData.id) {
            //新增
            addAnnouncement(params).then(res => {
                const data = res.data;
                if (!data.id) {
                    message.error("添加失败");
                    return null;
                }
                message.success("添加成功");
                fetchAnnouncement().then(res => {
                    const data = res.data;
                    const formatData = data.map((item: any, index: number) => ({
                        ...item,
                        key: index,
                        time: dayjs(item.time).format("YYYY年M月D日 HH:mm:ss")
                    }))
                    setData(formatData);
                });
            });
        }else {
            //编辑
            editAnnouncement(rowData.id, params).then(res => {
                if (res.data.affected) {
                    message.success("编辑成功");
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

    }
    const onOk = () => {
        closeModal(false);
        form.submit();
    }
    return (
        <Modal visible title={rowData.id? "编辑公告": "添加公告" } width={"50%"} onCancel={() => closeModal(false)} onOk={() =>onOk()}>
            <Form
                form={form}
                onFinish={onFinish}
                initialValues={{
                    content: rowData.content
                }}
            >
                <Form.Item
                    label="公告内容"
                    name="content"
                    labelCol={{ span: 24 }}
                    rules={[{ required: true, message: "请输入公告内容" }]}
                >
                    <Input.TextArea  size={"large"} style={{ height: 200 }}></Input.TextArea>
                </Form.Item>
            </Form>
        </Modal>

    )
}
