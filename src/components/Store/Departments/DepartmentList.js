import React, { useState } from 'react'
import DepartmentsList from '../../../styled_components/Departments/DepartmentsList'
import DepartmentListItem from '../../../styled_components/Departments/DepartmentListItem'
import DepartmentsUnorderdList from '../../../styled_components/Departments/DepartmentsUnorderdList'
export default function DepartmentList() {
    const [departments,setDepartments] = useState(["fashoin","food","games","electronics"]);

   const handleSelection = name =>{
        console.log(`DepartmentsList recived ${name}`);
    }
    return (
        <DepartmentsList>
            <h2> Products Categories </h2>
            <DepartmentsUnorderdList>
                <DepartmentListItem>Food</DepartmentListItem>
                <DepartmentListItem>Product</DepartmentListItem>
                <DepartmentListItem>Product</DepartmentListItem>
            </DepartmentsUnorderdList>
        </DepartmentsList>    
        
    )
    
}
