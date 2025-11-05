import React, { useState, useEffect } from 'react'

export default function TextForm(props) {
 
  const handleUpClick = () => {
    console.log("Upper Text was Clicked" + " " + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showalert("Converted to UpperCase", "success");
  }
  const handleLoClick = () => {
    console.log("Lower Text was Clicked" + " " + text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showalert("Converted to LowerCase", "success");
    
  }
    const handleClean = () => {
    console.log("Clean was clicked" + " " + text);
    let newtext = "";
    setText(newtext);
    props.showalert("The text was cleaned", "success");
  }
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  }
  const handleOnCopy=()=>
  {
    var txt = document.getElementById("myBox");
    txt.select();
    navigator.clipboard.writeText(txt.value);
    props.showalert("The text was copied successfully", "success");
  }
  const [text, setText] = useState('Enter the text');
  return (
    
    <>
<div className={`mb-3 text-${props.mode==="dark" ? "light" : "dark "}`} >
  <h1>{props.heading}</h1>
  <label htmlFor="myBox" className="form-label">Example textArea</label>
  <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='light' ? 'white' : 'grey'}} id="myBox" onChange={handleOnChange} rows="8"></textarea>
  <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To UpperCase</button>
  <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert To LowerCase</button>
  <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleClean}>Clear Text</button>
  <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleOnCopy}>Copy Text</button>
</div >
<div className={`container my-3 text-${props.mode==="dark" ? "light" : "dark "}`}>
  <h2>Preview</h2>
  <p>{text.length>0 ? text : "Enter something to preview here"}</p>
</div>
</>


  )
}
