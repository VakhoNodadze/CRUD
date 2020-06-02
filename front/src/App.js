import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";

function App() {
  return (
    <div className="App" style={{height: '100vh', width: '100vw', background: 'rgb(241, 243, 244)'}}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
