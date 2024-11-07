import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Friend from './component/Friend';
import Notestate from './context/Notestate';

function App() {
  return (
    <Notestate>
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/friend" element={<Friend />} />
        </Routes>
      </div>
    </Router>
    </Notestate>
  );
}

export default App;
