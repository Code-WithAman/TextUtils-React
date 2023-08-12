import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        // console.log("uppercase was clicked.!" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.ShowAlert("Converted to Uppercase.!", "success")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.ShowAlert("Converted to Lowercase.!", "success")

    }
    const handleOnChange = (event) => {
        // console.log("on Change");  // for debugging purpose
        setText(event.target.value);

    }

    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.ShowAlert("Copied to Clipboard.!", "success");
    }

    const handleClear =()=>{
        let newText = '';
        setText(newText);
        props.ShowAlert("Text Cleared.!", "success");
    }


    const [text, setText] = useState('');
    // setText("new Text"); //correct way to change the state.!
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy To Clipboard</button>
                <button className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter Something above to preview it here.!"}</p>
            </div>
        </>

    )
}

