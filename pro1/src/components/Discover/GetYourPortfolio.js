import React, { Component } from "react";
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend} from "bizcharts";
import DataSet from "@antv/data-set";

class GetYourPortfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      domain: "",
      data: [
        {
          item: "IT",
          value: 0.2
        },
        {
          item: "FINANCE",
          value: 0.2
        },
        {
          item: "AGRICULTURE",
          value: 0.2
        },
        {
          item: "REAL STATE",
          value: 0.2
        },
        {
          item: "MANUFACTURE",
          value: 0.2
        }
      ]
    };
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
      <div>
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
    );
  }
}

export default GetYourPortfolio;
