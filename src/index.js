import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './resources/css/app.css';

import Routes from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

ReactDOM.render(
  // classic way to do it:
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>
  // but here we made the function above to still only reference a simple <App /> component:
  <App />,
  document.getElementById('root')
);
