import React, { Component } from "react";
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts";
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
    const { Html } = Guide;
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
          val = val * 100 + "%";
          return val;
        }
      }
    };
    return (
      <div className="pieChartContainer">
        <Chart
          height={window.innerHeight*0.5}
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
            offsetX={-100}
          />
          <Tooltip
            showTitle={false}
            itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
          />
          {/* <Guide>
            <Html
              position={["50%", "50%"]}
              html="<p>Adjust Distribution Weight of Sectors</p>"
              alignX="middle"
              alignY="middle"
            />
          </Guide> */}
          <Geom
            type="intervalStack"
            position="percent"
            color="item"
            tooltip={[
              "item*percent",
              (item, percent) => {
                percent = percent * 100 + "%";
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

export default DistributeWeights;
