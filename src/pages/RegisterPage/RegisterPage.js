import React from 'react';
import { Link } from 'react-router-dom';

import './RegisterPage.scss';

const RegisterPage = () => (
    <section class="content-area login_register-page">
        <div class="container">
            <div class="box-container">
                <h2 style={{ color: '#484c4f' }} >Register</h2>
                <div class="login-grid register" />
                <form action="" method="POST">
                    <input style={{ boxShadow: '0 1px 6px 0 rgba(32, 33, 36, .28)', borderRadius: '1.2rem' }} type="email" name="email" placeholder="Email"></input>
                    <input style={{ boxShadow: '0 1px 6px 0 rgba(32, 33, 36, .28)', borderRadius: '1.2rem' }} type="password" name="password" placeholder="Password"></input>
                
        
                    <button style={{ boxShadow: '0 1px 6px 0 rgba(32, 33, 36, .28)', borderRadius: '6px' }} type="submit">Register</button>
                </form>
                <div class="line"></div>
                
                <div class="footer">
                    already have an account? <Link  to="login">Login</Link >
                </div>
            </div>
        </div>
    </section>
);

export default RegisterPage;