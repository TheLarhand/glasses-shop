import React, { useState } from 'react';
import classes from './ProductsForm.module.css'

const ProductForm = ({create}) => {
    const[product, setProduct] = useState({name: "", type: "1", price: 0, image: "", body: "", year: 0, brand: ""})

    const addNewProduct = (e) => {
        e.preventDefault();
        const newProduct = product;
        console.log(newProduct);
        create(newProduct)
      }

    return (
        <form className={classes.form} action="#">
            <input
                value={product.name}
                onChange={e => setProduct({...product, name: e.target.value})}
                type="text"
                placeholder="enter name" 
            />
            <select
                value={product.type} 
                onChange={e => setProduct({...product, type: e.target.value})}
                name="" 
                id=""
            >
                <option value="1">lens</option>
                <option value="2">colored lenses</option>
                <option value="3">blue light</option>
                <option value="4">sports</option>
                <option value="5">sunglasses</option>
                <option value="6">glasses</option>
            </select>
            <input
                value={product.price}
                onChange={e => setProduct({...product, price: e.target.value})}
                type="number" 
                placeholder="enter price" 
            />
            <input
                value={product.image}
                onChange={e => setProduct({...product, image: e.target.value})}
                type="text"
                placeholder="enter image url"  
            />
            <input
                value={product.body}
                onChange={e => setProduct({...product, body: e.target.value})}
                type="text" 
                placeholder="enter description" 
            />
            <input
                value={product.year}
                onChange={e => setProduct({...product, year: e.target.value})}
                type="number"
                placeholder="enter year"  
            />
            <input
                value={product.brand}
                onChange={e => setProduct({...product, brand: e.target.value})}
                type="text"
                placeholder="enter brand name"  
            />
            <button onClick={addNewProduct}>create product</button>
        </form>
    );
}

export default ProductForm;
