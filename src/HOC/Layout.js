import React from 'react';
import Header from '../components/Header_Footer/Header';

const Layout = (props) => {
  return (
    <div className="app" style={{ height: '200vh' }}>
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;
