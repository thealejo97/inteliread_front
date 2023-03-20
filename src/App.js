import React from "react";
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home'; // Importa el componente Home que debes crear

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
