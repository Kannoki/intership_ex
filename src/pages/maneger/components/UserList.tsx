import React from "react";
import { Table, Typography } from "antd";
import type { TableProps } from "antd";
import "./UserList.scss";
interface DataType {
  key: string;
  name: string;
  email: string;
  numberphone: string;
  service: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Name user",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email Sinup",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Numberphone",
    dataIndex: "numberphone",
    key: "numberphone",
    ellipsis: {
      showTitle: false,
    },
  },
  {
    title: "Service",
    key: "service",
    dataIndex: "service",
    render: (text) => {
      let color = text === "SMS" ? "#BF8F00" : "green";

      return <Text style={{ color: color, fontWeight: "bold" }}>{text}</Text>;
    },
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    email: "tin08042002@gmail.com",
    numberphone: "0903024020",
    service: "SMS",
  },
  {
    key: "2",
    name: "John Terry",
    email: "tin08042002@gmail.com",
    numberphone: "0903024020",
    service: "Storage",
  },
  {
    key: "3",
    name: "Messi",
    email: "tin08042002@gmail.com",
    numberphone: "0903024020",
    service: "SMS",
  },
];

const { Text } = Typography;

export default function Components() {
  return (
    <div className="box-table">
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
