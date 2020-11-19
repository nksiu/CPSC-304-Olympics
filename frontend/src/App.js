import React, {Component} from "react";
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";

// Components
import Header from "./components/Header";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";

// Styling
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: gainsboro;
  }
`

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <Router>
          <Header />
          <Route exact path="/" render={() => <FirstPage />} />
          <Route exact path="/second" render={() => <SecondPage />} />
          <Route exact path="/third" render={() => <ThirdPage />} />
        </Router>
      </div>
    );
  }
}

export default App;
