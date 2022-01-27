import React,{useEffect, useState} from 'react';
import Layout from '../../components/Layout';
import "./styles.css";
import FormSale from '../../components/FormSale';

//const storage = window.localStorage;

const Sale = ()=>{

    // const handleLocalStorage = ()=>{
    //     return JSON.parse(storage.getItem('db_sale')) ?? [];
    // }

    const initialSale = {
        id:0,
        product:"",
        client:"",
        value:"",
        amount:"",
        saleDate:"",
        deliveryDate:""
    }
    const [sales, setSales] = useState([]);

    const addSale = sale => {
		sale.id = sales.length + 1;
		setSales([ ...sales, sale ]);
	}
    
    // useEffect(()=>{
    //     storage.setItem('db_sale',JSON.stringify(sales));
    // },[sales])



    return (
        <Layout>
            <div>
                <h1 className='title-sale'>Carrinho</h1>
                <FormSale initialSale={initialSale} addSale={addSale}   />
            </div>
            <div>
                <h1 className='title-table'>Histórico</h1>
                <table>
                    <thead className='tableHead'>
                        <tr>
                            <th>Produto</th>
                            <th>Valor</th>
                            <th>Quantidade</th>
                        </tr>
                    </thead>
                    <tbody className='tableBody'>
                        {
                            sales.map((sale)=>{
                                return(
                                    <tr>
                                        <td>{sale.product}</td>
                                        <td>{sale.value}</td>
                                        <td>{sale.amount}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            
        </Layout>

        
    );

}

export default Sale;