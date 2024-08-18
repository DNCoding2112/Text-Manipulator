import React, { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setMode]= useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message, type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","info");
      document.title="TextManipulator-Home(Dark)";
      // setInterval(() => {
      //   document.title="TextManipulator is Awesome";
      // }, 2000);
      // setInterval(() => {
      //   document.title="Install TextManipulator Now!!!";
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","info");
      document.title="TextManipulator-Home(Light)";
    }
  }
  return (
  <>
  <Router>
<Navbar title="Siddh's Text Manipulator" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
{/* <Navbar/> */}
<Alert alert={alert}/>
<div className="container my-3">
<Routes>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode}/>}/>
        </Routes>
 {/* <About /> */}
</div>
</Router>
  </>
    );
}

export default App;