import React, { Component } from "react";

import Detail from "./MyPortfolio/Detail";
import ReturnChart from "./MyPortfolio/ReturnChart";
import EsgChart from "./MyPortfolio/EsgChart";
import StockDetail from "./MyPortfolio/StockDetail";

import dataAccess from "../model/dataAccess";

class MyPortfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailTableData: []
    };
  }

  componentDidMount = () => {
    let flag = false;
    let is_finished = false;
    let interValId = setInterval(() => {
      if (!flag) {
        flag = true;
        dataAccess.requestData("/get_invest_res", response => {
          console.log(response.data.result);
          is_finished = response.data.result;
          if (!is_finished) flag = false;
          else clearInterval(interValId);
        });
      }
    }, 5000);

    dataAccess.requestData("/get_invest_port", response => {
      console.log(response);
      let tempData = [];
      tempData = response.data.map(item => {
        return {
          sector: item[0],
          quantity: item[1],
          investment: item[2],
          investmentNum: item[2],
          esg: item[3],
          return: item[4]
        };
      });
      console.log(tempData);
      this.setState({
          detailTableData: tempData
      });
    });
    // dataAccess.requestData("/get_invest_rtn", response => {
    //   console.log(response);
    // });
    // dataAccess.requestData("/get_invest_esg", response => {
    //   console.log(response);
    // });
    // dataAccess.requestData("/get_invest_detail", response => {
    //   console.log(response);
    // });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="title">MY PORTFOLIO</div>
          <Detail detailTableData={this.state.detailTableData} />
        </div>
        <div className="container">
          <div className="title">RETURN</div>
          <ReturnChart />
        </div>
        <div className="container">
          <div className="title">ESG SCORE</div>
          <EsgChart />
        </div>
        <div className="container">
          <div className="title">PORTFOLIO</div>
          <StockDetail />
        </div>
      </div>
    );
  }
}

export default MyPortfolio;
