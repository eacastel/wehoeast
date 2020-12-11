import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import SvgCharts from '../svg/SvgCharts';
import FeatureOne from '../components/FeatureOne'
export default () => (
  <Layout>
    <FeatureOne />
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Benefits and Useful Information</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Connections</p>
              <p className="mt-4">
                Upon joining you will receive a rooster of Neighborhood Watch Captains, City Officials, and Police and Fire representatives along with other important information.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Useful Tips</p>
              <p className="mt-4">
              You will also get useful tips for trash removal, reporting suspicious activity in your area, safety tips and timely information about city guidelines and updates.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Events and Parties!</p>
              <p className="mt-4">
              Get invited to attend our Neighborhood Watch Meetings, Grand Openings for new businesses in the area, and special parties such as our yearly Block Party!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <section className="container pl-6 pr-6 mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Let's work together and transform the Eastside into amazing and safe place to live!</h3>
      <p className="mt-8 text-xl font-light">
        It all starts by signing up to our list below. Keep abreast of important meetings and services, get in touch with your neighborhood watch captains, your city officials, police and fire representatives!
      </p>
      <p className="mt-8">
      <form action="#" method="POST">
            <div className="flex justify-center mt-8">
              <input type="text" name="email_address" id="email_address" autocomplete="email" className="border-grey-400 border-2 rounded-lg p-4 mt-1 block w-3/5 shadow-sm ">
              </input>
            </div>
          </form> 
          <p className="mt-6 ">
            <Button size="lg">Join Today!</Button>
          </p>
      </p>
    </section>
  </Layout>
);


