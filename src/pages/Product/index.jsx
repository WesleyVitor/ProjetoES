import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import FormProduct from "../../components/FormProduct";
const storage = window.localStorage;

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(JSON.parse(storage.getItem("db_sale")) ?? []);
    }, []);

    useEffect(() => {
        storage.setItem("db_sale", JSON.stringify(products));
    }, [products]);

    const handleLocalStorage = () => {
        return JSON.parse(storage.getItem("db_sale")) ?? [];
    };

    const addProduct = (product) => {
        product.id = products.length + 1;
        product.active = true;
        setProducts([...products, product]);
    };

    return (
        <Layout>
            <div>
                <h1 className="title-sale">Cadastrar Produto</h1>
                <FormProduct addProduct={addProduct} />
            </div>
            <div>
                <h1 className="title-table">Lista de Produtos</h1>
            </div>
        </Layout>
    );
};

export default Product;
