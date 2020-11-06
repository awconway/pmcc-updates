import React from "react"

import Layout from "../components/layout"
import Ssa from "../components/ssa"
import SEO from "../components/seo"

const SsaPage = () => {
  return (
    <Layout>
      <SEO
        title="Aaron Conway | Nurse Researcher"
        description="RBC Chair in Cardiovascular nursing research | Procedural sedation researcher"
      />
      <Ssa />
    </Layout>
  )
}

export default SsaPage
