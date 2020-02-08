import React,{useState} from 'react'
import ProductsList from '../../../styled_components/Products/ProductsList'
import ProductItem from '../../../styled_components/Products/ProductItem'
import ProductImg from '../../../styled_components/Products/ProductImg'
import me from "../../../assets/Images/me.jpg";
import gift from "../../../assets/Images/gift.svg";
import Promotions from '../../../styled_components/Products/Permissions/Promotions'
import Promotion from '../../../styled_components/Products/Permissions/Promotion'
import ProductInfoItem from '../../../styled_components/Products/ProductInfoItem'
export default function ProductList() {
    const [expand,setExpand] = useState(false);
    const handleClick = ()=>{
        console.log("clicked");
        setExpand(!expand);
    }
    return (
        <div>
            <ProductsList>
                <ProductItem>
                    <ProductImg src={me}></ProductImg>
                    <ProductInfoItem>Product Name</ProductInfoItem>
                    <ProductInfoItem>50 $</ProductInfoItem>
                    <Promotions expand ={expand} onClick={handleClick}>
                        <img src={gift}></img>
                        <h4>Product Promotions:</h4>
                        <ul>
                            <Promotion>hi</Promotion>
                            <Promotion>hi</Promotion>
                        </ul>  
                    </Promotions>
                </ProductItem>
            </ProductsList>
        </div>
    )
}
