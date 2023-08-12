import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(" ");

  const ShowAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(" ")
    }, 1500);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      ShowAlert("Dark Mode has been Enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      ShowAlert("Light Mode has been Enabled", "success");

    }
  }
  return (
    <>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3" >
          <Textform ShowAlert={ShowAlert} heading='Enter the text to Analyze' mode={mode}/>
        </div >

    </>
  );
}

export default App;
