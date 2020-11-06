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

function Ssa() {
  return (
    <>
      <Main>
        <article>
          <BioSection>
            <P>
              Want to see the full <StyledA
              href="https://sedationstate-protocol.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >protocol</StyledA>?
            </P>
            <H1>
              Automating sedation state assessments
            </H1>
          </BioSection>
          <P>
          Procedural sedation is used to to attenuate the pain and distress that may otherwise be experienced during diagnostic and interventional medical procedures. The ‘ideal’ state is when the patient is pain and anxiety free, not moving and with normal vital signs. This program of research will focus on automatic classification of sedation states based on a combination of video, audio and physiological monitoring inputs. Automating sedation state assessments has multiple potential applications. For example, it could be used to assist providers to determine how often the ‘ideal’ sedation state is achieved when different sedation techniques are utilized. Predictive models could also be developed to determine the probability of an impending sedation state transition, potentially allowing for clinicians to titrate sedation doses and optimize time spent in the ‘ideal’ sedation state. It could also provide an improved remote monitoring experience for anesthetists who are charged with supervising the provision of sedation by other providers, such as nurses and anesthesia assistants.
          </P>
          <P>
              <ul>
                  <li>Linked with Dr Babak Taati from TRI, who has experience with classifying pain from facial expression in videos, to collaborate on this project.
                  </li>
                  <li>Submitted REB approval</li>
                  <li>Will looking to submit funding applications in early 2021 if we can get some pilot data</li>
              </ul>
          </P>
            
        </article>
      </Main>
    </>
  )
}

export default Ssa