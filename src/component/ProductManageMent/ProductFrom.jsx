import React, { useState } from 'react';

const ProductFrom = ({handelAddProducts}) => {
    const [errow,setErrow]=useState('')

    const handele=(e) =>{
        e.preventDefault();
        const name=e.target.name.value;
        const price=e.target.price.value;
        const quntity=e.target.quntity.value;
        // console.log(name,price,quntity)
        const newProduct={
            name,
            price,
            quntity
        }
        // console.log(newProduct)



        if(name.length ===0){
            setErrow("please provide product  name!");
            return;
            
        }
        else if(price.length ===0){
            setErrow("please provide price");
            return;
        }
        else if(price <0){
            setErrow("please provide a possitive number");
            return;
        }
        else{
            setErrow('')
        }
        handelAddProducts(newProduct)
        
    }
    return (
        <div>
            <h3>Add Products</h3>
            <form onSubmit={handele}>
                <input type="text" name="name" placeholder='Product Name:' id="" />
                
                <br />
                <input type="text" name="price" placeholder='Product Price:' id="" />
                
                <br />
                <input type="text" name="quntity" placeholder='Product Quntity:' id="" />
                
                <br />
                <input type="submit" value="submit" />
              
            </form>
            <p style={{color:"red" }}><small>{errow}</small></p>
            
        </div>
    );
};

export default ProductFrom;