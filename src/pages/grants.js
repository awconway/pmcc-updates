import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { SingleColumnMain as Main, H1, H2 } from "../components/base"
import Table from "../components/table"

const grantsSubmitted = [
  {
    title:
      "Automating pre-procedure fasting instructions",
    subhead: "NFRF Exploration 2020",
    role: "Principal Investigator",
    date: "$250,000",
  },
  {
    title:
      "Postoperative high flow nasal cannula versus continuous positive airway pressure for patients with obstructive sleep apnea undergoing cardiac surgery: a pilot study",
    subhead: "PMCC Innovation Fund",
    role: "Co-investigator",
    date: "$174,254 ",
  },
]

const grantsCompleted = [
  {
    title:
      "High flow nasal oxygen for sedation",
    subhead: "Connaught New Researcher Award",
    date: "$20,000",
  },
]

const grantsUnsuccessful = [
  {
  title:
    "Automating pre-procedure fasting instructions",
  subhead: "CIHR Project Grant Spring 2020",
  role: "Principal Investigator",
  date: "~$250,000",
},
]


const Grants = () => {
  return (
    <Layout>
      <SEO
        title="Grants // Aaron Conway // Nurse Researcher"
        description="Grants submitted and received"
      />

      <Main>
        <H1>Funding applications</H1>

        <H2>Submitted</H2>
        <Table data={grantsSubmitted} />
        <H2>Completed</H2>
        <Table data={grantsCompleted} />
        <H2>Unsuccessful</H2>
        <Table data={grantsUnsuccessful} />
      </Main>
    </Layout>
  )
}

export default Grants
