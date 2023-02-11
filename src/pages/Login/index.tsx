import React from 'react'
import { Button, Form, Input, Card, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { fetchLogin } from '../../request/api';
import {useNavigate} from "react-router-dom";
import SetLocal from "../../utils";
import computer  from '../../assets/images/computer.svg'
import './style.less'
export default function Login() {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    const params = values;
    fetchLogin(params).then( res => {
      console.log('res', res);
      if (res.error) {
        message.error(res.error);
        return;
      };
        //存储数据
      // const data = res.data;
      // SetLocal({
      //   avatar: data.avatar,
      //   "cms-token": data["cms-token"],
      //   editable: data.editable,
      //   player: data.player,
      //   username: data.username
      // });
      setTimeout(() => {
        navigate('/home');
        message.success(res.message);
      }, 500);
      // localStorage.setItem('avatar', data.avatar);
      // localStorage.setItem('cms-token', data["cms-token"]);
      // localStorage.setItem('editable', data.editable);
      // localStorage.setItem('player', data.player);
      /*if(res.err) {
        message.error('Login failure !');
        return;
      }
      message.success('Login Success !')*/
    })
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
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
                <h1>登录</h1>
                <Form
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    initialValues={{
                      username: 'admin',
                      password: '123456'
                    }}
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
                    <Button size='large' type="primary" htmlType="submit" block style={{ marginTop: 10, background: '#2348AF', borderColor: '#2348AF' }}>
                      Login
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>


        </div>


      </div>

    </>
  )
}
