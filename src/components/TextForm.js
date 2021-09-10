import React, {useState} from 'react';


export default function Textform(props) {
    const handleupClick=()=>{
     console.log('button was clicked'+text);
    let  newtext=text.toUpperCase();
     setText(newtext)
     props.showAlert("converted to uppercase")
    }
    const handleloClick=()=>{
        console.log('button was clicked'+text);
       let  newtext=text.toLowerCase();
        setText(newtext)
       }
       const handlereClick=()=>{
        console.log('button was clicked'+text);
       let  newtext='';
        setText(newtext)
       }
       const handleremovespaceClick=()=>{
        console.log('button was clicked'+text);
       let  newtext=text.split(/[ ]+/);
        setText(newtext.join(" "))
       }
  
    const handleonchange=(event)=>{
        console.log('onchange');
        setText(event.target.value);
       }
       
    const [text, setText] = useState('');
    return (
        <>
        <div className="conatiner" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1> 
<div class="mb-3">
<textarea className="form-control" id="mybox" value={text} onChange={handleonchange} style={{backgroundColor: props.Mode==='dark'?'grey':'white', color: props.Mode==='dark'?'white':'#042743'}} rows="10"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleupClick}>Convert to uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleloClick}>Convert to lowercase</button>
<button className="btn btn-primary mx-2" onClick={handlereClick}>Clear text</button>
<button className="btn btn-primary mx-2" onClick={handleremovespaceClick}>Remove Extra spaces</button>
        </div>
        <div className="container" style={{color: props.Mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length-1} words and {text.length}</p>
            <p>{0.008*text.split(" ").length}Minutes to read</p>
        </div>
        </>
    )
}
