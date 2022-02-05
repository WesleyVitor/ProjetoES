import React, { useState } from "react";
import Button from "../Button";

const FormClient = ({ addClient }) => {
    const initialClient = {
        id: 0,
        name: "",
        cpf: "",
        email: "",
        phone: "",
        active: null,
    };
    const [client, setClient] = useState(initialClient);

    const handleInputChange = (event) => {
        console.log(event.target);
        const { name, value } = event.target;

        setClient({ ...client, [name]: value });
    };

    return (
        <form
            className="form"
            onSubmit={(event) => {
                event.preventDefault();
                addClient(client);
                setClient(initialClient);
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
                type="email"
                name="email"
                value={client.email}
                placeholder="Email"
                onChange={handleInputChange}
                required
            />
            <input
                autoComplete="off"
                type="text"
                name="phone"
                value={client.phone}
                placeholder="Celular"
                onChange={handleInputChange}
            />
            <Button text="Adicionar" type="submit" />
        </form>
    );
};

export default FormClient;
