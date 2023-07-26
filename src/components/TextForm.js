import React, { useState } from 'react'



export default function TextForm(props) {

    const [text, setText] = useState('');

    const handleUpperClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowerClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const handleClearClick = ()=>{
        let newText = ""
        setText(newText)
    }

    const handleCopyText = ()=>{
        let newText = document.querySelector("#myBox");
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Copied","success");
        
    }

    const handleTilteCase =()=>{
        let newText = text.split(' ');
        console.log(newText);
        for(let i=0; i<newText.length; i++){
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1); 
        }
        let titleCase = newText.join(' ');
        setText(titleCase)
    
    }
    
   
    
  return (
    <div>
    <h2>{props.heading}</h2>
    <div className="mb-3">
    <textarea className="form-control" placeholder='Enter your text' value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>

    
    <button disabled={text.length===0} onClick={handleUpperClick} className='mx-1 my-1 btn-primary btn'>UpperCase</button>

    <button disabled={text.length===0} onClick={handleLowerClick} className='mx-1 my-1 btn-primary btn'>LowerCase</button>

    <button disabled={text.length===0} onClick={handleTilteCase} className='mx-1 my-1 btn-primary btn'>Tilte Case</button>

    <button disabled={text.length===0} onClick={handleCopyText} className='mx-1 my-1 btn-primary btn'>Copy Text</button>

    <button disabled={text.length===0} onClick={handleClearClick} className='mx-1 my-1 btn-primary btn'>Clear Text</button>
    
    
    

    <div className='my-3'>
        <h2>Your Text Summary</h2>
        <p><b>{text.split(/\s+/).filter((elem)=>{return elem.length !== 0}).length}</b> words & <b>{text.length}</b> characters</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the above text box to preview it here"}</p>
    </div>
    </div>
  )
}
