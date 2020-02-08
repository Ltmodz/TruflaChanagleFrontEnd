import React, { Suspense } from 'react'

import StoreContainer from '../../styled_components/Store/StoreContainer'
import StoreHeader from '../../styled_components/Store/StoreHeader'

const DepartmentList = React.lazy(()=>import("./Departments/DepartmentList"))
const ProductList = React.lazy(()=>import("./Products/ProductList"))

export default function Store() {

    return (
        <StoreContainer>
            <StoreHeader> Wolfy  store</StoreHeader>
            <Suspense fallback={<div>loading...</div>}>
              <DepartmentList></DepartmentList>
              <ProductList></ProductList>
            </Suspense>
        </StoreContainer>

    )
}
