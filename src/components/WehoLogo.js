import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";


const WehoLogo = () => {
    const data = useStaticQuery(graphql`
        query {
            wehoEastImage: file(relativePath: {eq: "wehoeastside-logo-650.png"}) {
                childImageSharp {
                    fluid(maxWidth: 650) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return <Img fluid={data.wehoEastImage.childImageSharp.fluid} alt="WEHO Eastside Neighborhood Watch Logo" />
}

export default WehoLogo

