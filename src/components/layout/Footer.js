import React from 'react';
import { Link } from 'gatsby';

const Footer = () => (
  <footer className="container mx-auto py-20 px-3 mt-28 mb-8 text-gray-800">
    <div className="flex mx-3 text-left">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">About Us</h2>
        <p className="mt-5 ml-2">
          We are a group of neighbors like you who want to make the eastside of West Hollywood as
          nice or nicer than the westside of West Hollywood! Join us.
        </p>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Useful Links</h2>
        <ul className="mt-4 ml-2">
          <li className="pb-3">
            <Link to="https://www.weho.org/">City of West Hollywood</Link>
          </li>
          <li className="pb-3">
            <Link to="https://www.weho.org/services/public-safety/sheriff-fire-security-ambassadors/security-ambassadors">
              Block by Block Security Ambassadors
            </Link>
          </li>
          <li className="pb-3">
            <Link to="https://www.weho.org/services/services/service-requests">
              Service Requests | City of West Hollywood
            </Link>
          </li>
          <li className="pb-3">
            <Link to="https://athensservices.com/order-special-services/request-services/">
              Bulky Item Pick-Up (Athens Trash Removal)
            </Link>
          </li>
          <li className="pb-3">
            <Link to="https://www.weho.org/city-government/city-departments/facilities-and-recreation-services/facilities-and-field-services/graffiti-removal">
              Graffiti Removal
            </Link>
          </li>
          <li>
            <Link to="https://wehosheriff.com/#contact">West Hollywood Sheriff Department</Link>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Contact Us</h2>
        <ul className="mt-4 leading-loose ml-2">
          <li className="pb-3">
            <Link to="https://www.facebook.com/groups/wehoeast/">Facebook</Link>
          </li>
          <li className="pb-3">
            <a href="mailto:info@wehoeast.org">Email</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
