import React from "react";
import { Table, Typography } from "antd";
import type { TableProps } from "antd";

interface DataType {
  key: string;
  name: string;
  email: string;
  numerphone: string;
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
      let color = text === "SMS" ? "yellow" : "green";

      return <Text color={color}>{text}</Text>;
    },
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    email: "tin08042002@gmail.com",
    numerphone: "090302402",
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
