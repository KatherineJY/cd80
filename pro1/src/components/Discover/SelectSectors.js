import React, { Component } from "react";
import { Row, Col, Button } from "antd";
import propTypes from 'prop-types';
import storage from '../../model/storage'

import "antd/dist/antd.css";
import "../../assets/css/sector.css";

class SelectSectors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  getCheckedList = () => {
    let tempData = [];
    this.state.data.forEach( (item) =>{
      if( item.checked )
      tempData.push( item.title );
    } );
    this.setState({
      checkedList : tempData,
    },() => {
      console.log("call back");
      console.log(this.state.checkedList);
    });
    console.log(tempData);
    console.log(this.state.checkedList);
  }

  componentDidMount() {
    this.setState({
      data:storage.get("data")
    })
  }  

  clickItem = e => {
    let item = e.target;
    let key = item.getAttribute("data-key");
    if (key == null) item = item.parentNode;
    key = item.getAttribute("data-key");
    let tempData = this.state.data;
    tempData[key].checked = !tempData[key].checked;
    this.setState({
      data: tempData
    });
  };

  render() {
    return (
      <Row type="flex" justify="space-around">
        {this.state.data.map((item, key) => {
          return (
            <Col key={key}>
              <Button
                className={
                  item.checked ? "sector-item sector-item-on" : "sector-item"
                }
                data-key={key}
                onClick={this.clickItem}
              >
                <b className="sector-title">{item.title}</b>
                <p>ESG Score: {item.esg}</p>
              </Button>
            </Col>
          );
        })}
      </Row>
    );
  }
}

SelectSectors.defaultProps = {
  checkedList:[]
}

SelectSectors.propTypes = {
  title:propTypes.array
}

export default SelectSectors;
