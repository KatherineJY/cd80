import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="banner-container">
                    <div className="banner-title">
                        <p><b>CUSTOMIZE YOUR ESG PORTFOLIO</b></p>
                    </div>
                </div>
        
    </div>
    <div className="options-container">
        <div className="option">
            <img className="option-img" src="img/option1.png" alt="">
            <p>CONSULTANT SERVICE</p>
        </div>
        <div className="line"></div>
        <div className="option">
            <img className="option-img" src="img/option2.png" alt="">
            <p>STOCK PROFILE</p>
        </div>
        <div className="line"></div>
        <div className="option">
            <img className="option-img" src="img/option3.png" alt="">
            <p>RISK ANALYSE</p>
        </div>
    </div>
    <div className="introduction-container">
        <div className="introduction-title">
            <b>HOW IT WORKS?</b>
        </div>
        <div className="introduction-item">
            <div className="pic-holder">
                <img src="img/des1.png" alt="">
            </div>
            <div className="description-holder">
                <div className="description-title title-left"><b>Assess Your Risk</b></div>
                <p>Review the risk in your portfolio. If you’re taking on too much investment risk, you’ll get suggestions on ways to achieve similar levels of performance while reducing risk.  </p>
            </div>
        </div>
        <div className="introduction-item">
            <div className="description-holder">
                <div className="description-title title-right"><b>Compare Your Portfolio</b></div>                        
                <p>Review the risk in your portfolio. If you’re taking on too much investment risk, you’ll get suggestions on ways to achieve similar levels of performance while reducing risk.  </p>
            </div>
            <div className="pic-holder">
                <img src="img/des2.png" alt="">
            </div>                
        </div>
        <div className="introduction-item">
            <div className="pic-holder">
                <img src="img/des3.png" alt="">                    
            </div>
            <div className="description-holder">
                <div className="description-title title-left"><b>Analyze Past Performance</b></div>
                <p>Review the risk in your portfolio. If you’re taking on too much investment risk, you’ll get suggestions on ways to achieve similar levels of performance while reducing risk.  </p>
            </div>
        </div>
    </div>
            </div>
        );
    }
}

export default Home;