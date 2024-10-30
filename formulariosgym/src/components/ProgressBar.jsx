import React from 'react';
import '../styles/ProgreessBar.css';

const ProgressBar = ({ currentStep, totalSteps }) => {
    const progressPercentage = (currentStep / totalSteps) * 100;

    return (
        <div className="progress-container">
            <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
        </div>
    );
};

export default ProgressBar;
