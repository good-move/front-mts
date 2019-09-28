import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import EmployersPage from './Pages/EmployerPage';
import HRPage from './Pages/hrPage';
import MainPage from './Pages/MainPage';
import EmployerResultPage from './Pages/Result/EmployerResultPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={ MainPage } />
          <Route path={'/employers/:id'} component={ EmployerResultPage } />
          <Route path={'/employers'} component={ HRPage } />
          <Route path={'/jobs'} component={ EmployersPage } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
