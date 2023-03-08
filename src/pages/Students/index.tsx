import React from "react";
import Table from '../../components/Table'
import { fetchStudent } from "../../request/api";
import './style.less'

const gridManagerName = "home-table-123asdasdasdasdasd";

export default function Students() {
    const option = {
        gridManagerName,
        ajaxData: () => fetchStudent(),
        columnData: [
            {
                key: "student_id",
                text: "学生ID",
                width: 200
            },
            {
                key: "student_name",
                text: "学生名称",
                width: 200
            },
            {
                key: "create_time",
                text: "创建时间"
            }
        ]
    }
    return (
        <div className="home-table">
            <Table option={option}/>
        </div>
    )
}
