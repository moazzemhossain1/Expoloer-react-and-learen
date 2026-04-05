import React, { useState } from 'react';
import ProductFrom from './ProductFrom';
import ProductTable from './ProductTable';

const ProductManageMent = () => {

    const [products,setProdducts]=useState([]);
    const handelAddProducts= newProduct =>{
        const newProducts=[...products, newProduct];
        setProdducts(newProducts)

    }
    return (
        <div>
            <ProductFrom handelAddProducts={handelAddProducts}></ProductFrom>
            <ProductTable products={products}></ProductTable>
            
        </div>
    );
};

export default ProductManageMent;