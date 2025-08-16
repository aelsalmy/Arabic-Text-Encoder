import React , {useState} from "react";
import '../App.css'
import {Button, Typography , message} from "antd";
import { Col , Radio , Row } from 'antd';
import TextBox from "./TextBox";
import ButtonMenu from "./ButtonMenu";
import NumericAlgoritm from "../algorithms/NumericAlgorithm";
import ReverseNumericAlgoritm from "../algorithms/ReverseNumeric";
import MorseAlgorithm from "../algorithms/MorseAlgorithm";

const { Title, Paragraph, Text } = Typography;

export default function ContentColumn({onInputChange}){
    
    const [inputText , setInputText] = useState("");
    const [encodingAlgo , setEncodingAlgorithm] = useState("")
    const [result , setResult] = useState("")

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
        const rtlText = result.split(" ").reverse().join(" ");
        navigator.clipboard.writeText(rtlText)
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

    const onSubmit = () => {
        console.log("Submitted")
        switch (encodingAlgo){
            case "numeric":
                setResult(NumericAlgoritm(inputText))
                break;
            case "reverse":
                setResult(ReverseNumericAlgoritm(inputText))
                break;
            case "morse":
                setResult(MorseAlgorithm(inputText))
                break;
        }
    }

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
                    <Button 
                        className="submit-button"
                        onClick={(event) => onSubmit()}
                    >Encode</Button>
                    {/*<Button 
                        className="submit-button"
                        onClick={(event) => copyToClipboard()}
                    >Copy to Clipboard</Button>*/}
                </Row>
                <TextBox disabled={true} resultText={result}/>
            </Col>
        </>
    );
}