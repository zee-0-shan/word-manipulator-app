// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setmode] = useState("light");
  let toggleMode= ()=>{

    if(mode==="light"){
      setmode("dark")
      document.body.style.backgroundColor="#10153df7"
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setmode("light")
      document.body.style.backgroundColor="white"
      showAlert("Light mode has been enabled","success")
    }
  }

  const [alert, setAlert] = useState(undefined);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(undefined)
    }, 1500);
  }
  return (
    <>
     
<Navbar title="word-manipulator" aboutText="text" mode={mode} toggleMode={toggleMode}/>
<div className="container my-3" >
<Alert alert={alert}/>
<TextForm Heading="enter your text here" mode={mode} showAlert={showAlert}/>
{/* <About mode={mode}/> */}
</div>


    </>
  );
}

export default App;
