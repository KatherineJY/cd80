import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Button } from "antd";

// import 'antd/dist/antd.css'
import '../assets/css/home.css'

class Home extends Component {
  render() {
    return (
      <div>
        <div className="banner-container">
          <div className="banner-title">
            <p>
              <b>CUSTOMIZE YOUR ESG PORTFOLIO</b>
            </p>
          </div>
          {/* <Button type="primary"><Link to="/discover">GET STARTED</Link></Button> */}
          <button className="start-btn">
            <Link to="/discover">GET STARTED</Link>
          </button>
        </div>
        <div className="options-container">
          <div className="option">
            <img className="option-img" src={require('../assets/images/option1.png')} alt="" />
            <p>CONSULTANT SERVICE</p>
          </div>
          <div className="line" />
          <div className="option">
            <img className="option-img" src={require('../assets/images/option2.png')} alt="" />
            <p>STOCK PROFILE</p>
          </div>
          <div className="line" />
          <div className="option">
            <img className="option-img" src={require('../assets/images/option3.png')} alt="" />
            <p>RISK ANALYSE</p>
          </div>
        </div>
        <div className="introduction-container">
          <div className="introduction-title">
            <b>HOW IT WORKS?</b>
          </div>
          <div className="introduction-item">
            <div className="pic-holder">
              <img src={require('../assets/images/des1.png')} alt="" />>
            </div>
            <div className="description-holder">
              <div className="description-title title-left">
                <b>Assess Your Risk</b>
              </div>
              <p>
                Review the risk in your portfolio. If you’re taking on too much
                investment risk, you’ll get suggestions on ways to achieve
                similar levels of performance while reducing risk.{" "}
              </p>
            </div>
          </div>
          <div className="introduction-item">
            <div className="description-holder">
              <div className="description-title title-right">
                <b>Compare Your Portfolio</b>
              </div>
              <p>
                Review the risk in your portfolio. If you’re taking on too much
                investment risk, you’ll get suggestions on ways to achieve
                similar levels of performance while reducing risk.{" "}
              </p>
            </div>
            <div className="pic-holder">
              <img src={require('../assets/images/des2.png')} alt="" />
            </div>
          </div>
          <div className="introduction-item">
            <div className="pic-holder">
              <img src={require('../assets/images/des3.png')} alt="" />
            </div>
            <div className="description-holder">
              <div className="description-title title-left">
                <b>Analyze Past Performance</b>
              </div>
              <p>
                Review the risk in your portfolio. If you’re taking on too much
                investment risk, you’ll get suggestions on ways to achieve
                similar levels of performance while reducing risk.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Home;
