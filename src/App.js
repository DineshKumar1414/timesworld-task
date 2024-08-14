import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/Login';
import Home from './components/HomePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
