import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Login from './components/login-page/login-main';
import Signup from './components/signup-page/signup-main';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
