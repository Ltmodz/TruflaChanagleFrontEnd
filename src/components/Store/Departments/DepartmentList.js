import React, { useState } from 'react'
import DepartmentsList from '../../../styled_components/Departments/DepartmentsList'
import DepartmentsUnorderdList from '../../../styled_components/Departments/DepartmentsUnorderdList'
import DepartmentItem from './DepartmentItem';
import PromoSearch from './PromoSearch/PromoSearch';
export default function DepartmentList({departments,PromoCodeEntered,departmentSelected}) {



    return (
        <DepartmentsList>
            <h2> Products Categories </h2>
            <DepartmentsUnorderdList>
                {departments.map((department)=> 
                   <DepartmentItem departmentSelected={departmentSelected} key={department.id} department ={department}></DepartmentItem>
                )}
            </DepartmentsUnorderdList>
            <PromoSearch PromoCodeEntered={PromoCodeEntered}></PromoSearch>
        </DepartmentsList>    
        
    )
    
}
