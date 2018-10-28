import React, { Component } from 'react';

import Detail from './MyPortfolio/Detail';
import ReturnChart from './MyPortfolio/ReturnChart'

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
                
                </div>
                <div className="container">
                    <div className="title" >PORTFOLIO</div>
                
                </div>
            </div>
        );
    }
}

export default MyPortfolio;