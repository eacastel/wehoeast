import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout/Layout';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const NotFound = () => {

    const data = useStaticQuery(graphql`
    query {
      img404: file(relativePath: {eq: "404.png"}) {
        childImageSharp {
          fluid(maxWidth:800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
        <div className="justify-center px-8 mt-20 text-center">
      <h1 className="text-3xl font-medium">404 / Page not found</h1>
      <Link to="/" className="text-lg font-medium text-tmagenta hover:text-tyellow">Head home</Link>
      <Link to="/"><Img fluid={data.img404.childImageSharp.fluid} alt="404 cute image of kitty and husky kissing" className="object-center mx-8" /></Link>

        </div>
    </Layout>
  )
}

export default NotFound
