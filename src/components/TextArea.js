import React,{useState} from 'react'

export default function TextArea(props) {
    const [Text, setText] = useState('')
    const handleUpClicked=()=>{
        let newtext=Text.toUpperCase();
        setText(newtext)
        props.showAlert("Upper Case baby","primary");
    }
    const handleOnChange=(event)=>{
        console.log("you changed")
        setText(event.target.value);
    }
    const handleLpClicked=()=>{
        setText(Text.toLowerCase())
        props.showAlert("Lower Case baby","primary");
    }



    const handleCopy=()=>{
        navigator.clipboard.writeText(Text); //copy into the clipboard using navigator 
        props.showAlert("Copy to the the clipboard baby","success");
    }

    const handleClear=()=>{
        setText('');
        props.showAlert("the text is cleared baby","danger");
    }
    const handleSpaces=()=>{
        setText(Text.replace(/\s{2,}/g, ' ').trim() ) //using javascript and regrex
        props.showAlert("clear the extra spaces","success");
    }

  return (
    <>
        <div className={`container bg-${props.mode}`}>
        <h1 className='my-3'style={{color:props.mode.backgroundColor==='white'?'black':'#FFC745'}}>{props.Heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={Text} id="mybox" placeholder="Enter the text here" onChange={handleOnChange} rows="12" style={{backgroundColor:props.mode.backgroundColor==='white'?'white':'#ff4965',color:props.mode.backgroundColor==='white'?'black':'white'}}></textarea>
        </div>
        <button disabled={Text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClicked}>Uppercase</button>
        <button disabled={Text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLpClicked}>Lowercase</button>
        <button disabled={Text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>copy text</button>
        <button disabled={Text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClear}>clear Text</button>
        <button disabled={Text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleSpaces}>remove extra spaces</button>



        </div>
        <div className="container my-3" style={{color:props.mode.backgroundColor==='white'?'black':'#FFC745'}}>
            <h2>Your Text Summary</h2>
            <p style={{color:props.mode.backgroundColor==='white'?'black':'white'}}>{Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {Text.length} characters</p>
            <p style={{color:props.mode.backgroundColor==='white'?'black':'white'}}>{0.008* Text.split(" ").length} Minutes required to read it.</p>
            <h3>Preview</h3>
            <p style={{color:props.mode.backgroundColor==='white'?'black':'white'}}>{Text.length>0?Text:"Nothing to Preview"}</p>
        </div>
    </>
  )
}