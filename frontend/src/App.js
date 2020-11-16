import React, {Component} from "react";
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header";
import FirstPage from "./components/FirstPage"
import SecondPage from "./components/SecondPage"

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Route exact path="/" render={() => <FirstPage />} />
          <Route exact path="/second" render={() => <SecondPage />} />
        </Router>
      </div>
    );
  }
}

export default App;
