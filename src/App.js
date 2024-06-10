import './App.css';
import Resume from './components/Resume';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

function App() {
  return (

      <Router>
        <Resume />
      </Router>
      
    
  );
}

export default App;
