import React from "react";
import { HashRouter, Route } from "react-router-dom";
import portfolio from "./components/portfolio";
import About from "./pages/about";


function App() {
  return (
    <HashRouter basename="/">
      <div>
          <Route exact path="/" component={About} />
          <Route exact path="/portfolio" component={portfolio} />
      </div>
    </HashRouter>
  );
}

export default App;
