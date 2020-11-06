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

function Apnea() {
  return (
    <>
      <Main>
        <article>
          <BioSection>
            <P>
              Want to see the full <StyledA
              href="https://apnea-prediction-protocol.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >protocol</StyledA>?
            </P>
            <H1>
              Machine learning for apnea prediction
            </H1>
          </BioSection>
          <P>
          How nurses detect and respond to sedation-induced respiratory depression during medical procedures can make the difference between a good or disastrous patient outcome. We propose that the current approach to capnography monitor alarm management may be improved upon by using machine learning to create a ‘smart alarm’ that can alert clinicians only if an apneic event is predicted to be prolonged. Based on results from our preliminary work, it seems that using information about the history of previous respiratory states may be a promising solution in regards to predicting durations of apneic periods. We now plan to build on these preliminary findings about the associations between apneic events and the history of previous respiratory states by building a predictive model from a large sample of capnography waveforms. Longer term plans for this program of research are to prospectively evaluate the accuracy of the model developed in the current study, develop a Graphical User Interface that is best suited to operationalise the predictive model as a ‘smart alarm’ in the clinical setting and, ultimately, conduct a randomized controlled trial to test the clinical safety and utility of the ‘smart alarm’.
          </P>
          <P>Progress to date:</P>
          <P>
              <ul>
                  <li>REB approved</li>
                  <li>Waiting on DREAM team to make 10-second data available.</li>
                  <li>Arranged with Medtronic to undertake a similar analysis using data from patients who were monitored with capnography while receiving opioids (waiting to hear back about process for data agreement).</li>
              </ul>
          </P>
            
        </article>
      </Main>
    </>
  )
}

export default Apnea