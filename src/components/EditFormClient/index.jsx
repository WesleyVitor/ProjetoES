import React, { useState, useEffect } from "react";
import Button from "../Button";

const EditFormClient = ({ currentClient, updateClient, setEditing }) => {
    const [client, setClient] = useState(currentClient);
    useEffect(() => {
        setClient(currentClient);
    }, [currentClient]);
    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setClient({ ...client, [name]: value });
    };

    return (
        <form
            className="form"
            onSubmit={(event) => {
                event.preventDefault();
                updateClient(client);
                //setProduct(initialProduct);
            }}
        >
            <input
                autoComplete="off"
                type="text"
                required
                name="name"
                value={client.name}
                placeholder="Nome"
                onChange={handleInputChange}
            />
            <input
                autoComplete="off"
                type="text"
                name="cpf"
                value={client.cpf}
                placeholder="CPF"
                onChange={handleInputChange}
                required
            />
            <input
                autoComplete="off"
                type="text"
                name="value"
                value={client.email}
                placeholder="Email"
                onChange={handleInputChange}
                required
            />
            <input
                autoComplete="off"
                type="text"
                name="value"
                value={client.phone}
                placeholder="Celular"
                onChange={handleInputChange}
            />

            <div className="buttonEditingArea">
                <Button text="Editar" type="submit" />
                <Button onClick={() => setEditing(false)} text="Cancelar" />
            </div>
        </form>
    );
};

export default EditFormClient;
