import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//
//
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Soon from "./components/Soon";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/portfolio" exact component={Portfolio} />
          {/* ---------- */}
          <Route path={() => "/main" || "/admin" || "/*"} component={Soon} />
        </Switch>
      </Router>
    );
  }
}

/*







     <Route
            path={() => "/main" || "/admin" || "/any-other-word"}
            component={Soon}
          />


          The Above line is like the * any other , it means that if the 
          user typed for example :  http://localhost:3000/jfgffff r
          http://localhost:3000/hgomr etc , it will lead the user to a costumized
          page therefore the "coming soon page"



                             <Route path="/*"  component={Soon}/>











*/
