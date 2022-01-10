import "./App.css";
import React, { Component } from "react";
import NavBar from "./Components/Navbar";
import News from "./Components/News";
export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <News pageSize = {8} category = "health"></News>
      </div>
    );
  }
}
