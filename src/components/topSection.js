import React from "react"
import styled from "styled-components"

const TopSection = styled.div`
  margin: 2rem 0;

  p {
    margin-bottom: 0.25rem;
  }
`
export default function topSection({ children }) {
  return <TopSection>{children}</TopSection>
}
