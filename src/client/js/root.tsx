import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import Home from 'components/pages/home';

const Root: React.FunctionComponent = () => (
  <Router>
    <Route exact path="/" component={Home} />
  </Router>
);

export default hot(Root);
