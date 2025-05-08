import React from 'react';
import QuoteBox from './components/QuoteBox';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>Quote Generator</h1>
      <QuoteBox category="inspiration" />
    </div>
  );
}

export default App;
