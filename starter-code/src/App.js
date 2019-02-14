import React, { Component } from "react";

import "./App.css";

class App extends Component {
  // es MUSS eine Render-Methode geben
  render() {
    return (
      // needs to return some HTML, damit es weiß, was gerendert werden soll
      <div className="App">
        <div className="logo">
          <img src="/images/ironhack-logo.svg" />
        </div>
        <div className="nav">
          <img src="/images/menu-top.svg" />
        </div>
        <div className="heading">
          <h1>Say hello to ReactJS</h1>
        </div>
        <div className="paragraph">
          <p>
            You will learn a Frontend framework from scratch, to become a Ninka
            Developer.
          </p>
          <button>Awesome!</button>
        </div>
        <div className="lowerhalf">
          <div className="container">
            <img src="/images/icon1.png" />
            <p>Example text about the icon blabla blab lab labla</p>
          </div>
          <div className="container">
            <img src="/images/icon2.png" />
            <p>Example text about the icon blabla blab lab labla</p>
          </div>
          <div className="container">
            <img src="/images/icon3.png" />
            <p>Example text about the icon blabla blab lab labla</p>
          </div>
          <div className="container">
            <img src="/images/icon4.png" />
            <p>Example text about the icon blabla blab lab labla</p>
          </div>
        </div>
      </div>
    );
  }
}

// das gleiche wie module.exports = App beim Backend
export default App;
