import React from 'react';
import './App.css';
import { DatePicker } from 'antd';

function App() {
  return (
    <div className="App">
      <header className="App-header">#
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <DatePicker />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
