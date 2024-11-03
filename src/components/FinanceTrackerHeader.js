import React from 'react';
import './FinanceTrackerHeader.css';
import analytics from '../assets/analytics.png';

const FinanceTrackerHeader = () => {
    return (
        <div className="finance-tracker-header">
            <div className="content">
                <h1 className="title">Track, Plan, and</h1>
                <h1 className="title">Achieve your</h1>
                <h1 className="title">financial Goal</h1>
            </div>
            <div className="image-container">
                <img src={analytics} alt="Analytics" />
            </div>
        </div>
    );
};

export default FinanceTrackerHeader;
