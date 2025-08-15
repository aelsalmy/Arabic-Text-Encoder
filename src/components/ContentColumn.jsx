import React from "react";
import '../App.css'
import {Typography} from "antd";
import { Col } from 'antd';
import TextBox from "./TextBox";

const { Title, Paragraph, Text } = Typography;


export default function ContentColumn({onInputChange}){
    return (
        <Col xs={24} md={16} lg={16} 
            className='content-col'>
            <Title className='title'>Arabic Encoder</Title>
            <Text className="subtitle">Enter your Arabic Text Here:</Text>
            <TextBox onInputChange={onInputChange}/>
            <Text className="subtitle">Select the Encoding Algorithm:</Text>
        </Col>
    );
}