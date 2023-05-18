import React from 'react';
import { Form, Input, InputNumber, message, Modal } from 'antd';
import { addRoom, getRoom } from '../../../request/api';

export default function RoomAddModal(props: any) {
    const { setModalState, setData } = props;
    const [form] = Form.useForm();
    const onFinish = (value: any) => {
        const params = value;
        addRoom(params).then(res => {
            message.success('添加成功');
            setModalState(false);
            getRoom().then(res => {
                const data = res.data;
                setData(data);
            })

        }).catch(res => {
            message.error('添加失败');
        })

    }
    return (
        <Modal
            title='添加自习室'
            visible
            onCancel={() => setModalState(false)}
            onOk={() => form.submit()}
        >
            <Form
                form={form}
                onFinish={onFinish}
            >
                <Form.Item
                    label='自习室名称'
                    name='name'
                    required
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label='自习室编号'
                    name='roomNumber'
                    required
                >
                    <InputNumber style={{ width: '100%' }}/>
                </Form.Item>
                <Form.Item
                    label='自习室描述'
                    name='description'
                    required
                >
                    <Input/>
                </Form.Item>
            </Form>
        </Modal>
    )
}
