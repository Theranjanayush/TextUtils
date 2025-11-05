import { useState, useEffect } from 'react';
import './App.css';
 import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [btntext, setbtntext]=useState('Enable Dark Mode');
  const [alert, setalert]= useState(null);
  const showalert = (message, type)=>{
    setalert({
      msg : message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }
  
  const togglemode = ()=>{
    if(mode==='light'){
      setMode('dark');
      setbtntext('Enable Light Mode');
      document.body.style.backgroundColor="#1b3863";
      showalert("Dark mode is enabled", "success");
      document.title = "TextUtils- Dark Mode";
    }
    else{
      setMode('light');
      setbtntext('Enable Dark Mode');
      document.body.style.backgroundColor="#bae5ed";
      showalert("Light mode is enabled", "success");
      document.title = "TextUtils- Light Mode";
    }
  }
 useEffect(() => {
  document.body.style.backgroundColor = '#bae5ed';  // <-- your desired color here
}, []);

  
  return (
    <>
<Router basename='TextUtils'>
<Navbar title="Learn" here="My Action" mode={mode} togglemode={togglemode} btntext={btntext}/>
<Alert alert= {alert} />
<div className="container my-3" >
<Routes>       
    <Route
      path="/about"
      element={<About mode={mode}/>}
    />
    
    <Route 
      path="/"
      element= {<TextForm showalert={showalert} mode={mode} heading="Enter the text"/>}
    />
      
</Routes>
</div>
</Router>
    </>
  );
}

export default App;
