import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";


const Header = () => {

  const data = useStaticQuery(graphql`
    query {
      wehoEastImage: file(relativePath: {eq: "wehoeastside-logo-800.png"}) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <header className="sticky top-0 bg-white shadow">
      <div className="">
        <div className="">
          <div className="w-auto content-center">
            <Img fluid={data.wehoEastImage.childImageSharp.fluid} alt="Weho Eastside Neighborhood Watch Group" className="object-center" />
          </div>
        </div>
      </div>
    </header>

  )
}
export default Header;