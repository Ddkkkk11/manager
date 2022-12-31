import React from 'react'
import { Button, Form, Input, Card, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import logoImg from '../../assets/logo.svg'
import fetchLogin from '../../request/store';
import './style.css'
export default function Login() {
  const onFinish = (values: any) => {
    console.log('Success:', values);
    const params = values;
    fetchLogin(params).then( res => {
      console.log('res', res);
      if(res.err) {
        message.error('Login failure !');
        return;
      }
      message.success('Login Success !')
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
                  prefix={<UserOutlined />}
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password
                  size='large'
                  placeholder='Please input your password!'
                  prefix={<LockOutlined />}
                />
              </Form.Item>

              <Form.Item>
                <Button size='large' type="primary" htmlType="submit" block>
                  Login
                  <img src={logoImg} alt="" />
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>

      </div>
    </>

  )
}