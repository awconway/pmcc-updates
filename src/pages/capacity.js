import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Table from "../components/table"
import { SingleColumnMain as Main, H1, H2 } from "../components/base"


const capacityQI = [
  {
    title: "Bone Marrow Biopsy and Aspiration NP-led Procedural Sedation Clinic",
    role: "QI Project with PMH",
    date: "Planning stages"
  },
  {
    title: "Capnography for TEE in CICU",
    role: "Mentor for CAP fellowship application",
    date: "Submitted application"
  },
]

const capacityPhd = [
  {
    role: "Navpreet Kamboj",
    title: "Predicting hemodynamic responses to nitroglycerin infusion titrations",
    date: "Year 2",
  },
  {
    title: "Barriers to integrating predictions from machine learning models into nursing practice",
    role: "Mohammad Godarzi",
    date: "Applying in 2021",
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
