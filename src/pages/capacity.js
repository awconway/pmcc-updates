import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Table from "../components/table"
import { SingleColumnMain as Main, H1, H2 } from "../components/base"


const capacityQI = [
  {
    title: "Bone Marrow Biopsy and Aspiration NP-led Procedural Sedation Clinic",
    subhead: "QI Project with PMH",
  },
  {
    title: "Capnography for TEE in CICU",
    subhead: "Mentor for CAP fellowship application",
  },
]

const capacityPhd = [
  {
    title: "Navpreet Kamboj",
    subhead: "Year 2",
  },
  {
    title: "Mohammad Godarzi",
    subhead: "Applying in 2021",
  },
]

const Capacity = () => {
  return (
    <Layout>
      <SEO
        title="Research capacity building // Aaron Conway // Nurse Researcher"
        description="Research capacity building"
      />
      <Main>
        <H1>Research capacity building</H1>
        <H2>Quality improvement projects</H2>
        <Table data={capacityQI} />
        <H2>Research student supervision</H2>
        <Table data={capacityPhd} />
      </Main>
    </Layout>
  )
}

export default Capacity
