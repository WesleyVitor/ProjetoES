import React,{useEffect, useState} from 'react';
import Layout from '../../components/Layout';
import "./styles.css";
import Form from '../../components/Form';
import Table from '../../components/Table';

const storage = window.localStorage;

const Sale = ()=>{

    const handleLocalStorage = ()=>{
        return JSON.parse(storage.getItem('db_sale')) ?? [];
    }

    const initialSale = {
        id:0,
        product:"",
        client:"",
        value:0,
        size:0,
        saleDate:"",
        deliveryDate:""
    }
    const [sales, setSales] = useState(handleLocalStorage);

    const addSale = sale => {
		sale.id = sales.length + 1;
		setSales([ ...sales, sale ]);
        

	}
    
    useEffect(()=>{
        storage.setItem('db_sale',JSON.stringify(sales));
    },[sales])

    return (
        <Layout>
            <div>
                <h1 className='title-sale'>Carrinho</h1>
                <Form initialSale={initialSale} addSale={addSale}   />
            </div>
            <Table sales={sales}/>
        </Layout>

        
    );

}

export default Sale;