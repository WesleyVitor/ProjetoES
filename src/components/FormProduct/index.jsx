import React, { useState } from "react";
import "./styles.css";
const FormProduct = ({ addProduct }) => {
    const initialProduct = {
        id: 0,
        name: "",
        amount: "",
        value: "",
        active: null,
    };
    const [product, setProduct] = useState(initialProduct);

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
                addProduct(product);
                setProduct(initialProduct);
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

export default FormProduct;
