import React,{useState} from 'react';
import Layout from '../../components/Layout';
import "./styles.css";
import Form from '../../components/Form';
import Table from '../../components/Table';
const Sale = ()=>{

    const initialSale = {
        id:0,
        product:"",
        client:"",
        value:0,
        size:0,
        saleDate:"",
        deliveryDate:""
    }
    const [sales, setSales] = useState([])

    const addSale = sale => {
		sale.id = sales.length + 1
		setSales([ ...sales, sale ])
	}
    console.log(sales);
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