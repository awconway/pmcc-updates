import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Table from "../components/table"
import { SingleColumnMain as Main, H1 } from "../components/base"


const writing = [
  {
    title: "High flow nasal oxygen for sedation",
    subhead: "European Journal of Anaesthesiology",
    role: "First Author",
    date: "Under review",
  },
  {
    title: "Midazolam for sedation before procedures: A systematic review update",
    subhead: "Systematic reviews",
    role: "First Author",
    date: "Under review",
  },
  {
    title: "Accuracy of continuous non-invasive arterial pressure monitors: A systematic review & meta-analysis",
    subhead: "Australian Critical Care",
    role: "PhD Supervisor",
    date: "Under review",
  },
  {
    title: "Effectiveness of nurse-led clinics in the early discharge period after percutaneous coronary intervention: a systematic review",
    subhead: "Australian Critical Care",
    role: "Co-Author",
    date: "accepted 🎉",
  },
  {
    title: "Validating the perioperative thirst discomfort scale",
    subhead: "Journal of Radiology Nursing",
    role: "First Author",
    date: "accepted 🎉",
  },
  {
    title: "Development and validation of the nursing confidence in managing sedation complications scale",
    subhead: "Nursing Open",
    role: "First Author",
    date: "accepted 🎉",
  },
  {
    title: "Accuracy of the PHQ-2 Alone and in Combination With the PHQ-9 for Screening to Detect Major Depression: Systematic Review and Meta-analysis",
    subhead: "JAMA",
    role: "Group Author",
    date: "2020",
  },
  {
    title: "Probability of Major Depression Classification Based on the SCID, CIDI, and MINI Diagnostic Interviews: A Synthesis of Three Individual Participant Data Meta-Analyses",
    subhead: "Psychotherapy and Psychosomatics",
    role: "Group Author",
    date: "2020",
  },

]

const Writing = () => {
  return (
    <Layout>
      <SEO
        title="Publications // Aaron Conway // Nurse Researcher"
        description="Things I write down"
      />
      <Main>
        <H1>Publications</H1>
        <Table data={writing} />
      </Main>
    </Layout>
  )
}

export default Writing
