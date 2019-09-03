import React from 'react';

import './OrdersPage.scss';

const OrdersPage = () => (
    <section className="content-area login_register-page">
        <section className="content-area account-page">
            <div className="container">
                <div className="box-container">
                    <h1>Orders</h1>
                    <hr />
                    <div className="checkout-grid">
                    <div className="forms">
                        <div className="order-list">
                        <table>
                            <thead>
                            <tr>
                                <td>ID</td>
                                <td>Price</td>
                                <td>Date</td>
                                <td>Status</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1231214343</td>
                                <td>$3,200</td>
                                <td>1/28/2019</td>
                                <td><span className="tag shipped">Shipped</span></td>
                            </tr>
                            <tr>
                                <td>1231214343</td>
                                <td>$3,200</td>
                                <td>1/28/2019</td>
                                <td><span className="tag shipped">Shipped</span></td>
                            </tr>
                            <tr>
                                <td>1231214343</td>
                                <td>$3,200</td>
                                <td>1/28/2019</td>
                                <td><span className="tag shipped">Shipped</span></td>
                            </tr>
                            <tr>
                                <td>1231214343</td>
                                <td>$3,200</td>
                                <td>1/28/2019</td>
                                <td><span className="tag canceled">Canceled</span></td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    <div className="sub-menu">
                    </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
);

export default OrdersPage;