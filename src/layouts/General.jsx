import React from "react";
// javascript plugin used to create scrollbars on windows
import { Route, Switch } from "react-router-dom";

import routes from "routes.js";
import '../assets/css/general.css';

class General extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "black",
      activeColor: "info"
    };
    this.mainPanel = React.createRef();
  }
  
  render() {
    return (
          <Switch>
            {routes.map((prop, key) => {
              return (
                <Route
                  path={prop.layout + prop.path}
                  component={prop.component}
                  key={key}
                />
              );
            })}
          </Switch>
    );
  }
}

export default General;
