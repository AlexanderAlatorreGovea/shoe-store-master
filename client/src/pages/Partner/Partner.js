import React from 'react';

import './Partner.scss';
import { Link } from 'react-router-dom';

const Partner = () => (
    <div className="partner">
        <div className="first-container">
            <div className="sub-container">
                <h1>FreshGear Partner Program</h1>
                <h2>Earn Up to 25% Commission on Referrals and Unlock Exclusive Partner Benefits</h2>
                <div className="button">
                    <Link>apply now</Link> <i class="fas fa-arrow-right"></i>
                </div>
            </div>
            <div className="image" style={{ background: `url('https://images.pexels.com/photos/935756/pexels-photo-935756.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')` }}>

            </div>
        </div>
        <div className="second-container">
            <h3>HOW THE PROGRAM WORKS</h3>
            <h1>Unlock New Rewards and Higher Commission with Our Tier System</h1>
            <div className="sub-containers">
                <div className="sub-container" style={{ background: '#909dbd'}}>
                    <div className="sub-container-info">
                        <h2>Silver Partner <br /><span style={{ color: '#e5ebf0', fontSize: '19px' }}>(3-9 referrals)</span></h2>
                    <span>
                        In tier one, you’ll have access to the following exclusive partner benefits
                    </span>
                    <div>
                        <i class="fa fa-check-circle" aria-hidden="true"></i>
                        <span>
                            10% Monthly Recurring Commission
                        </span>
                    </div>
                    <div>
                        <i class="fa fa-check-circle" aria-hidden="true"></i>
                        <span>
                            10% Monthly Recurring Commission
                        </span>
                    </div>
                </div>
            </div>
                <div className="sub-container" style={{ background: '#44547c' }}>
                    <div className="sub-container-info">
                        <h2>Silver Partner <br /><span style={{ color: '#e5ebf0', fontSize: '19px' }}>(3-9 referrals)</span></h2>
                    <span>
                        In tier one, you’ll have access to the following exclusive partner benefits
                    </span>
                    <div>
                        <i class="fa fa-check-circle" aria-hidden="true"></i>
                        <span>
                            10% Monthly Recurring Commission
                        </span>
                    </div>
                    <div>
                        <i class="fa fa-check-circle" aria-hidden="true"></i>
                        <span>
                            10% Monthly Recurring Commission
                        </span>
                    </div>
                </div>
            </div>
                <div className="sub-container" style={{ background: '#4c4ee6' }}>
                    <div className="sub-container-info">
                        <h2>Silver Partner <br /><span style={{ color: '#e5ebf0', fontSize: '19px' }}>(3-9 referrals)</span></h2>
                    <span>
                        In tier one, you’ll have access to the following exclusive partner benefits
                    </span>
                    <div>
                        <i class="fa fa-check-circle" aria-hidden="true"></i>
                        <span>
                            10% Monthly Recurring Commission
                        </span>
                    </div>
                    <div>
                        <i class="fa fa-check-circle" aria-hidden="true"></i>
                        <span>
                            10% Monthly Recurring Commission
                        </span>
                    </div>
                    <div>
                        <i class="fa fa-check-circle" aria-hidden="true"></i>
                        <span>
                            10% Monthly Recurring Commission
                        </span>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className="third-container">
            <h3>HOW TO APPLY</h3>
            <h1>Apply to Become a Partner by Clicking the Button Below and Fill in the Form</h1>
        </div>
        <div className="fourth-container">
            <div className="fourth-box">
                <h2>Apply</h2>
                <p>Apply to become a partner by clicking the button below and fill in the form.</p>
            </div>
            <div className="fourth-box">
                <h2>Refer Three Clients</h2>
                <p>Before you can become an official partner and earn a commission, you must refer three clients via your referral link.</p>
            </div>
            <div className="fourth-box">
                <h2>Sign the Contract</h2>
                <p>Once you’ve referred three clients and signed the contract, you’ll start earning commission in tier one.</p>
            </div>
        </div>
        <div className="fifth-container">
            <div className="fifth-box">
                <div className="link">Apply for the Sleeknote Partner Program</div>
                <Link className="button">APPLY NOW</Link>
            </div>
            <div className="fifth-box">
                <div className="link">Already a Sleeknote Partner? Sign in here.</div>
                <Link to="/login" className="button">LOG IN</Link>
            </div>
        </div>
    </div>
);

export default Partner;
