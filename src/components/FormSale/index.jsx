import React, { useState } from "react";
import Button from "../Button";

const FormSale = ({ addSale }) => {
    const initialSale = {
        id: 0,
        product: "",
        client: "",
        value: "",
        amount: "",
        deliveryDate: "",
    };
    const [sale, setSale] = useState(initialSale);

    const handleInputChange = (event) => {
        console.log(event.target);
        const { name, value } = event.target;

        setSale({ ...sale, [name]: value });
    };

    return (
        <form
            className="form"
            onSubmit={(event) => {
                event.preventDefault();
                addSale(sale);
                setSale(initialSale);
            }}
        >
            <input
                autoComplete="off"
                type="text"
                name="product"
                value={sale.product}
                placeholder="Produto"
                onChange={handleInputChange}
            />
            <input
                autoComplete="off"
                type="text"
                name="client"
                value={sale.client}
                placeholder="Cliente"
                onChange={handleInputChange}
            />
            <input
                autoComplete="off"
                type="text"
                name="value"
                value={sale.value}
                placeholder="Valor"
                onChange={handleInputChange}
            />
            <input
                autoComplete="off"
                type="text"
                name="amount"
                value={sale.amount}
                placeholder="Quantidade"
                onChange={handleInputChange}
            />
            <label>Data de Entrega:</label>
            <input
                autoComplete="off"
                type="date"
                name="deliveryDate"
                value={sale.deliveryDate}
                onChange={handleInputChange}
            />

            <Button text="Adicionar" type="submit" />
        </form>
    );
};

export default FormSale;
