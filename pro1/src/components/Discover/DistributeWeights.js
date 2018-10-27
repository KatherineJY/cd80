import React, { Component } from "react";
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend} from "bizcharts";
import { Slider, InputNumber, Row, Col } from "antd";
import DataSet from "@antv/data-set";

import "../../assets/css/distribute.css";

class DistributeWeights extends Component {
  constructor(props) {
    super(props);
    this.state = {
      domain: "",
      data: [
        {
          item: "IT",
          value: 0.2,
        },
        {
          item: "FINANCE",
          value: 0.2,
        },
        {
          item: "AGRICULTURE",
          value: 0.2,
        },
        {
          item: "REAL STATE",
          value: 0.2,
        },
        {
          item: "MANUFACTURE",
          value: 0.2,
        }
      ]
    };
  }

  componentDidMount(){
    // let tempData = this.state.data;
    // tempData.map((item)=>{
    //   return {
    //     item: item.item,
    //     value: item.value,
    //   }
    // })
  }

  onChange = (key,value) => {
    if (isNaN(value) || value>1 || value<0) {
      return;
    }
    // console.log(value);
    // value = value.toFixed(2);
    // console.log(value);
    let tempData = this.state.data;
    let sum = 0;
    console.log(key);
    for(let i=0;i<key;i++)
      sum = sum + tempData[i].value;
    if( sum+value > 1.0 )
      return;
    else {
      tempData[key].value = value;
      sum = sum+value;
    }
    for(let i=key+1;i<tempData.length-1;i++){
      if( sum+tempData[i].value > 1.0 ){
        tempData[i].value = sum<1.0?1.0-sum:0;        
        sum = 1.0;
      }
      else sum = sum+tempData[i].value;
    }
    tempData[tempData.length-1].value = 1-sum;
    for(let i=0;i<tempData.length;i++)
      tempData[i].value = parseFloat(tempData[i].value.toFixed(2));
    this.setState({
      data:tempData
    })
  }
  
   

  render() {
    const { DataView } = DataSet;
    const dv = new DataView();
    dv.source(this.state.data).transform({
      type: "percent",
      field: "value",
      dimension: "item",
      as: "percent"
    });
    const cols = {
      percent: {
        formatter: val => {
          val = (val * 100).toFixed(2) + "%";
          return val;
        }
      }
    };
    return (
      <div className="distribute-container">
        <div className="pieChartContainer">
          <Chart
            height={window.innerHeight * 0.5}
            data={dv}
            scale={cols}
            padding={[0, 0, 0, 0]}
            forceFit
          >
            <Coord type={"theta"} radius={0.75} innerRadius={0.6} />
            <Axis name="percent" />
            <Legend
              position="right"
              offsetY={-window.innerHeight / 2 + 120}
              offsetX={-150}
            />
            <Tooltip
              showTitle={false}
              itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
            />
            <Geom
              type="intervalStack"
              position="percent"
              color="item"
              tooltip={[
                "item*percent",
                (item, percent) => {
                  percent = (percent * 100).toFixed(2) + "%";
                  return {
                    name: item,
                    value: percent
                  };
                }
              ]}
              style={{
                lineWidth: 1,
                stroke: "#fff"
              }}
            >
              <Label
                content="percent"
                formatter={(val, item) => {
                  return item.point.item + ": " + val;
                }}
              />
            </Geom>
          </Chart>
        </div>
        <div className="adjustContainer">
          {this.state.data.map((item, key) => {
            return (
              <Row type="flex" align="middle" key={key}>
                <Col span={6}>{item.item}</Col>
                <Col span={8}>
                  <Slider
                    min={0}
                    max={1}
                    onChange={this.onChange.bind(this,key)}
                    value={typeof item.value === "number" ? item.value : 0}
                    step={0.01}
                  />
                </Col>
                <Col span={6}>
                  <InputNumber
                    min={0}
                    max={1}
                    style={{ marginLeft: 16 }}
                    step={0.01}
                    value={item.value}
                    onChange={this.onChange.bind(this,key)}
                  />
                </Col>
              </Row>
            );
          })}

          {/* <p>
            {this.state.willNext ? (
              <Icon type="check-circle" theme="twoTone" />
            ) : (
              <Icon type="warning" theme="twoTone" />
            )}
            {this.state.adjustMsg}
          </p> */}
        </div>
      </div>
    );
  }
}

export default DistributeWeights;
