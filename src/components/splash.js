import React from "react"
import styled from "styled-components"
import { Emoji } from "./emoji"
import { SingleColumnMain as Main, H1 as BaseH1 } from "./base"


const P = styled.p`
  color: var(--fontPrimary);
  margin-bottom: 0.25rem;
  --mono: "MONO" 0;
  --casl: "CASL" 0;
  --wght: "wght" 400;
  --slnt: "slnt" 0;
  --CRSV: "CRSV" 0.5;
`

const Ital = styled.span`
  --slnt: "slnt" -15;
  --casl: "CASL" 1;
  --wght: "wght" 200;
  letter-spacing: 0.05em;
`

const H1 = styled(BaseH1)`
  margin-bottom: 0.5rem;
`

const BioSection = styled.div`
  margin: 2rem 0;
`

function Splash() {
  return (
    <>
      <Main>
        <article>
          <BioSection>
            <Ital>It's update time!</Ital>
            <H1>
              June 2020 - November 2020 <Emoji symbol="🗓" label="calendar" />
            </H1>
          </BioSection>
          <P>
            This is a record of the activities undertaken as part 
            of my role as the RBC Chair in Cardiovascular Nursing Research
            at the Peter Munk Cardiac Centre.
          </P>
        </article>
      </Main>
    </>
  )
}

export default Splash
