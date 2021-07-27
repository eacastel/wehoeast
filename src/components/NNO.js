import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const NNO = () => {
  const data = useStaticQuery(graphql`
    query {
      nnoImage: file(relativePath: { eq: "national-night-out-fiesta.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mariachi: file(relativePath: { eq: "mariachi-arcoiris-de-los-angeles.jpg" }) {
        childImageSharp {
          fixed(width: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      akt: file(relativePath: { eq: "akt-weho.png" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      astro: file(relativePath: { eq: "astro-burger.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      block: file(relativePath: { eq: "block-party.jpg" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      breakfast: file(relativePath: { eq: "breakfast-republic.jpg" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      dog: file(relativePath: { eq: "city-dog-club.png" }) {
        childImageSharp {
          fixed(width: 170) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      francisco: file(relativePath: { eq: "don-francisco.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      ibiza: file(relativePath: { eq: "ibiza-nails.png" }) {
        childImageSharp {
          fixed(width: 130) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      dogs: file(relativePath: { eq: "just-food-for-dogs.png" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      neimanmarcus: file(relativePath: { eq: "neiman-marcus.png" }) {
        childImageSharp {
          fixed(width: 160) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      pleasure: file(relativePath: { eq: "pleasure-chest.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      ritmo: file(relativePath: { eq: "ritmo-mundo.png" }) {
        childImageSharp {
          fixed(width: 175) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      taschen: file(relativePath: { eq: "taschen.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      trader: file(relativePath: { eq: "trader-joes.png" }) {
        childImageSharp {
          fixed(width: 185) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      aura: file(relativePath: { eq: "aura-weho.png" }) {
        childImageSharp {
          fixed(width: 225) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      calma: file(relativePath: { eq: "calma.png" }) {
        childImageSharp {
          fixed(width: 240) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      fantom: file(relativePath: { eq: "fantom-flower.png" }) {
        childImageSharp {
          fixed(width: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      ground: file(relativePath: { eq: "ground-up.png" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      nela: file(relativePath: { eq: "nela-development.png" }) {
        childImageSharp {
          fixed(width: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <section className=" justify-center">
      <div className="pt-4 mx-auto lg:w-1/3 md:w-1/2 w-2/3 items-center">
        <Img
          fluid={data.nnoImage.childImageSharp.fluid}
          alt="National Night Out Logo - Presented by Weho East!"
          className="object-center"
        />
      </div>
      <div className="px-8">
        <div className="container mx-auto text-center lg:w-3/4">
          <p className="py-6 mx-auto text-3xl font-bold text-tdblue leading-none">
            Fiesta Weho East National Night Out
          </p>
          <p className="text-xl">
            <span className="font-bold text-tmagenta">Event Date:</span> Tuesday, August 3, 2021
            <br />
            <span className="font-bold text-tmagenta">Time:</span> 6:00 pm to 9:00 pm
            <br />
            <span className="font-bold text-tmagenta">Location:</span> North Poinsettia Drive <br />
            (North of Santa Monica and South of Fountain)
          </p>

          <h2 className="pt-6 leading-normal mx-auto w-3/4 text-xl lg:text-2xl font-medium text-tdblue">
            Join your Weho East Neighborhood Watch Group as we celebrate National Night Out!
          </h2>
          <p className="text-xl mx-auto w-3/4 mb-8 mt-6">
            This year we will be celebrating in true fiesta style, with food, fun, and our raffle
            giveaways, and a very special musical performance by Mariachi Arcoiris de Los Angeles.
          </p>
          <Img
            fixed={data.mariachi.childImageSharp.fixed}
            alt="Mariachi Arcoiris de Los Angeles"
            className="object-center mb-6"
          />

          <div className="mb-8 ">
            For information regarding COVID-19 please{' '}
            <Link to="https://www.weho.org/city-government/emergency-information">click here</Link>.
          </div>

          <div className=" border-tmagenta border-2 rounded-lg mx-auto w-full flex flex-wrap justify-center m-6 pb-6">
            <p className="text-2xl text-tmagenta mx-auto font-bold w-full mb-8 ">EVENT SPONSORS:</p>
            <div className="m-4 self-center">
              <Img
                fixed={data.aura.childImageSharp.fixed}
                alt="Sponsor AURA West Hollywood"
                className="object-center"
              />
            </div>
            <div className="m-4 self-center">
              <Img fixed={data.calma.childImageSharp.fixed} alt="Calma" className="object-center" />
            </div>
            <div className="m-4 self-center">
              <Img
                fixed={data.fantom.childImageSharp.fixed}
                alt="Fantom Flower"
                className="object-center"
              />
            </div>
            <div className="m-4 self-center">
              <Img
                fixed={data.ground.childImageSharp.fixed}
                alt="Ground Up Development"
                className="object-center"
              />
            </div>
            <div className="m-4 self-center">
              <Img
                fixed={data.nela.childImageSharp.fixed}
                alt="Nela Development"
                className="object-center"
              />
            </div>
          </div>

          <div className="  border-tmagenta border-2 rounded-lg  mx-auto w-full flex flex-wrap justify-center mt-20">
            <p className="text-2xl mx-auto text-tmagenta font-bold w-full mb-8 ">
              RAFFLE SPONSORS:
            </p>
            <div className="m-4 self-center">
              <Img
                fixed={data.akt.childImageSharp.fixed}
                alt="Sponsor AKT Logo"
                className="object-center"
              />
            </div>
            <div className="m-4 self-center">
              <Img
                fixed={data.astro.childImageSharp.fixed}
                alt="Astro Burger Sponsor Logo"
                className="object-center"
              />
            </div>
            <div className="m-4 self-center">
              <Img
                fixed={data.block.childImageSharp.fixed}
                alt="Block Party"
                className="object-center"
              />
            </div>
            <div className="m-4 self-center">
              <Img
                fixed={data.breakfast.childImageSharp.fixed}
                alt="Breakfast Republic"
                className="object-center"
              />
            </div>
            <div className="m-4 self-center">
              <Img
                fixed={data.dog.childImageSharp.fixed}
                alt="City Dog"
                className="object-center"
              />
            </div>
            <div className="m-4 self-center">
              <Img
                fixed={data.francisco.childImageSharp.fixed}
                alt="Francisco Coffee"
                className="object-center"
              />
            </div>
            <div className="m-4 self-center">
              <Img
                fixed={data.ibiza.childImageSharp.fixed}
                alt="Ibiza Nails"
                className="object-center"
              />
            </div>
            <div className="m-4 self-center">
              <Img
                fixed={data.dogs.childImageSharp.fixed}
                alt="Food For Dogs"
                className="object-center"
              />
            </div>
            <div className="m-4 self-center">
              <Img
                fixed={data.neimanmarcus.childImageSharp.fixed}
                alt="Neiman Marcus"
                className="object-center"
              />
            </div>
            <div className="m-4 self-center">
              <Img fixed={data.pleasure.childImageSharp.fixed} alt="9" className="object-center" />
            </div>
            <div className="m-4 self-center">
              <Img
                fixed={data.ritmo.childImageSharp.fixed}
                alt="Ritmo Mundo"
                className="object-center"
              />
            </div>
            <div className="m-4 self-center">
              <Img
                fixed={data.taschen.childImageSharp.fixed}
                alt="Taschen"
                className="object-center"
              />
            </div>
            <div className="m-4 self-center">
              <Img
                fixed={data.trader.childImageSharp.fixed}
                alt="Trader Joes"
                className="object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NNO;
