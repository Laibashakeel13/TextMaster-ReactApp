import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [activePage, setActivePage] = useState('home');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      showAlert("Light mode has been enabled", "success");
    }
  };

  const navbarColorDark = 'rgb(5, 20, 42)';
  const navbarColorLight = 'rgb(67, 152, 236)';

  const backgroundColor = mode === 'dark' ? 'black' : 'white';
  const textColor = mode === 'light' ? 'black' : 'white';
  const textboxColor = mode === 'dark' ? navbarColorDark : navbarColorLight;
  const darkModeClass = mode === 'dark' ? 'dark-mode' : '';

  return (
    <Router>
      <div className={`app ${darkModeClass}`} style={{ backgroundColor, color: textColor, minHeight: '100vh' }}>
        <Navbar
          title="TextMaster"
          mode={mode}
          toggleMode={toggleMode}
          home="Home"
          about="About"
          navbarColor={mode === 'light' ? navbarColorLight : navbarColorDark}
          activePage={activePage}
          setActivePage={setActivePage}
        />
        <Alert alert={alert} setAlert={setAlert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/" element={
              <TextForm
                showAlert={showAlert}
                heading="Enter Your Text to Analyze"
                mode={mode}
                textboxColor={textboxColor}
              />
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
