import React from 'react'
const userInput = (props) =>{
    const mystyle={
        border: '2px solid red'
    };

    return <input type="text" style={mystyle} onChange = {props.changed} value={props.currentName}/>;
}

var temp;
export default userInput;