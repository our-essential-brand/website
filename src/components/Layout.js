import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <nav>Nav</nav>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
