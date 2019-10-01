import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import Employee from "./components/Employee";
import Employees from "./components/Employees";
import Navigation from "./components/navigation/navigation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/employees" component={Employees} exact />
          <Route path="/employee/:id" component={Employee} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
