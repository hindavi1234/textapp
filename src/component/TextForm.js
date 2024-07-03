import React, { useState } from 'react'

export default function TextForm(props) {

    const handleOnchange = (event) => {
    //  console.log("on Change");
     setText(event.target.value)
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success")
    }
    const handledounClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success")
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Speaking","success")
    }
    // const handlePerLineClick = () => {
    //     let newText = text.replaceAll('.',"\n");
    //     setText(newText);
    //     props.showAlert("Handle the sentences per line","success")
    // }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Remove extra spaces","success")
    }
    const handleClearClick = () => {
        // console.log("text cleared" + text)
        let newText = '';
        setText(newText)
        props.showAlert("Text get Cleared!","success")
    }
    const handleCopy = () => {
        console.log("I am Copy");
        let text = document.getElementById("mybox")
        text.select();
        // text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied on Clipboard","success")
    }
    const [text, setText] = useState('');

    return (
        <>
        <div className='container' style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
            <h1 className='mb-3'>{props.heading}</h1>
            <div className="mb-5">
                <textarea className="form-control" value={text} onChange={handleOnchange} id="mybox" rows="6" style={{backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : "#042743"}}></textarea>
            </div>
            <button disabled={text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handledounClick}>Convert to toLowerCase</button>
            <button disabled={text.length === 0} className='btn btn-primary mx-2 my-1' onClick={speak}>Start to Speak</button>
            {/* <button className='btn btn-primary mx-2 my-1' onClick={handlePerLineClick}>Convert to perLine</button> */}
            <button disabled={text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handleExtraSpaces}>Extract Space</button>
            <button disabled={text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handleClearClick}>Clear Text</button>
            
        </div>
        <div className='container my-3' style={{color: props.mode==='dark'?'white':'#042743'}}> 
              <h1>Your text Summary</h1>
              <p>{text.split(" ").filter((element) => {return element.length!==0}).length} words and {text.length} characters</p>
              <p>{0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} Minutes read</p>
              <h2>Preview</h2>
              <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}
