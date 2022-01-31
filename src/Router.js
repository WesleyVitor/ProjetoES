import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Client from './pages/Client';
import Sale from './pages/Sale';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto" element={<Product />} />
        <Route path="/cliente" element={<Client />} />
        <Route path="/venda" element={<Sale />} />


      </Routes>

    </BrowserRouter>
  );
}

export default Router;
