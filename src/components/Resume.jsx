import styled from "styled-components"
import colors from "../style/colors"

import pdfFr from "@pdffr"
import pdfEng from "@pdfeng"

const ResumeContainer = styled.div`
  width: 100%;
  background: ${colors.light};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 2rem 4vw;
  margin-top: 2rem;
  font-weight: 700;

  p {
    text-align: center;
    font-size: 1.2rem;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 5vw;
  justify-content: center;
`

const Button = styled.a`
  border: none;
  background: ${colors.secondary};
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  text-align: center;
  box-shadow: -6px 5px ${colors.primary};
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  color: ${colors.light};
  transition: 300ms;

  &:hover {
    background: ${colors.primary};
    box-shadow: -6px 5px ${colors.secondary};
    color: ${colors.light};
  }
`

function Resume() {
  return (
    <ResumeContainer>
      <p>If you want more informations, here my resume :</p>

      <ButtonContainer>
        <Button href={pdfFr} target="_blank" rel="noopener noreferrer">
          Français
        </Button>
        <Button href={pdfEng} target="_blank" rel="noopener noreferrer">
          English
        </Button>
      </ButtonContainer>
    </ResumeContainer>
  )
}

export default Resume
