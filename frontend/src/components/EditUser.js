import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, getAll } from "../action/userAction";
import { Form, Input, Button } from "antd";

export const EditUser = (props) => {
  const form = React.createRef();
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  console.log(users);
  const currentUserId = props.match.params.id;

  useEffect(() => {
    dispatch(getAll());
  }, []);

  useEffect(() => {
    const userId = currentUserId;
    if (users.length) {
      const selectedUser = users.find((user) => user.id === parseInt(userId));
    }
  }, [users]);

  const onFinish = (e) => {
    e.preventDefault();
    // dispatch(updateUser(selectedUser));
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off" >

        <Form.Item
          label="email"
          name="email"
          rules={[{ required: true, message: "Please input your name!" }]}>

            <Input
              type="text"
              name="email"
              placeholder="Enter name"
              required />

        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]} >

          <Input
            type="text"
            onChange={onChange}
            name="email"
            placeholder="Enter email"
            required />
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: "Please input your address!" }]} >

          <Input
            type="text"
            onChange={onChange}
            name="address"
            placeholder="Enter address"
            required />

        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          
          <Button type="submit">Edit User</Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
          <Link to="/" className="btn btn-danger ml-2">
            Cancel
          </Link>

        </Form.Item>

    </Form>
  );
};
