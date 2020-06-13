import React from "react";
import { Router, Route } from "react-router-dom";
import Header from "./Header";
import history from "../history";
import PersonList from "./persons/PersonList";
import ManagePerson from "./persons/ManagePerson";

function App() {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
        <Route path="/" exact component={PersonList} />
        <Route path="/add" exact component={ManagePerson} />
        <Route path="/edit/:id" exact component={ManagePerson} />
      </Router>
    </div>
  );
}

export default App;
