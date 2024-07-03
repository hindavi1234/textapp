
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import About from './component/About';
import { useState } from 'react';
import Alert from './component/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');

  const removeBodyClasses = ()=>{
    // document.body.classList.remove('bg-light')
    // document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";
      //  setInterval(()=>{
      //   document.title = "TextUtils is Amazing";
      //  },2000)
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Ligth Mode";
    }
  }

  const [alert, setAlert] = useState()
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      Type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }
  return (
    <>
      <Router>
        <Navbar title="Textutils" abouts="about_Us" mode={mode} toggleMode={toggleMode} />
        <Alert msge="This is alert!" alert={alert} />
        <div className='container my-3'>
          <Routes>
            <Route path="/about" element={<About mode={mode}/>} />
            {/* <TextForm heading="Enable the Text to analyse below" showAlert={showAlert} mode={mode} />
            <About/> */}
            <Route path="/" element={<TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove extra Spaces" showAlert={showAlert} mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
