import React from 'react'
import { Button, Form, Input, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {  fetchRegister } from '../../request/api';
import { useNavigate } from "react-router-dom";
import computer from '../../assets/images/computer.svg';
import './style.less'

export default function Register() {
    const navigate = useNavigate();
    const onFinish = (values: any) => {
        const params = values;
        fetchRegister(params).then(res => {
            const data = res.data;
            if (data.userId) {
                message.success({
                    content: '注册成功',
                    duration: 3
                });
                navigate("/login");
            }

        }).catch(err => {
            if (err.message) {
                message.error(err.message);
                return null;
            }
        })
    };

    return (
        <div className='login-box'>
            <div className='container'>

                <div className='container-left'>
                    <div className='content-left'>
                        <img src={computer} alt="computer" className='computed-img'/>
                        <div className='title'>
                            <h1>高校自习室管理系统</h1>
                        </div>
                        <div className='introduce'>
                            <h3>输入您的个人详细信息开始使用！</h3>
                        </div>
                    </div>

                </div>

                <div className='container-right'>
                    <div className='content-right'>
                        <div className='container-right-form'>
                            <h1>注册</h1>
                            <Form
                                name="basic"
                                onFinish={onFinish}
                                autoComplete="off"
                            >
                                <Form.Item
                                    name="username"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Input
                                        size='large'
                                        placeholder='Please input your username!'
                                        prefix={<UserOutlined/>}
                                    />
                                </Form.Item>

                                <Form.Item
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input.Password
                                        size='large'
                                        placeholder='Please input your password!'
                                        prefix={<LockOutlined/>}
                                    />
                                </Form.Item>

                                <Form.Item>
                                    <Button size='large' type="primary" block htmlType="submit"
                                            style={{ marginTop: 10, background: '#2348AF', borderColor: '#2348AF' }}>
                                        Register
                                    </Button>
                                    <Button size='large' type="primary" block onClick={() => navigate("/login")}
                                            style={{ marginTop: 10, background: '#2348AF', borderColor: '#2348AF' }}>
                                        To Login
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
