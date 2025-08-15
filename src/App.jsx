import { useState } from 'react'
import './App.css'
import {Row , Col, Layout} from 'antd'
import TextBox from './components/TextBox'
import { Typography } from 'antd';
import ContentColumn from './components/ContentColumn';

const { Header, Footer, Sider, Content } = Layout;


function App() {

  
  return (
    <> 
      <Layout style={{height: '100%'}}>
        {/*<Header className='header'>
          
        </Header>*/}
        <Content className='content-body'>
          <Row gutter={0} style={{height: '100%'}}>
          <Col xs={0} md={4} lg={4}></Col>
          <ContentColumn />
          <Col xs={0} md={4} lg={4}></Col>
        </Row>
        </Content>
      </Layout>
    </>
  )
}

export default App
