import React, { useState, useEffect } from "react";

import "./styles.css";
const EditFormProduct = ({ currentProduct, updateProduct }) => {
    const [product, setProduct] = useState(currentProduct);
    useEffect(() => {
        setProduct(currentProduct);
    }, [currentProduct]);
    const handleInputChange = (event) => {
        console.log(event.target);
        const { name, value } = event.target;

        setProduct({ ...product, [name]: value });
    };

    return (
        <form
            className="form-sale"
            onSubmit={(event) => {
                event.preventDefault();
                updateProduct(product);
                //setProduct(initialProduct);
            }}
        >
            <input
                type="text"
                name="name"
                value={product.name}
                placeholder="Produto"
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="amount"
                value={product.amount}
                placeholder="Quantidade"
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="value"
                value={product.value}
                placeholder="Valor"
                onChange={handleInputChange}
            />
            <input type="submit" value="Adicionar" />
        </form>
    );
};

export default EditFormProduct;
