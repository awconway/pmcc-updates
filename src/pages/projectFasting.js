import React from "react"

import Layout from "../components/layout"
import Fasting from "../components/fasting"
import SEO from "../components/seo"

const FastingPage = () => {
  return (
    <Layout>
      <SEO
        title="Aaron Conway | Nurse Researcher"
        description="RBC Chair in Cardiovascular nursing research | Procedural sedation researcher"
      />
      <Fasting />
    </Layout>
  )
}

export default FastingPage
