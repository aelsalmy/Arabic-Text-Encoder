import React , {useState} from "react";
import '../App.css'
import {Button, Typography , message} from "antd";
import { Col , Radio , Row } from 'antd';
import TextBox from "./TextBox";
import ButtonMenu from "./ButtonMenu";

const { Title, Paragraph, Text } = Typography;

export default function ContentColumn({onInputChange}){
    
    const [inputText , setInputText] = useState("");
    const [encodingAlgo , setEncodingAlgorithm] = useState("")
    const result = "This is a testing Text"

    const [messageApi, contextHolder] = message.useMessage();

    const handleInputChange = (value) =>{
        setInputText(value)
        console.log(inputText)
    }

    const handleAlgorithmChange = (value) => {
        setEncodingAlgorithm(value)
        console.log("Algorithm set to: " + value)
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(inputText)
        .then(() => {
            messageApi.open({
                type: 'success',
                content: 'Copied to Clipboard!'
            })
        })
        .catch((err) => {
            console.error("Failed to copy: ", err);
        });
    };

    return (
        <>
            {contextHolder}
            <Col xs={24} md={16} lg={16} 
                className='content-col'>
                <Title className='title'>Arabic Encoder</Title>
                <Text className="subtitle">Enter your Arabic Text Here:</Text>
                <TextBox onInputChange={handleInputChange}/>
                <Text className="subtitle">Select the Encoding Algorithm:</Text>
                <br></br>
                <ButtonMenu onAlgorithmChange={handleAlgorithmChange}/>
                <Row className="submit-button-box" style={{width: '100%'}}>
                    <Button className="submit-button">Encode</Button>
                    <Button 
                        className="submit-button"
                        onClick={(event) => copyToClipboard()}
                    >Copy to Clipboard</Button>
                </Row>
                <TextBox disabled={true} resultText={inputText}/>
            </Col>
        </>
    );
}