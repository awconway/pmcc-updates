import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Emoji from "./emoji"
import { H1 } from "./base"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "martin.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const ImageContainer = styled.div`
  max-width: 600px;
`

const Main = styled.main`
  display: flex;
  flex-flow: column nowrap;
  margin: 1rem 0.5rem;
  color: var(--fontPrimary);

  .padded-bottom {
    margin-bottom: 2rem;
  }
`

const CasualSpan = styled.span`
  --casl: "CASL" 1;
  --slnt: "slnt" 1;
  --wght: "wght" 400;
  color: var(--fontSecondary);
`

const P = styled.p`
  color: var(--fontSecondary);
  font-style: italic;
  margin-bottom: 0.25rem;
`

const CTALink = styled(Link)`
  color: var(--linkPrimary);
  text-decoration: none;
  padding-top: 3px;
  border-style: solid;
  border-width: 0px 0px 2px;
  border-color: transparent;
  letter-spacing: 0.04em;
  line-height: 1.4em;
  text-transform: uppercase;
  transition: border-color 0.2s ease 0s, color 0.2s ease 0s;

  &:hover {
    color: var(--other);
    border-color: var(--fontPrimary);
  }

  &:not(:last-of-type) {
    margin-right: 2rem;
  }
`

const InlineLink = styled.a`
  color: var(--accentPrimary);
  text-decoration: none;
  padding-top: 3px;
  border-style: solid;
  border-width: 0px 0px 2px;
  border-color: transparent;
  line-height: 1.4em;
  transition: border-color 0.2s ease 0s, color 0.2s ease 0s;

  &.accent {
    color: var(--accentSecondary);
  }

  &:hover {
    color: var(--linkPrimary);
    border-color: var(--other);
  }
`

function Splash() {
  const data = useStaticQuery(query)
  return (
    <>
      <Main>
        <ImageContainer>
          <Image fluid={data.fileName.childImageSharp.fluid} />
        </ImageContainer>
        <P>
          Hi, I'm Martin <Emoji symbol="👋" label="waving hand" />
        </P>
        <H1 className="padded-bottom">
          Senior UX Developer <CasualSpan>and proud dog dad</CasualSpan>
        </H1>
        <P>
          Thrilled to be the new guy at{" "}
          <InlineLink
            href="https://ux.shopify.com/"
            target="_blank"
            className="accent"
          >
            Shopify
          </InlineLink>
          .
        </P>
        <P>
          Previously:{" "}
          <InlineLink href="https://consultlowtide.ca" target="_blank">
            Low Tide Consulting{" "}
          </InlineLink>
          ,{" "}
          <InlineLink href="https://www.lighthouselabs.ca/" target="_blank">
            Lighthouse Labs
          </InlineLink>
          , and{" "}
          <InlineLink
            href="https://www.linkedin.com/in/martinlaws/"
            target="_blank"
          >
            others
          </InlineLink>
          .
        </P>
        <P className="padded-bottom">
          Wannabe chef, extremely competitive fantasy{" "}
          <InlineLink
            href="https://www.fantasysurvivorgame.com/"
            target="_blank"
          >
            Survivor
            <Emoji symbol="™" label="Trademark symbol" />
          </InlineLink>{" "}
          player, and all-around <Emoji symbol="💩" label="shit" /> disturber.
        </P>
        <div>
          <CTALink to="/work/">see my work</CTALink>
          <CTALink to="/maya/">show me the dog already</CTALink>
        </div>
      </Main>
    </>
  )
}

export default Splash
