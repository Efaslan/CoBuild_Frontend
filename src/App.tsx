import { useState } from 'react';
import { HomePage } from './components/pages/HomePage'; // Dosya yoluna dikkat et
import './App.css';

function App() {
  const handleNavigate = (page: string) => {
    console.log("Gidilecek sayfa:", page);
  };

  return (
    <>
      <HomePage onNavigate={handleNavigate} />
    </>
  );
}

export default App;