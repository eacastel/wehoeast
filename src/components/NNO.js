import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const NNO = () => {
  const data = useStaticQuery(graphql`
    query {
      nnoImage: file(relativePath: { eq: "national-night-out-fiesta.png" }) {
        childImageSharp {
          fixed(width: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <section className="justify-center">
      <div className="flex flex-wrap p-4 m-4 mb-0 mx-auto w-2/3 items-center border-tdblue border-solid border">
        <div className="md:flex-1 mx-auto text-center"><Img
          fixed={data.nnoImage.childImageSharp.fixed}
          alt="National Night Out Logo - Presented by Weho East!"
          className=" "
        /></div>
        <div className="md:flex-1 mx-auto text-center">
          <h2 className="leading-normal mx-auto w-3/4 text-xl lg:text-2xl font-medium text-tdblue">
Thank you for coming out and celebrating National Night Out with us!          </h2>
        </div>
      </div>
    </section>
  );
};
export default NNO;
