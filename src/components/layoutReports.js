import React from "react"
import { MDXProvider } from "@mdx-js/react"
import styled from "styled-components"

import Layout from "./layout"
import SEO from "./seo"

import TopSection from "./topSection"

import { SingleColumnMain as Main, H1 as BaseH1, StyledA } from "./base"

const P = styled.p`
  color: var(--fontPrimary);
  margin-bottom: 1.5rem;
  --mono: "MONO" 0;
  --casl: "CASL" 0;
  --wght: "wght" 400;
  --slnt: "slnt" 0;
  --CRSV: "CRSV" 0.5;
`

const Li = styled.li`
  color: var(--fontPrimary);
  --mono: "MONO" 0;
  --casl: "CASL" 0;
  --wght: "wght" 400;
  --slnt: "slnt" 0;
  --CRSV: "CRSV" 0.5;
`

const H1 = styled(BaseH1)`
  margin-bottom: 0.5rem;
`

const components = {
  h1: H1,
  a: StyledA,
  p: P,
  li: Li,
  TopSection,
}

export default function LayoutPage({ children, props }) {
  return (
    <MDXProvider components={components}>
      <Layout>
        <SEO
          title="Aaron Conway | Nurse Researcher"
          description="RBC Chair in Cardiovascular nursing research | Procedural sedation researcher"
        />
        <Main {...props}>
          <article>{children}</article>
        </Main>
      </Layout>
    </MDXProvider>
  )
}
