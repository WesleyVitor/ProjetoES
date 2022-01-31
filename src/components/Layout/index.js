import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
const Layout = ({ children }) => {
    return (
        <>
            <header>
                <ul className="Menu">
                    <li className="itemMenu">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="itemMenu">
                        <Link to="/venda">Venda</Link>
                    </li>
                    <li className="itemMenu">
                        <Link to="/produto">Produto</Link>
                    </li>
                    <li className="itemMenu">
                        <Link to="/cliente">Cliente</Link>
                    </li>
                </ul>
            </header>
            <main>{children}</main>
        </>
    );
};

export default Layout;
