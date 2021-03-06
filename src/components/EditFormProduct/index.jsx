import React, { useState, useEffect } from "react";
import Button from "../Button";

const EditFormProduct = ({ currentProduct, updateProduct, setEditing }) => {
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
            className="form"
            onSubmit={(event) => {
                event.preventDefault();
                updateProduct(product);
                //setProduct(initialProduct);
            }}
        >
            <input
                autoComplete="off"
                type="text"
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
            />
            <input
                autoComplete="off"
                type="text"
                name="value"
                value={product.value}
                placeholder="Valor"
                onChange={handleInputChange}
            />
            <div className="buttonEditingArea">
                <Button text="Editar" type="submit" />
                <Button onClick={() => setEditing(false)} text="Cancelar" />
            </div>
        </form>
    );
};

export default EditFormProduct;
