import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";


const Header = () => {

  const data = useStaticQuery(graphql`
    query {
      wehoEastImage: file(relativePath: {eq: "wehoeastside-logo.png"}) {
        childImageSharp {
          fluid(maxWidth:1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <header className="sticky top-0 bg-white shadow z-50">
      <div className="">
        <div className="lg:flex lg:justify-center">
          <div className="lg:w-3/4">
            <Img fluid={data.wehoEastImage.childImageSharp.fluid} alt="Weho Eastside Neighborhood Watch Group" className="object-center" />
          </div>
        </div>
      </div>
    </header>

  )
}
export default Header;