import React, { Suspense, useState, useEffect } from 'react'
import axios from 'axios';

import StoreContainer from '../../styled_components/Store/StoreContainer'
import StoreHeader from '../../styled_components/Store/StoreHeader'


const DepartmentList = React.lazy(()=>import("./Departments/DepartmentList"))
const ProductList = React.lazy(()=>import("./Products/ProductList"))
const Paginator = React.lazy(()=>import("../Paginator/Paginator"))

export default function Store({_productName}) {
    const [departments,setDepartments] = useState([]);
    const [products,setProducts] = useState([]);
    const [promoCode,setPromoCode] = useState("");
    const [page,setPage] = useState(1);
    const [departmentId,setDepartmentId] = useState("");
    const [totalCount,setTotalCount] = useState(0);
    useEffect(()=>{
        axios.get("http://localhost:3001/departments").then(response=>{
            console.log(response.data.departments);
            setDepartments(response.data.departments);
        })
    },[]);

    useEffect(()=>{
        setPage(page);
        axios.get(`http://localhost:3001/products?q[promotions_code_eq]=${promoCode}&q[name_cont]=${_productName}&q[department_id_eq]=${departmentId}&page=1`).then(response=>{
            console.log(response.data);
            setProducts(response.data.products);
            setTotalCount(response.data.total_count);
        })
    },[promoCode,departmentId,_productName]);

    useEffect(()=>{
        axios.get(`http://localhost:3001/products?q[promotions_code_eq]=${promoCode}&q[name_cont]=${_productName}&q[department_id_eq]=${departmentId}&page=${page}`).then(response=>{
            console.log(response.data);
            setProducts(response.data.products);
            setTotalCount(response.data.total_count);
        })
    },[page]);

    return (
        <StoreContainer>
            <StoreHeader> Wolfy  store</StoreHeader>
            <Suspense fallback={<div>loading...</div>}>
              <DepartmentList  
              departmentSelected={id => setDepartmentId(id)} 
              PromoCodeEntered={code => setPromoCode(code)} 
              departments={departments}></DepartmentList>
              <ProductList products={products}></ProductList>
              <Paginator selectedPage={page=>setPage(page)} totalCount={totalCount}></Paginator>
            </Suspense>
            
        </StoreContainer>

    )
}
