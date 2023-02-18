import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, Form, Input, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { fetchRegister } from '../../request/api';
import logoImg from '../../assets/logo.svg'
import './style.less'

export default function Register() {
    const navigate = useNavigate();
    const onFinish = (values: any) => {
        const params = values;
        fetchRegister(params).then(res => {
            console.log('res', res);
            /* if(res.err) {
                 message.error('Register failure !');
                 return;
             }*/
            if (res.errCode) {
                message.error(res.message)
                return;
            }
            ;
            message.success("Register Success!");
            //跳转到登录页面
            setTimeout(() => {
                navigate("/login");
            }, 1500)
        })
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <div className="login">
                <div className='login_box_card'>
                    <Card className='box_card' title='高校自习室管理系统' hoverable bordered>
                        <Form
                            name="basic"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
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
                                <Button size='large' type="primary" htmlType="submit" block>
                                    Register
                                    <img src={logoImg} alt=""/>
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </div>

            </div>
        </>
    )
}
