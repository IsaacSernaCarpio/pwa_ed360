import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';

import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import FormComponent from "./components/FormComponent";
import ErrorComponent from "./components/ErrorComponent";
import HomeComponent from "./components/HomeComponent";
import CreateFamilyComponent from './components/Family/CreateFamilyComponent';
import ScannerReaderComponent from './components/ScannerReaderComponent';

class App extends React.Component {
  state = {
    errors: []
  }
  showErrors = (errors) => {
    
    this.setState({
      errors: errors
    });
  }

  hideErrors = () => {
    this.setState({
      errors: []
    });
  }
  render() {
    console.log('errores',this.state.errors.length > 0)
    return (
      <div className="App">

<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/#">ED-360</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" href="/#">Inicio
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<Router>
      { this.state.errors.length > 0 &&  <ErrorComponent 
              hideErrors={this.hideErrors}
              errors={this.state.errors}
              title={'Error'}
      />}
      
      <div className="container">
        <Switch>
          <Route path="/quiz-covid" exact>
            <FormComponent showErrors={this.showErrors}/> 
          </Route>
          <Route path="/" exact>
            <HomeComponent />
          </Route>
          <Route path="/qr-reader" exact>
            <ScannerReaderComponent />
          </Route>
          <Route path="/families" exact>
{/*             <CreateFamilyComponent/>
 */}          </Route>
        </Switch>
      </div>


</Router>

      



    </div>
    )
  }
}

export default App;
