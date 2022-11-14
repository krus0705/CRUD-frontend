import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "./components/Home";
import { AddUser } from "./components/AddUser";
import { GlobalProvider } from "./context/GlobalState";
import { Provider } from "react-redux";
import store from "./store";
import "antd/dist/antd.css";

function App() {
  return (
    <div>
      <Provider store={store}>
        <GlobalProvider>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/insert" component={AddUser} />
              {/* <Route path="/edit/:id" component={EditUser} /> */} 
            </Switch>
          </Router>
        </GlobalProvider>
      </Provider>
    </div>
  );
}

export default App;
