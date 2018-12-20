import React, { Component } from "react";
import { Table, Divider, Tag } from "antd";


class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.detailTableData
    };
  }



  render() {
    const columns = [
      {
        title: "SECTOR",
        dataIndex: "sector",
        width: "20%"
      },
      {
        title: "QUANTITY",
        dataIndex: "quantity",
        sorter: (a, b) => a.quantity - b.quantity,
        width: "20%"
      },
      {
        title: "INVESTMENT($)",
        dataIndex: "investment",
        sorter: (a, b) => a.investmentNum - b.investmentNum,
        width: "20%"
      },
      {
        title: "ESG SCORE",
        dataIndex: "esg",
        sorter: (a, b) => a.esg - b.esg,
        width: "20%"
      },
      {
        title: "RETURN",
        dataIndex: "return",
        sorter: (a, b) => a.returnNum - b.returnNum,
        width: "20%"
      }
    ];

    return (
      <div>
        <Table columns={columns} dataSource={this.state.data} size="small" />
      </div>
    );
  }
}

export default Detail;
