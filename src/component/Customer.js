import React, { Component } from 'react';

import CustomerLogin from './CustomerLogin'
import BGImage from '../assets/images/background.jpg'
import { Row, Col } from 'antd';

class Customer extends Component{

    constructor(){
        super();
    }

    render(){
        return (

            <div className="App-header">
                <Row>
                    <CustomerLogin/>
                </Row>
            </div>
        );
    }
}

export default Customer;