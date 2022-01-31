import React, { Component } from "react";
import { withRouter, Switch, BrowserRouter as Router } from "react-router-dom";
import Index2 from "./pages/Index2/Index2";

// Temporarily removed Route objects so it loads right to page.
// import routes from "./routes";
// import { Route } from 'react-router-dom'

// Import Scss
import "./theme.scss";

//Import Icon Css
import "./assets/css/materialdesignicons.min.css";
import Inquire from "./pages/Index2/Inquire";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            {/* See Route Comment above. */}
            {/* {routes.map((route, idx) => (
                <Route path={route.path} component={route.component} key={idx} />
              ))} */}
            {/* <Index2 /> */}
            <Inquire />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
