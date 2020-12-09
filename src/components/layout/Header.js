import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";


const Header = () => {

  const data = useStaticQuery(graphql`
    query {
      wehoEastImage: file(relativePath: {eq: "wehoeastside-logo-800.png"}) {
        childImageSharp {
          fixed(width: 600) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <header className="sticky top-0 bg-white shadow">
      <div className="">
        <div className="">
          <div className="w-max  mx-auto content-middle">
            <Img fixed={data.wehoEastImage.childImageSharp.fixed} alt="Weho Eastside Neighborhood Watch Group" className="object-center" />
          </div>
        </div>
      </div>
    </header>

  )
}
export default Header;