import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

import { axios } from 'axios';
import { register } from '../../redux/auth/auth-actions';
import { clearErrors } from '../../redux/errors/error-actions';

import './RegisterPage.scss';

class RegisterPage extends Component {
    state = {
        email: '',
        password: '',
        passwordConfirm: '',
        name: '',
        msg: null
    };

    redirect = () => {
        const { error, isAuthenticated, history } = this.props;

        if (isAuthenticated) 
            return  history.push('/');
    }

    componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      if (error.id === 'REGISTER_FAIL') {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }

    // If authenticated, close modal
      if (isAuthenticated) {
        this.redirect();
      }
  }

    onChange = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    };

    onSubmit = async e => {
        e.preventDefault();
    
        const { email, password, passwordConfirm, name } = this.state;

        const newUser = {
          email,
          password, 
          passwordConfirm,
          name
        };
        
        this.props.register(newUser);
    };

    render() {
        return ( 
            <section className="content-area login_register-page">
                <div className="container">
                    <div className="box-container">
                        <h2 style={{ color: '#484c4f' }} >Register</h2>
                        <div className="login-grid register" />
                        <form onSubmit={this.onSubmit}>
                                <input 
                                    style={{ boxShadow: '0 1px 6px 0 rgba(32, 33, 36, .28)', borderRadius: '1.2rem' }} 
                                    type="email" 
                                    name="email" 
                                    placeholder="Email"
                                    onChange={this.onChange} 
                                    minlength='8'>
                                </input>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <input 
                                        style={{ width: '49%', boxShadow: '0 1px 6px 0 rgba(32, 33, 36, .28)', borderRadius: '1.2rem' }} 
                                        type="password" 
                                        name="password" 
                                        placeholder="Password"
                                        onChange={this.onChange} 
                                        minlength='8'>
                                    </input>
                                    <input 
                                        style={{ width: '49%', boxShadow: '0 1px 6px 0 rgba(32, 33, 36, .28)', borderRadius: '1.2rem' }} 
                                        type="name" 
                                        name="name" 
                                        placeholder="name"
                                        onChange={this.onChange} 
                                        minlength='8'>
                                    </input>
                                    <input 
                                        style={{ width: '49%', boxShadow: '0 1px 6px 0 rgba(32, 33, 36, .28)', borderRadius: '1.2rem' }} 
                                        type="password" name="passwordConfirm" 
                                        placeholder="Confirm Password"
                                        onChange={this.onChange} 
                                        minlength='8'>
                                    </input>                    
                                </div>
                            <button 
                                style={{ boxShadow: '0 1px 6px 0 rgba(32, 33, 36, .28)', borderRadius: '6px' }} 
                                type="submit"
                            >
                                Register
                            </button>
                        </form>
                        <div className="line"></div>
                        
                        <div className="footer">
                            already have an account? <Link  to="login">Login</Link >
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default withRouter(
    (connect(mapStateToProps, { register, clearErrors })(RegisterPage))
);