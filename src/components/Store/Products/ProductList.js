import React,{useState} from 'react'
import ProductsList from '../../../styled_components/Products/ProductsList'
import ProductsItem from './ProductsItem';
export default function ProductList({products}) {

    return (
    <ProductsList>
        {products.map((product)=>  <ProductsItem key={product.id} product={product}></ProductsItem> )}
    </ProductsList>)
}
