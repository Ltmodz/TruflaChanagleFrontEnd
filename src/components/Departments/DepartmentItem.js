import React from 'react'
import SideBarItem from '../../styled_components/SideBarItem'

export default function DepartmentItem({name,onDepartmentSelected}) {
    return (
    <SideBarItem onClick={()=> onDepartmentSelected(name)}>{name}</SideBarItem>
    )
}
