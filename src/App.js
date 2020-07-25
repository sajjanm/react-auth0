import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Secret from './components/Secret';
import NotFound from './components/NotFound';
import Callback from './components/Callback';

function App(props) {
  let mainComponent = "";
  switch(props.location){
    case "":
      mainComponent = <Main {...props}/>;
      break;
    case "secret":
      mainComponent = <Secret />;
      break;
    case "callback":
      mainComponent = <Callback />;
      break;
    default:
      mainComponent = <NotFound/>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React, {props.name}</h1>
        {mainComponent}
      </header>
    </div>
  );
}

export default App;
