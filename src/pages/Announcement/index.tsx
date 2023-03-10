import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { fetchStudent } from "../../request/api";

export default function Announcement() {
    const [dataSource, setDataSource] = useState(null);
    // useEffect(() => {
    //     fetchStudent().then(res => {
    //         const data = res.data;
    //         setDataSource(data);
    //     })
    // }, []);

    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
        },
        {
            title: '年龄',
            dataIndex: 'age',
        },
        //  {
        //           key: '2',
        //           name: '胡彦祖',
        //           age: 42,
        //           address: '西湖区湖底公园1号',
        //         },
        {
            title: '地址',
            dataIndex: 'address',
        },
    ];
    if (!dataSource) {
        return null;
    }
    return (
        <>
            <Table dataSource={dataSource} columns={columns}/>;
        </>
    )
};
