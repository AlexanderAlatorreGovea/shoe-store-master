import React from 'react';
import { Link } from 'react-router-dom';

import './LoginPage.scss';

const LoginPage = () => (
    <section className="content-area login_register-page">
        <div className="container">
            <div className="box-container">
            <h2>Log In</h2>
            <div className="login-grid login">
                <form action="" method="POST">
                    <input style={{ boxShadow: '0 1px 6px 0 rgba(32, 33, 36, .28)', borderRadius: '1.2rem' }} type="email" name="email" placeholder="Email"/>
                    <input style={{ boxShadow: '0 1px 6px 0 rgba(32, 33, 36, .28)', borderRadius: '1.2rem' }} type="password" name="password" placeholder="Password"/>
                    <a href="/account/forgot-password">Forgot Password</a>
                <button type="submit">Log In</button>
                </form>
                <div className="line"></div>
                <div className="social-accounts">
                    <a href="#" style={{ boxShadow: '0 1px 6px 0 rgba(32, 33, 36, .28)', borderRadius: '1.2rem' , background: '#db3236', color: 'white' }}><i className="google plus g icon"></i>   Google</a>
                    <a href="#" style={{ boxShadow: '0 1px 6px 0 rgba(32, 33, 36, .28)', borderRadius: '1.2rem' , background: '#3b5998', color: 'white' }}><i className="facebook f icon"></i>  Facebook</a>
                    <a href="#" style={{ boxShadow: '0 1px 6px 0 rgba(32, 33, 36, .28)', borderRadius: '1.2rem' , background: '#1DA1F2', color: 'white' }}><i className="twitter icon"></i> Twitter</a>
                </div>

            </div>
            <div className="footer">
                Need an account? <Link to="register">Sign Up</Link>
            </div>
            </div>
        </div>
    </section>
);

export default LoginPage;