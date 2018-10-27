import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';

import 'antd/dist/antd.css'
import '../../assets/css/sector.css'


class SelectSectors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            domain: "",
            data: [
                {
                    title: "IT",
                    esg: 90,
                    checked:false,
                },
                {
                    title: "FINANCE",
                    esg: 85,
                    checked:false,
                },
                {
                    title: "AGRICULTURE",
                    esg: 70,
                    checked:false,
                },
                {
                    title: "REAL STATE",
                    esg: 60,
                    checked:false,
                },
                {
                    title: "MANUFACTURE",
                    esg: 77,
                    checked:false,
                },
                
            ]
        }
    }

    getData = () => {

    }

    componentDidMount(){

    }
    
    clickItem = (e) => {
        let item = e.target;
        let key = item.getAttribute("data-key");
        if( key==null ) item = item.parentNode;
        key = item.getAttribute("data-key");
        let tempData = this.state.data;
        tempData[ key ].checked = !tempData[ key ].checked;
        this.setState({
            data: tempData
        })
    }

    render() {
        return (

            <Row type="flex" justify="space-around">
                {
                    this.state.data.map( (item,key) => {
                        return(
                            <Col key={key}>
                                <Button className={item.checked?"sector-item sector-item-on":"sector-item"} data-key={key} onClick = {this.clickItem}>
                                    <b className="title">{item.title}</b><p>ESG Score: {item.esg}</p>
                                </Button>
                            </Col>
                        )
                    })
                }
            </Row>
        );
    }
}

export default SelectSectors;