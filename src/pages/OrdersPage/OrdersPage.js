import React from 'react';

import './OrdersPage.scss';

const OrdersPage = () => (
    <section class="content-area login_register-page">
        <section class="content-area account-page">
            <div class="container">
                <div class="box-container">
                    <h1>Orders</h1>
                    <hr />
                    <div class="checkout-grid">
                    <div class="forms">
                        <div class="order-list">
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
                                <td><span class="tag shipped">Shipped</span></td>
                            </tr>
                            <tr>
                                <td>1231214343</td>
                                <td>$3,200</td>
                                <td>1/28/2019</td>
                                <td><span class="tag shipped">Shipped</span></td>
                            </tr>
                            <tr>
                                <td>1231214343</td>
                                <td>$3,200</td>
                                <td>1/28/2019</td>
                                <td><span class="tag shipped">Shipped</span></td>
                            </tr>
                            <tr>
                                <td>1231214343</td>
                                <td>$3,200</td>
                                <td>1/28/2019</td>
                                <td><span class="tag canceled">Canceled</span></td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    <div class="sub-menu">
                    </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
);

export default OrdersPage;