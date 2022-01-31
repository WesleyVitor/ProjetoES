import React from 'react';
import Layout from '../../components/Layout';
import "./styles.css";
const Home = ()=>{
    return (
        <Layout>
            <div>
            <h1 className='titleHome'>Engenharia Ferramentas</h1>
            
            <p className='description'>Mussum Ipsum, cacilds vidis litro abertis. 
                A ordem dos tratores não altera o pão duris.Praesent malesuada urna nisi, 
                quis volutpat erat hendrerit non. Nam vulputate dapibus.Interagi no mé, 
                cursus quis, vehicula ac nisi.Atirei o pau no gatis, per gatis num morreus.</p>
            </div>
            
            
            <img className='imageHome' alt='imageHome' src="/builder2.png" />
        </Layout>
        
        
    )
}

export default Home;