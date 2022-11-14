import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAll, deleteUser } from "../action/userAction";
import { Button, Table, Col, Space } from "antd";

export const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  
  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  const dataSource = users.map((user, index) => {
    user.no = index + 1;
    user.key = "user" + index;
    return user;
  });

  const columns = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Birthday",
      dataIndex: "birthday",
      key: "birthday",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/edit/${record.id}`}>Edit</Link>
          <a onClick={() => dispatch(deleteUser(record.id))}>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <Col>
      {users.length > 0 ? (
        <>
          <Table dataSource={dataSource} columns={columns} />
        </>
      ) : (
        <h4 className="text-center">No Users</h4>
      )}
    </Col>
  );
};
