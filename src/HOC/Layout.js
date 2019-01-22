import React from 'react';
import Header from '../components/Header_Footer/Header';
import Footer from '../components/Header_Footer/Footer';

const Layout = (props) => {
  return (
    <div className="app" style={{ height: '200vh' }}>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
