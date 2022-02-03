import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import FormProduct from "../../components/FormProduct";
import EditFormProduct from "../../components/EditFormProduct";
//const storage = window.localStorage;

const Product = () => {
    const [products, setProducts] = useState([]);
    const [editing, setEditing] = useState(false);
    const [currentProduct, setCurrentProduct] = useState({});
    // useEffect(() => {
    //     setProducts(JSON.parse(storage.getItem("db_sale")) ?? []);
    // }, []);

    // useEffect(() => {
    //     storage.setItem("db_sale", JSON.stringify(products));
    // }, [products]);

    // const handleLocalStorage = () => {
    //     return JSON.parse(storage.getItem("db_sale")) ?? [];
    // };

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
                        <h1 className="title-sale">Editar Produto</h1>
                        <EditFormProduct
                            currentProduct={currentProduct}
                            updateProduct={updateProduct}
                        />
                    </>
                ) : (
                    <>
                        <h1 className="title-sale">Cadastrar Produto</h1>
                        <FormProduct addProduct={addProduct} />
                    </>
                )}
            </div>
            <div>
                <h1 className="title-table">Lista de Produtos</h1>
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
                                            <button
                                                onClick={() =>
                                                    removeProduct(product.id)
                                                }
                                            >
                                                Remover
                                            </button>
                                            <button
                                                onClick={() =>
                                                    editProduct(product)
                                                }
                                            >
                                                Editar
                                            </button>
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
