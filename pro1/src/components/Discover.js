import React, { Component } from "react";

import "antd/dist/antd.css";
import "../assets/css/discover.css";

import { Steps, Button, message } from "antd";

const Step = Steps.Step;

const steps = [
  {
    title: "SELECT SECTORS",
    content: "First-content"
  },
  {
    title: "DISTRIBUTE WEIGHTS",
    content: "Second-content"
  },
  {
    title: "GET YOUR PORTFILIO",
    content: "three-content"
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
          <div className="steps-content">{steps[current].content}</div>
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
