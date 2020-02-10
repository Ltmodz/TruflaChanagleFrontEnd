import React, { useState, useEffect } from 'react'
import PaginatorContainer from '../../styled_components/Paginator/PaginatorContainer'
import PaginatorItem from '../../styled_components/Paginator/PaginatorItem'

export default function Paginator({totalCount,selectedPage}) {
    const [pageNumber,setPageNumber]=useState(1);
    useEffect(()=>{
        selectedPage(pageNumber)
    },[pageNumber])
    
    return (
       <PaginatorContainer>
           {
            new Array(Math.ceil(totalCount/30)).fill(null)
           .map((value,index)=><PaginatorItem 
           selected = {index + 1 === pageNumber}
           key={index + 1} onClick = {e=>setPageNumber(index + 1)}>{index + 1}</PaginatorItem>)
           }
       </PaginatorContainer>
    )
}
