import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import NewQuestion from './pages/Question/NewQuestion';
import Respond from './pages/Respond/Respond';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/newquestion" component={NewQuestion} />
      <Route path="/question" component={Respond} />
    </BrowserRouter>
  );
}

export default Routes;