import React from "react";
import { Form, Input, message, Modal } from "antd";
import { editStudent, fetchOneStudent, fetchRegister, fetchStudent } from "../../../request/api";

export default function AddStudentModal(props: any) {
    const { onSetStudentModal, rowData, setData } = props;
    console.log(rowData, '数据')
    const [form] = Form.useForm();
    const onFinish = (values: any) => {
        const parmas = values;
        if (rowData?.userId) {
            //编辑
            onSetStudentModal(false);
            editStudent(rowData.userId, parmas).then(res => {
                const params = {
                    username: ''
                }
                fetchOneStudent(params).then(res => {
                    const data = res.data;
                    message.success('编辑成功');
                    setData(data);
                });
            }).catch(err => {
                message.error('编辑失败');
            })
        }else {
            //新增
            onSetStudentModal(false);
            fetchRegister(parmas).then(res => {
                message.success('添加成功');
                const params = {
                    username: ''
                }
                fetchOneStudent(params).then(res => {
                    const data = res.data;
                    setData(data);
                });
            }).catch(err => {
                message.error(err.message);
            })

        }

    }
    return (
        <Modal
            title='Add Student'
            visible
            onCancel={() => onSetStudentModal(false)}
            onOk={() => form.submit()}
        >
            <Form
                form={form}
                initialValues={{ ...rowData }}
                labelCol={{ span: 4 }}
                onFinish={onFinish}
            >
                <Form.Item
                    name='username'
                    label='UserName'
                    required={true}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    name='password'
                    label='PassWord'
                    required={true}
                >
                    <Input/>
                </Form.Item>
            </Form>

        </Modal>
    )
}
