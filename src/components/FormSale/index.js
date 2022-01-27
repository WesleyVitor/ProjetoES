import React,{useState} from 'react';
import "./styles.css";
const FormSale = ({addSale, initialSale})=>{
    const [sale, setSale] = useState(initialSale);
    const keys = Object.keys(initialSale);
    const handleInputChange = (event)=>{
        console.log(event.target);
        const {name, value} = event.target;

        setSale({ ...sale, [name]: value })
    }


    return(
        <form className='form-sale' onSubmit={(event)=>{
            event.preventDefault();
            addSale(sale)
            setSale(initialSale)
        }}>
            <input type="text" name={keys[1]}  value={sale.product} placeholder="Produto" onChange={handleInputChange}/>
            <input type="text" name={keys[2]} value={sale.client} placeholder="Cliente" onChange={handleInputChange}/>
            <input type="text" name={keys[3]} value={sale.value} placeholder="Valor" onChange={handleInputChange}/>
            <input type="text" name={keys[4]} value={sale.size} placeholder="Quantidade" onChange={handleInputChange}/>
            <label>Data de Venda:</label>
            <input type="date" name={keys[5]} value={sale.saleDate} onChange={handleInputChange}/>
            <label>Data de Entrega:</label>
            <input type="date" name={keys[6]} value={sale.deliveryDate} onChange={handleInputChange}/>
            <input type="submit" value="Adicionar"/>

        </form>
    );

}

export default FormSale;