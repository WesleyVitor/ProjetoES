import React, { useState } from "react";
import Button from "../Button";

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
            className="form"
            onSubmit={(event) => {
                event.preventDefault();
                addProduct(product);
                setProduct(initialProduct);
            }}
        >
            <input
                autoComplete="off"
                type="text"
                required
                name="name"
                value={product.name}
                placeholder="Produto"
                onChange={handleInputChange}
            />
            <input
                autoComplete="off"
                type="text"
                name="amount"
                value={product.amount}
                placeholder="Quantidade"
                onChange={handleInputChange}
                required
            />
            <input
                autoComplete="off"
                type="text"
                name="value"
                value={product.value}
                placeholder="Valor"
                onChange={handleInputChange}
                required
            />
            <Button text="Adicionar" type="submit" />
        </form>
    );
};

export default FormProduct;
