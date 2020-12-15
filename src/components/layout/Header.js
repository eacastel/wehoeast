import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      wehoEastImage: file(relativePath: { eq: "wehoeastside-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wehoEastImageCompact: file(relativePath: { eq: "wehoeastside-logo-compact.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <header className="md:sticky md:top-0 bg-white shadow-lg z-50 pt-2 pb-4">
      <div className="">
        <div className="lg:flex lg:justify-center">
          <div className="lg:w-3/4">
            <div className=" md:hidden mx-2">
              <Img
                fluid={data.wehoEastImageCompact.childImageSharp.fluid}
                alt="Weho Eastside Neighborhood Watch Group"
                className="object-center"
              />
            </div>
            <div className="hidden md:block">
              <Img
                fluid={data.wehoEastImage.childImageSharp.fluid}
                alt="Weho Eastside Neighborhood Watch Group"
                className="object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </header>

  )
};
export default Header;