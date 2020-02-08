import React, { useState } from 'react'
import DepartmentItem from './DepartmentItem';

export default function DepartmentList() {
    const [departments,setDepartments] = useState(["fashoin","food","games","electronics"]);

   const handleSelection = name =>{
        console.log(`DepartmentsList recived ${name}`);
    }
    return (
        departments.map((name,index)=>(
            <DepartmentItem onDepartmentSelected={handleSelection} key={index} name={name}></DepartmentItem>
        ))
        
    )
    
}
