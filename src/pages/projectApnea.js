import React from "react"

import Layout from "../components/layout"
import Apnea from "../components/apnea"
import SEO from "../components/seo"

const ApneaPage = () => {
  return (
    <Layout>
      <SEO
        title="Aaron Conway | Nurse Researcher"
        description="RBC Chair in Cardiovascular nursing research | Procedural sedation researcher"
      />
      <Apnea />
    </Layout>
  )
}

export default ApneaPage
