import React from 'react';

const ProductTable = ({products}) => {
    return (
        <div>
            <h3>Proudts:{products.length}</h3>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nmae</th>
                        <th>Price</th>
                        <th>Quntity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    products.map((produt ,index) =>
                         <tr key={index}>
                        <td>{index+1}</td>
                        <td>{produt.name}</td>
                        <td>{produt.price}</td>
                        <td>{produt.quntity}</td>
                        <td></td>
                    </tr>
                    )
                   }
                </tbody>
             

                
            </table>
        </div>
    );
};

export default ProductTable;