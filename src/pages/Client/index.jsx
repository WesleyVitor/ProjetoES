import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import FormClient from "../../components/FormClient";
import EditFormClient from "../../components/EditFormClient";
import Button from "../../components/Button";

const Client = () => {
    const [clients, setClients] = useState([]);
    const [editing, setEditing] = useState(false);
    const [currentClient, setCurrentClient] = useState({});

    useEffect(() => {
        const storageValue = localStorage.getItem("clients");

        if (storageValue) {
            return setClients(JSON.parse(storageValue));
        } else {
            return setClients([]);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("clients", JSON.stringify(clients));
    }, [clients]);

    const addClient = (client) => {
        client.id = clients.length + 1;
        client.active = true;
        setClients((prev) => [...prev, client]);
    };

    const removeClient = (id) => {
        setEditing(false);
        const newClients = clients.map((client) =>
            client.id === id ? (client.active = false) : client
        );
        setClients(newClients);
    };

    const editClient = (client) => {
        setEditing(true);

        setCurrentClient({
            id: client.id,
            name: client.name,
            cpf: client.cpf,
            email: client.email,
            phone: client.phone,
            active: client.active,
        });
    };

    const updateClient = (newClient) => {
        setEditing(false);

        setClients(
            clients.map((client) =>
                client.id === newClient.id ? newClient : client
            )
        );
    };

    return (
        <Layout>
            <div>
                {editing ? (
                    <>
                        <h1 className="titleForm">Editar Cliente</h1>
                        <EditFormClient
                            currentClient={currentClient}
                            updateClient={updateClient}
                            setEditing={setEditing}
                        />
                    </>
                ) : (
                    <>
                        <h1 className="titleForm">Cadastrar Cliente</h1>
                        <FormClient addClient={addClient} />
                    </>
                )}
            </div>
            <div>
                <h1 className="titleTable">Lista de Clientes</h1>
                <table>
                    <thead className="tableHead">
                        <tr>
                            <th>Nome</th>
                            <th>Cpf</th>
                            <th>Email</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody className="tableBody">
                        {clients.map((client) => {
                            if (client.active) {
                                return (
                                    <tr key={client.id}>
                                        <td>{client.name}</td>
                                        <td>{client.cpf}</td>
                                        <td>{client.email}</td>
                                        <td>
                                            <Button
                                                handleProduct={removeClient}
                                                value={client.id}
                                                text="Remover"
                                            />
                                            <Button
                                                handleProduct={editClient}
                                                value={client}
                                                text="Editar"
                                            />
                                        </td>
                                    </tr>
                                );
                            }
                        })}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
};

export default Client;
