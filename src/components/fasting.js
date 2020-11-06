import React from "react"
import styled from "styled-components"
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

const H1 = styled(BaseH1)`
  margin-bottom: 0.5rem;
`

const BioSection = styled.div`
  margin: 2rem 0;

  p {
    margin-bottom: 0.25rem;
  }
`

function Fasting() {
  return (
    <>
      <Main>
        <article>
          <BioSection>
            <P>
              Want to see the full <StyledA
              href="https://auto-fasting.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >protocol</StyledA>?
            </P>
            <H1>
              Automating pre-procedure fasting instructions
            </H1>
          </BioSection>
          <P>
          This program of research will involve: 1) predictive modeling of procedure start times using a large retrospective database of cardiac cath lab procedure scheduling information; and 2) user-centered design principles to create an alert system optimally suited to patient and clinician requirements for the delivery of automated pre-procedural fasting instructions.
          </P>
          <P>Progress to date:</P>
          <P>
              <ul>
                  <li>Worked out a process with the Enterprise Data Warehouse to automatically send 'snapshots' of PHS scheduling information for cath labs so that we can build up a database of scheduling data to use in our predictive model.
                  </li>
                  <li>Submitted NFRF grant application - new linkage with Professor Chris Beck (Department of Engineering at UofT)</li>
                  <li>REB application submitted for a study to develop user-facing components (i.e. the alerts that patients receive), which will ensure the alert system is optimally suited to patient and healthcare team requirements for providing the automated pre-procedure fasting instructions.</li>
              </ul>
          </P>
            
        </article>
      </Main>
    </>
  )
}

export default Fasting