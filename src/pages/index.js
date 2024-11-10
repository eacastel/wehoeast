import React from 'react';
import Card from '../components/Card';
import Layout from '../components/layout/Layout';
import FeatureOne from '../components/FeatureOne';
import MailerLiteForm from '../components/MailerLiteForm';

export default () => (
  <Layout>
    <FeatureOne />
    <section id="features" className="py-16 lg:pb-28 lg:pt-28">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Here is why you should join:</h2>
        <div className="flex flex-col items-stretch lg:flex-row md:mx-3 mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8 ">
              <p className="font-semibold text-xl">Leverage</p>
              <p className="mt-4">
                Upon joining you will receive a roster of Neighborhood Watch Captains, City
                Officials, and Police and Fire representatives along with other important
                information.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Useful Tips</p>
              <p className="mt-4">
                You will also get useful tips for trash removal, reporting suspicious activity in
                your area, safety tips and timely information about city guidelines and updates.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-6">
              <p className="font-semibold text-xl">Events and Parties!</p>
              <p className="mt-4">
                Get invited to attend our Neighborhood Watch Meetings, Grand Openings for new
                businesses in the area, and special parties such as our yearly Block Party!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <section className="container px-6 py-8 mx-auto leading-tight bg-gray-200 rounded-lg text-center">
      <h3 className="text-4xl font-semibold">
        Let's work together and transform the Eastside into an amazing and safe place to live!
      </h3>
      <p className="mt-4 text-xl font-light">
        It all starts by signing up to our list below. Keep abreast of important meetings and
        services, get in touch with your neighborhood watch captains, your city officials, police
        and fire representatives!
      </p>
      <div className="mt-8">
        
      </div>
    </section>
  </Layout>
);
