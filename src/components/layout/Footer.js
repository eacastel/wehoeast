import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-20 px-3 mt-28 mb-8 text-gray-800">
    <div className="flex mx-3 text-center">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">About Us</h2>
        <p className="mt-5">
          We are a group of neighbors like you who want to make the eastside of West Hollywood as
          nice or nicer than the westside of West Hollywood! Join us.
        </p>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Important Links</h2>
        <ul className="mt-4 leading-loose">
          <li className="pb-3">
            <a href="https://www.weho.org/">City of West Hollywood</a>
          </li>
          <li className="pb-3">
            <a href="https://athensservices.com/order-special-services/request-services/">Bulky Item Pick-Up (Athens Trash Removal)</a>
          </li>
          <li className="pb-3">
            <a href="https://www.weho.org/city-government/city-departments/facilities-and-recreation-services/facilities-and-field-services/graffiti-removal">
              Graffiti Removal
            </a>
          </li>
          <li>
            <a href="https://wehosheriff.com/#contact">West Hollywood Sheriff Department</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Social Media</h2>
        <ul className="mt-4 leading-loose">
          <li className="pb-3">
            <a href="https://facebook.com">Facebook</a>
          </li>
          <li className="pb-3">
            <a href="https://twitter.com">Twitter</a>
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
