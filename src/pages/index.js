import React from "react"

import Layout from "../components/layout"
import Splash from "../components/splash"
import SEO from "../components/seo"

export default function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Aaron Conway | Nurse Researcher"
        description="RBC Chair in Cardiovascular nursing research | Procedural sedation researcher"
      />
      <Splash />
    </Layout>
  )
}
