import React,{Component} from 'react'
import {Row, Col, Card,Avatar} from 'antd'

const { Meta } = Card;

class Dashboard extends Component{
    render(){
        return(
            <div className="gutter-example button-demo">
                <Row gutter={10}>
                  <Col className="gutter-row" md={4}>
                     <div className="guuter-box">
                        <Card style={{ width: 300, marginTop: 16 }} >
                            <Meta
                                avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                }
                                title="Card title"
                                description="This is the description"
                            />
                        </Card>
                     </div>
                  </Col>
                </Row>

            </div>
        )
    }
}


export default Dashboard;