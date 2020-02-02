import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Web from './components/Web';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Web} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
