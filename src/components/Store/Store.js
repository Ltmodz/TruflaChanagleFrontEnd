import React, { Suspense, useState, useEffect } from 'react'
import axios from 'axios';

import StoreContainer from '../../styled_components/Store/StoreContainer'
import StoreHeader from '../../styled_components/Store/StoreHeader'


const DepartmentList = React.lazy(()=>import("./Departments/DepartmentList"))
const ProductList = React.lazy(()=>import("./Products/ProductList"))
const Paginator = React.lazy(()=>import("../Paginator/Paginator"))

export default function Store({_products}) {
    const [departments,setDepartments] = useState(_products);
    const [products,setProducts] = useState(_products);
    useEffect(()=>{
        axios.get("http://localhost:3001/departments").then(response=>{
            console.log(response.data.departments);
            setDepartments(response.data.departments);
        })

        axios.get("http://localhost:3001/products").then(response=>{
            console.log(response.data);
            setProducts(response.data);
        })
    },[]);

    useEffect(()=>{
            setProducts(_products);
    },[_products]);

    const handlePromo = (code)=>
    {
        axios.get(`http://localhost:3001/products?q[promotions_code_eq]=${code}`).then(response=>{
            console.log(response.data);
            setProducts(response.data);
        })
    }
    const loadDepartmentProducts = (departmentId)=>
    {
        axios.get(`http://localhost:3001/products?department_id=${departmentId}`).then(response=>{
            console.log(response.data);
            setProducts(response.data);
        })
    }
    return (
        <StoreContainer>
            <StoreHeader> Wolfy  store</StoreHeader>
            <Suspense fallback={<div>loading...</div>}>
              <DepartmentList departmentSelected={loadDepartmentProducts} PromoCodeEntered={handlePromo} departments={departments}></DepartmentList>
              <ProductList products={products}></ProductList>
              <Paginator></Paginator>
            </Suspense>
            
        </StoreContainer>

    )
}
