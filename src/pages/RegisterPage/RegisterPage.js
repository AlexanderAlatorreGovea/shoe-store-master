import React from 'react';

import './RegisterPage.scss';

const RegisterPage = () => (
    <section class="content-area login_register-page">
        <div class="container">
            <div class="box-container">
                <h2>Register</h2>
                <div class="login-grid register" />
                <form action="" method="POST">
                    <input style={{ borderRadius: '1.2rem' }} type="email" name="email" placeholder="Email"></input>
                    <input style={{ borderRadius: '1.2rem' }} type="password" name="password" placeholder="Password"></input>
                
        
                    <button style={{ borderRadius: '6px' }} type="submit">Register</button>
                </form>
                <div class="line"></div>
                
                <div class="footer">
                    already have an account? <a href="/login">Login</a>
                </div>
            </div>
        </div>
    </section>
);

export default RegisterPage;