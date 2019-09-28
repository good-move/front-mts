import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import EmployersPage from './Pages/EmployerPage/employerPage';
import HRPage from './Pages/hrPage';
import MainPage from './Pages/mainPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={ MainPage } />
          <Route path={'/employers'} component={ HRPage } />
          <Route path={'/jobs'} component={ EmployersPage } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
