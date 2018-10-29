import React, { Component } from 'react';

import Detail from './MyPortfolio/Detail';
import ReturnChart from './MyPortfolio/ReturnChart'
import EsgChart from './MyPortfolio/EsgChart'
import StockDetail from './MyPortfolio/StockDetail'

class MyPortfolio extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="title" >MY PORTFOLIO</div>
                    <Detail></Detail>
                </div>
                <div className="container">
                    <div className="title" >RETURN</div>
                    <ReturnChart></ReturnChart>
                </div>
                <div className="container">
                    <div className="title" >ESG SCORE</div>
                    <EsgChart></EsgChart>
                </div>
                <div className="container">
                    <div className="title" >PORTFOLIO</div>
                    <StockDetail></StockDetail>
                </div>
            </div>
        );
    }
}

export default MyPortfolio;