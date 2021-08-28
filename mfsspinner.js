import React from 'react';
import '../styles/MFSSpinner.css';


const MFSSpinner = (props) => {
    return (
        <div class="spinner">
            <div class="loading-container">
                <div class="loading">
                    <div class="l1">
                    <div></div>
                    </div>
                    <div class="l2">
                    <div></div>
                    </div>
                    <div class="l3">
                    <div></div>
                    </div>
                    <div class="l4">
                    <div></div>
                    </div>
                    <div class="l5">
                    <div></div>
                    </div>
                    <div class="l6">
                    <div></div>
                    </div>
                    <div class="l7">
                    <div></div>
                    </div>
                    <div class="l8">
                    <div></div>
                    </div>
                    <div class="l9">
                    <div></div>
                    </div>
                </div>
                <span id="spinner-text"> </span>
            </div>
        </div>
    );
}

export default MFSSpinner;