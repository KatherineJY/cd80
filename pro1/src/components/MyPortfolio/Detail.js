import React, { Component } from 'react';
import { Table, Divider, Tag } from 'antd';

import dataAccess from '../../model/dataAccess'

class Detail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [{
                sector: "IT",
                quantity: 10,
                investment: "3,000,000",
                investmentNum: 3000000,
                esg: 67.3,
                return: "+0.38(+0.57%)",
                returnP: true,
                returnNum: 0.38
            },{
                sector: "FIANCE",
                quantity: 15,
                investment: "10,000,000",
                investmentNum: 10000000,
                esg: 67.5,
                return: "-0.38(+0.57%)",
                returnP: false,
                returnNum: -0.38
            },
        ]
        }
    }
    
    componentDidMount = () => {
        dataAccess.requestData("/get_invest_port",(response)=>{
            console.log(response);
        })
    }

    render() {
        const columns = [{
            title: 'SECTOR',
            dataIndex: 'sector',
            width: '20%',
          }, {
            title: 'QUANTITY',
            dataIndex: 'quantity',
            sorter: (a, b) => a.quantity - b.quantity,
            width: '20%',
          }, {
            title: 'INVESTMENT($)',
            dataIndex: 'investment',
            sorter: (a, b) => a.investmentNum - b.investmentNum,
            width: '20%',
          },{
            title: 'ESG SCORE',
            dataIndex: 'esg',
            sorter: (a, b) => a.esg - b.esg,
            width: '20%',
          },{
            title: 'RETURN',
            dataIndex: 'return',
            sorter: (a, b) => a.returnNum - b.returnNum,
            width: '20%',
          }];

        return (
            <div>
                <Table columns={columns} dataSource={this.state.data} size="small"></Table>
            </div>
        );
    }
}

export default Detail;