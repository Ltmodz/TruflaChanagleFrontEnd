import React, { useState,useEffect } from 'react'
import ProductItem from '../../../styled_components/Products/ProductItem'
import ProductImg from '../../../styled_components/Products/ProductImg'
import me from "../../../assets/Images/me.jpg";
import gift from "../../../assets/Images/gift.svg";
import Promotions from '../../../styled_components/Products/Permissions/Promotions'
import Promotion from '../../../styled_components/Products/Permissions/Promotion'
import ProductInfoItem from '../../../styled_components/Products/ProductInfoItem'
export default function ProductsItem({product}) {
    const [discoutedValue, setDiscountedValue] = useState(0)
    const [expand,setExpand] = useState(false);
    const handleClick = ()=>{
        console.log("clicked");
        setExpand(!expand);
    }

    useEffect(()=>{
        calculateDiscount()
    },[])
    const calculateDiscount =() =>
    {
        product.promotions.map(promotion => setDiscountedValue(discoutedValue +(product.price * promotion.discount).toPrecision(2) / 100));
    }
    return (
                <ProductItem>
                    <ProductImg src={me}></ProductImg>
                    <ProductInfoItem>{product.name}</ProductInfoItem>
                    <ProductInfoItem hasDiscount = {product.promotions.length > 0 }>{`${product.price} $`}</ProductInfoItem>
                   
                    {product.promotions.length > 0 && 
                    <React.Fragment>
                        <ProductInfoItem >{`${(product.price - discoutedValue)} $`}</ProductInfoItem>
                        <Promotions expand ={expand} onClick={handleClick}>
                        <img src={gift}></img>
                             {expand &&
                              <React.Fragment>
                            <h4>Product Promotions:</h4>
                            <ul>
                             {product.promotions.map((promotion) =>(
                                 <Promotion key={promotion.id}>{`${promotion.code} (${promotion.discount}%)`}</Promotion>
                             ))}

                            </ul> 
                            </React.Fragment> } 
                        </Promotions> 
                    </React.Fragment>
                    }

                </ProductItem>
    )
}
