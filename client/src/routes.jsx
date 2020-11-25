import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
// import Question from './pages/Question';
import Respond from './pages/Respond/Respond';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/question" component={Respond} />
      {/* <Route path="/savequestion" component={Question} />
      <Route path="/question/response" component={Respond} /> */}
    </BrowserRouter>
  );
}

export default Routes;