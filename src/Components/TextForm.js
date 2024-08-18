import React, {useState} from 'react'

export default function TextForm(props) {

  function convertToTitleCase(str) {
    if (!str) {
        return ""
    }
  
    return str.toLowerCase().split(' ').map(function (word) {
       return word.charAt(0).toUpperCase().concat(word.substr(1));
    }).join(' ');
  }

  /*function convertToInvertCase(str) {
    if (!str) {
        return ""
    }
  
    return str.toLowerCase().split(' ').map(function (word) {
       return word.charAt(0).toLowerCase().concat(word.substr(1).toUpperCase());
    }).join(' ');
  }*/


  const handleUpClick=()=>{
    console.log("Uppercase was clicked");
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!","success");  
  }

  const handleLoClick=()=>{
    console.log("Uppercase was clicked");
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!","success"); 
  }

  const handleTitleClick=()=>{
    let newText=convertToTitleCase(text);
    setText(newText);
    props.showAlert("Converted to Title Case!","success"); 
  }

  /*const handleInvertClick=()=>{
    let newText=convertToInvertCase(text);
    setText(newText);
  }*/

  const handleClearClick=()=>{
    let newText="";
    setText(newText);
    props.showAlert("Text Cleared!","success"); 
  }

  const Speak=()=>{
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Message Spoken!","success"); 
  }

  const handleOnChange=(event)=>{
    console.log("On change");
    setText(event.target.value);
  }

  const handleCopy= ()=>{
    console.log("text copied to clipboard");
    var text=document.getElementById("myBox");
    text.select();
    document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!","success"); 
  }

  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed!","success"); 
  }

  const [text, setText]=useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder="Enter text here..." style={{backgroundColor: props.mode==='light'?'white':'#042743', color: props.mode==='light'?'black':'white'}}></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Upper Case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lower Case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleTitleClick}>Convert to Title Case</button>
        {/* <button className="btn btn-primar y mx-1" onClick={handleInvertClick}>Convert to Invert Case</button> */}
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Handle Extra Spaces</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={Speak}>Speak</button>
    </div>
    <div className="container my-2" style={{color: props.mode==='light'?'black':'white'}}>
      <h2>Your text Summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length * 0.008} minute read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Nothing to Preview!'}</p>
    </div>
    </>
  )
}