import React, { useState } from "react";
import {Input} from "antd";
import '../App.css'


const {TextArea} = Input

export default function TextBox({onInputChange , disabled=false , resultText}){
    const [result , setResult] = useState("");

    return (
        <TextArea 
            className="input-text"
            style={{marginRight: '24px' , marginLeft: '24px' , boxSizing: 'border-box' , textAlign:'right'}}
            autoSize={{minRows: 5}}
            onChange={(event)=>{
                onInputChange(event.target.value)
                setResult(event.target.value)
            }}
            disabled={disabled}
            value={disabled?resultText:result}
        />
    );
}