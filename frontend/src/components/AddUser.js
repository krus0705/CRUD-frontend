import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Form, Input, Button } from "antd";
import {addUser} from '../action/userAction'
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from 'react-router-dom';

export const AddUser = () => {
  const [name, setName] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = (e) => {
  };

  const onChange = (e) => {
    setName(e.target.value);
  };

  const onFinish = (data) => {
    dispatch(addUser(data))
  }

  const onFinishFailed = () => {
  }

  const onCancel = () => {
  }

  return (
    <div className="container" style={{marginTop: 50, marginLeft: 300}}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off" >

            <Form.Item
              label="email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}>

                <Input
                  type="text"
                  name="email"
                  placeholder="Enter name"
                  required />

            </Form.Item>

            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]} >

              <Input
                type="text"
                onChange={onChange}
                name="email"
                placeholder="Enter email"
                required />
            </Form.Item>

            <Form.Item
              label="Birthday"
              name="birthday"
              rules={[{ required: true, message: "Please input your birthday!" }]} >

              <Input
                type="text"
                name="birthday"
                placeholder="Enter birthday"
                required />

            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              
              <Button type="primary" htmlType="submit" >Insert</Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              
              <Button type="primary" >Cancel</Button>

            </Form.Item>

        </Form>
    </div>
    
  );
};
