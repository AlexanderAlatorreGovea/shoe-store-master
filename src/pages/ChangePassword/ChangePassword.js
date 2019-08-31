import React from 'react';

import './ChangePassword.scss';

const ChangePassword = () => (
    <section className="content-area account-page">
        <div className="container">
            <div className="box-container">
                <h1>Account</h1>
                <hr />
                <div className="checkout-grid">
                <div className="forms">
                    <form action="" method="POST">
                    <div className="form-group">
                        <label for="currentPassword">Current Password</label>
                        <input type="password" name="currentPassword" id="currentPassword" />
                    </div>
                    <div className="form-group">
                        <label for="newPassword">New Password</label>
                        <input type="password" name="newPassword" id="newPassword"></input>
                    </div>
                    <div className="form-group">
                        <button type="submit">Save</button>
                    </div>
                    </form>
                    </div>
                    <div className="sub-menu">
                    </div>
                    </div>
                </div>
            </div>
        </section>
);

export default ChangePassword;