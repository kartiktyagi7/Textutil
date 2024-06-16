import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import About from './components/About';
import React, {useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {


  const [mode, setmode] = useState({
    backgroundColor:'white',
    color:'black'
  })
  const [alert, setalert] = useState(null);
  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  const [btntext, setbtntext] = useState('🌒')
  const toggleMode=()=>{
    if (mode.backgroundColor==='white') {
      setmode({
        backgroundColor:'#131313',
        color:'#F23D3D'
      })
      setbtntext('☀️')
      document.body.style.backgroundColor='#00807D'
      showAlert("dark mode is on baby","success");
    }
    else{
      setmode({
        backgroundColor:'white',
        color:'black'
      })
      setbtntext("🌒")
      document.body.style.backgroundColor='white'
      showAlert("light mode is on baby","success");
    }
  }


  return (
    <>
      <Router>
      <Navbar title="TextUtils" about="About us" mode={mode} toggle={toggleMode} buttonicon={btntext}/>
      <Alert  alert={alert}/>
      <div className="container">
      <Routes>
          <Route exact path="/" element={<TextArea Heading='Enter the text to analyse' mode={mode} showAlert={showAlert} />} />
          <Route exact path="/about" element={<About mode={mode}/>} />     
      </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
