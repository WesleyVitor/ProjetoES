import React from 'react';

const Table = ({sales})=>{
    return (

        <table>
            <thead>
                <tr>
                    <th>Produto</th>
                    <th>Cliente</th>
                    <th>Quantidade</th>
                </tr>
            </thead>
            <tbody>
                {
                    sales.map((sale)=>{
                        return(
                            <tr>
                                <td>{sale.product}</td>
                                <td>{sale.client}</td>
                                <td>{sale.size}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
}

export default Table;