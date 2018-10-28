import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from "react-router-dom";

import router from "./model/router";

import logo from "./assets/images/logo.png";
import "./assets/css/navigator.css";
import "./assets/css/index.css";

class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <div>
          <div className="nav">
            <div id="logo" className="nav-item">
              <img src={logo} alt="" />
            </div>
            {router.map((value, key) => {
              if (value.exact) {
                return (
                  <NavLink
                    className="nav-item"
                    activeClassName="nav-item-on"
                    key={key}
                    exact
                    to={value.path}
                  >
                    {value.title}
                  </NavLink>
                );
              } else
                return (
                  <NavLink
                    className="nav-item"
                    activeClassName="nav-item-on"
                    key={key}
                    to={value.path}
                  >
                    {value.title}
                  </NavLink>
                );
            })}
          </div>

          {
            router.map((value, key) => {
              if (value.exact) {
                return <Route key={key} exact path={value.path}                     
                          render={props => (<value.component {...props} routes={value.routes} />)} />
              } else {
                return <Route key={key} path={value.path}                     
                          render={props => (<value.component {...props} routes={value.routes} />)} />
              }
          })
        }
        </div>
      </Router>
    );
  }
}

export default App;
