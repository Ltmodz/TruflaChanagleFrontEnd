import React from 'react'
import DepartmentListItem from "../../../styled_components/Departments/DepartmentListItem"

export default function DepartmentItem({department,departmentSelected}) {
    return (

        <DepartmentListItem onClick={()=>departmentSelected(department.id)}>
            {department.name}
        </DepartmentListItem>
    )
}
