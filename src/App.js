import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "./component/list";
import Edit from "./component/edit";
import Create from "./component/create";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">MERN CRUD APP</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">List</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          <Route path="/" exact component={List} />
          <Route path="/edit/:id" component={Edit} />
          <Route path="/create" component={Create} />
        </div>
      </Router>

    );
  }
}


export default App;