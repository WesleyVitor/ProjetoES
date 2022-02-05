import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import "./styles.css";
import FormSale from "../../components/FormSale";

const Sale = () => {
    const [sales, setSales] = useState([]);

    const addSale = (sale) => {
        sale.id = sales.length + 1;
        setSales([...sales, sale]);
    };

    return (
        <Layout>
            <div>
                <h1 className="titleForm">Carrinho</h1>
                <FormSale addSale={addSale} />
            </div>
            <div>
                <h1 className="titleTable">Histórico</h1>
                <table>
                    <thead className="tableHead">
                        <tr>
                            <th>Produto</th>
                            <th>Valor</th>
                            <th>Quantidade</th>
                        </tr>
                    </thead>
                    <tbody className="tableBody">
                        {sales.map((sale) => {
                            return (
                                <tr key={sale.id}>
                                    <td>{sale.product}</td>
                                    <td>{sale.value}</td>
                                    <td>{sale.amount}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
};

export default Sale;
