import React from 'react'
import SideBarItem from '../../../styled_components/Layout/SideBarItem'

export default function DepartmentItem({name,onDepartmentSelected}) {
    return (
    <SideBarItem onClick={()=> onDepartmentSelected(name)}>{name}</SideBarItem>
    )
}
