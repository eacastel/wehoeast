import React from 'react';
import Footer from './Footer';
import Header from './Header';
import SEO from '../SEO';

const Layout = ({ children }) => {
  return (
    <div className="">
      <SEO
        title="West Hollywood Eastside Neighborhood Watch Group"
        description="West Hollywood Eastside Neighborhood Watch Group works to make East West Hollywood safer by working together with the City of West Hollywood and the West Hollywood Sherif's Department to reduce crime and improve the quality of life of our neighborhood."
        image="src/images/wehoeastside-logo-compact.png"
      />
      <Header />
      <main className="text-gray-900">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
