import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Vocabulary from './Component/Vocabulary';
import Vocabulary2 from './Component/Vocabulary2';
import Home from './Component/Home';
import Favorites from './Component/Favorites';
import logo from './CZ_logo.png';
import List from './Component/VocabularyList';
import Quiz from './Component/Quiz';
import Quiz2 from './Component/Quiz2';
import QuizList from './Component/QuizList';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <Router>
      <div className="mode-toggle-button">
        <button onClick={toggleDarkMode} className="toggle-button">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/vocabulary" element={<Vocabulary />} />
        <Route path="/vocabulary2" element={<Vocabulary2 />} />
        <Route path="/vocabularyList" element={<List />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz2" element={<Quiz2 />} />
        <Route path="/quizList" element={<QuizList />} />
      </Routes>
      <footer className="footer">
        <a href='https://www.codezero.lol/' target="_blank"  rel="noreferrer"><img src ={logo} alt='logo' height='60px' width='180px' className='logo'/></a>
        <p className='text-bottom'>© 2024, All rights reserved</p>
      </footer>
    </Router>
  );
}

export default App;
