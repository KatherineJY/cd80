import React, { Component } from "react";
import { Steps, Button, message } from "antd";
import SelectSectors from "../components/Discover/SelectSectors";
import GetYourPortfolio from "../components/Discover/GetYourPortfolio";
import DistributeWeights from "../components/Discover/DistributeWeights";

import "antd/dist/antd.css";
import "../assets/css/discover.css";

const Step = Steps.Step;

const steps = [
  {
    title: "SELECT SECTORS",
  },
  {
    title: "DISTRIBUTE WEIGHTS",
  },
  {
    title: "GET YOUR PORTFILIO",
  }
];

class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }

  next = () => {
    const current = this.state.current + 1;
    this.setState({ current });
  };

  prev = () => {
    const current = this.state.current - 1;
    this.setState({ current });
  };

  render() {
    const { current } = this.state;
    return (
      <div>
        <div className="container">
          <div className="title">CUSTOMIZE MY PORTFOLIO</div>
          <Steps current={current}>
            {steps.map((item, key) => {
              return <Step key={key} title={item.title} />;
            })}
          </Steps>
          <div className="steps-content">
            {
                current==0 && <SelectSectors></SelectSectors>
            }
            {
                current==1 && <DistributeWeights></DistributeWeights>
            }
            {
                current==2 && <GetYourPortfolio></GetYourPortfolio>
            }
          </div>
          <div className="steps-action">
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => this.next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                onClick={() => message.success("Processing complete!")}
              >
                CHECK PORTFOLIO
              </Button>
            )}
            {current > 0 && (
              <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                Previous
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Discover;
