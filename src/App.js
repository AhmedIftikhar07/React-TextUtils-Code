
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#04031a'
      document.body.style.color = 'white'
      showAlert("Dark mode has been enabled", "success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light mode has been enabled", "success")

    }
  }

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  return (


    <div>
      <Navbar title="TextUtilts" about="About" home="Home" mode={mode}
        toggleMode={toggleMode} ></Navbar>
      <Alert alert={alert}></Alert>
      <div className='container my-5'>
        <TextForm showAlert={showAlert} heading="Enter The Text To Analyze" mode={mode}></TextForm>
      </div>
    </div>

  );
}

export default App;
