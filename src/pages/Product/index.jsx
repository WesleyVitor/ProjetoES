import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import FormProduct from "../../components/FormProduct";
import EditFormProduct from "../../components/EditFormProduct";
import Button from "../../components/Button";

const Product = () => {
    const [products, setProducts] = useState([]);
    const [editing, setEditing] = useState(false);
    const [currentProduct, setCurrentProduct] = useState({});

    useEffect(() => {
        const storageValue = localStorage.getItem("products");

        if (storageValue) {
            return setProducts(JSON.parse(storageValue));
        } else {
            return setProducts([]);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
    }, [products]);

    const addProduct = (product) => {
        product.id = products.length + 1;
        product.active = true;
        setProducts((prev) => [...prev, product]);
    };

    const removeProduct = (id) => {
        const newProducts = products.map((product) =>
            product.id === id ? (product.active = false) : product
        );
        setProducts(newProducts);
    };

    const editProduct = (product) => {
        setEditing(true);

        setCurrentProduct({
            id: product.id,
            name: product.name,
            amount: product.amount,
            value: product.value,
            active: product.active,
        });
    };

    const updateProduct = (newProduct) => {
        setEditing(false);

        setProducts(
            products.map((product) =>
                product.id === newProduct.id ? newProduct : product
            )
        );
    };

    return (
        <Layout>
            <div>
                {editing ? (
                    <>
                        <h1 className="titleForm">Editar Produto</h1>
                        <EditFormProduct
                            currentProduct={currentProduct}
                            updateProduct={updateProduct}
                        />
                    </>
                ) : (
                    <>
                        <h1 className="titleForm">Cadastrar Produto</h1>
                        <FormProduct addProduct={addProduct} />
                    </>
                )}
            </div>
            <div>
                <h1 className="titleTable">Lista de Produtos</h1>
                <table>
                    <thead className="tableHead">
                        <tr>
                            <th>Produto</th>
                            <th>Valor</th>
                            <th>Quantidade</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody className="tableBody">
                        {products.map((product) => {
                            if (product.active) {
                                return (
                                    <tr key={product.id}>
                                        <td>{product.name}</td>
                                        <td>{product.value}</td>
                                        <td>{product.amount}</td>
                                        <td>
                                            <Button
                                                handleProduct={removeProduct}
                                                value={product.id}
                                                text="Remover"
                                            />
                                            <Button
                                                handleProduct={editProduct}
                                                value={product}
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

export default Product;
