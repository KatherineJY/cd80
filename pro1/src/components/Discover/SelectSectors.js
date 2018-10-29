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
      data: storage.get("data")
    };
  }

  getCheckedList = () => {
    let checkedList = [];
    let len = 0;
    this.state.data.forEach( (item) => {
      if(item.checked) {
        len = len+1;
        checkedList.push({
          item: item.item,
          value: 0.0
        })
      }
    } );
    checkedList = checkedList.map( (item)=>{
      return ({
        item: item.item,
        value: parseFloat((1.0/len).toFixed(2))
      })
    } );
    storage.set("data",this.state.data);
    storage.set("checkedList",checkedList);
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
        {this.state.data&&this.state.data.map((item, key) => {
          return (
            <Col key={key}>
              <Button
                className={
                  item.checked ? "sector-item sector-item-on" : "sector-item"
                }
                data-key={key}
                onClick={this.clickItem}
              >
                <b className="sector-title">{item.item}</b>
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
