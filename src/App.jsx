import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Signup from './components/Signup'
import Login from './components/Login';
import PlayerInput from './components/PlayerInput';
import PlayerStats from './components/PlayerStats';
import Roster from './components/Roster';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/PlayerInput" element={<PlayerInput/>}/>
          <Route path="/playerStats" element={<PlayerStats/>}/>
          <Route path="/roster" element={<Roster/>}/>
      </Routes>
    </Router>
  );
}

export default App;
