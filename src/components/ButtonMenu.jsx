import React, { useState , useEffect} from "react";
import '../App.css'
import { Radio , InputNumber} from "antd";
import {Typography} from "antd";
import {Row} from "antd";


const { Title, Paragraph, Text } = Typography;

export default function ButtonMenu({onAlgorithmChange}){

    const [isMobile , setIsMobile] = useState(window.innerWidth < 765);
    const [algorithm , setAlgorithm] = useState("")

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 765);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {isMobile?(
                <Radio.Group
                    className="radio-buttons"
                    onChange={(event) => {
                        onAlgorithmChange(event.target.value)
                        setAlgorithm(event.target.value)
                        console.log("changed Algorithm")
                    }}
                >
                    <Radio value="numeric">Numeric</Radio>
                    <Radio value="reverse">Reverse Numeric</Radio>
                    <Radio value="morse">Morse</Radio>
                    <Radio value="caesar">Caesar Cypher</Radio>
                </Radio.Group>
            ):(
                <Radio.Group
                    buttonStyle="solid"
                    className="radio-buttons"
                    onChange={(event) => {
                        onAlgorithmChange(event.target.value)
                        setAlgorithm(event.target.value)
                        console.log("changed Algorithm")
                    }}
                >
                    <Radio.Button value="numeric">Numeric</Radio.Button>
                    <Radio.Button value="reverse">Reverse Numeric</Radio.Button>
                    <Radio.Button value="morse">Morse</Radio.Button>
                    <Radio.Button value="caesar">Caesar Cypher</Radio.Button>
                </Radio.Group>
            )}  
                <Row className="input-num-row">
                    <Paragraph className="par-text">Caesar Cypher Key: </Paragraph>
                    <InputNumber 
                        min={1} max={28} defaultValue={2}
                        disabled={algorithm !== "caesar"}
                        controls={true}
                    ></InputNumber>
                </Row>   
        </>
    );
}