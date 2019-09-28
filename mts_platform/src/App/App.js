import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import EmployersPage from './Pages/employerPage';
import HRPage from './Pages/HrPage';
import MainPage from './Pages/mainPage';
import HrResult from './Pages/Result/HrResultPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={ MainPage } />
            <Route path={'/hr/results/:vacancyId'} component={HrResult}/>
          <Route path={'/employers'} component={ HRPage } />
          <Route path={'/jobs'} component={ EmployersPage } />
            <Route path={'/hr'} component={HRPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
