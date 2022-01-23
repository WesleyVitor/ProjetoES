import React from 'react';
import Layout from '../../components/Layout';
import "./styles.css";
const Home = ()=>{
    return (
        <Layout>
            <div>
            <h1 className='titleHome'>Fast Responses Fast Delivery</h1>
            
            <p className='description'>Mussum Ipsum, cacilds vidis litro abertis. 
                A ordem dos tratores não altera o pão duris.Praesent malesuada urna nisi, 
                quis volutpat erat hendrerit non. Nam vulputate dapibus.Interagi no mé, 
                cursus quis, vehicula ac nisi.Atirei o pau no gatis, per gatis num morreus.</p>
            </div>
            
            
            <img className='imageHome' alt='imageHome' src="https://media.istockphoto.com/photos/hanging-tools-picture-id96356725" />
        </Layout>
        
        
    )
}

export default Home;