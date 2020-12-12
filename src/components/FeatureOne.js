import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import MailChimpFormOne from '../components/layout/MailChimpFormOne';


const FeatureOne = () => {

  const data = useStaticQuery(graphql`
    query {
      mapImage: file(relativePath: {eq: "WehoFootprintImg.jpg"}) {
        childImageSharp {
          fluid(maxWidth:800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Join the WEHO Eastside Neighborhood Watch Group Today!
          </h1>
          <p className="text-xl mb-8 lg:text-2xl mt-6 font-light">
            Connect with your neighborhood Capitans, get important information, and make your voice heard.
          </p>

            <MailChimpFormOne />

          <p className="mt-4 text-gray-600 pb-8" >Enter your email to receive meeting invitations, special event reminders, and other useful information. The image-map shows our current area of influence. Your email will never be shared with 3rd parties. </p>
        </div>
        <div className="lg:w-1/2">
        <Img fluid={data.mapImage.childImageSharp.fluid} alt="Weho Eastside Neighborhood Watch Group" className="object-center z-0 lg:ml-8 rounded-lg" />
        </div>
      </div>
    </section>

  )
}
export default FeatureOne;