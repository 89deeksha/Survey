import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import Ques from './Components/Ques';
import Survey from './Components/Survey';
import Welcome from './Components/Welcome';
import Thanks from './Components/Thanks';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/ques" element={<Ques />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </Router>
  );
}

export default App;
