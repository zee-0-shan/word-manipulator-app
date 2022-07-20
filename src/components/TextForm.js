import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText]= useState("")
    const[count,setCount] = useState(0)
    

    const convertToUppercase= ()=>{
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert("converted to Uppercase", "success")
        
    }
    const handleOnChange=(input)=>{
        setText(input.target.value)
        setCount(text.split(" ").filter((e)=>{return e.length!==0 }).length)
      }
    const clickToClear=()=>{
        setText("")
        setCount(0)
        props.showAlert("text cleared", "success")
      }
    
        
    return (
      <>
  <div className="mb-3" style={{color:props.mode==='dark'? "white":"black"}}>
    
    <h1>{props.Heading} </h1>

    <textarea className="form-control my-2" value={text} placeholder="enter text here" onChange={handleOnChange}  style={{backgroundColor:props.mode==="light"?"white":"black" , color:props.mode==="dark"?"white":"black"}} id="exampleFormControlTextarea1" rows="10"></textarea>

    <button className="btn btn-primary" onClick={convertToUppercase}>covert to uppercase</button>
    <button className="btn btn-primary mx-2" onClick={clickToClear}>clear</button>
    
  </div>
  <div className="container" style={{color:props.mode==='dark'? "white":"black"}}>
  <p>characters:{text.split("").filter((e)=>{return e!==" "}).length}  words:{count}</p>
    <h3>preview</h3>
    <p>{text.length>0?text:"enter something in the text box to see here"}</p>
  </div>
  
     </>
        )
      }
    
   
    
      
      
    
