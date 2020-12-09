import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';
import LogoImg from  "../../images/wehoeastside-logo-650.svg";

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
     <div className="">
      <div className="container flex justify-center mx-auto">
        <div className="w-max">
            <img src={LogoImg} alt="WEHO Eastside Neighborhood Watch Logo" />
        </div>
        
      </div>

    </div>
  </header>
);

export default Header;
