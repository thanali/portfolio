import styled from "styled-components"

import colors from "../../style/colors"
import queries from "../../style/queries"

import Project from "../Project"
import events1 from "/assets/images/77events/77events_capture01.webp"
import events2 from "/assets/images/77events/77events_capture02.webp"
import events3 from "/assets/images/77events/77events_capture03.webp"
import carducci1 from "/assets/images/nina_carducci/NCarducci_capture01.webp"
import carducci2 from "/assets/images/nina_carducci/NCarducci_capture02.webp"
import carducci3 from "/assets/images/nina_carducci/NCarducci_capture03.webp"
import kasa1 from "/assets/images/kasa/kasa_capture01.webp"
import kasa2 from "/assets/images/kasa/kasa_capture02.webp"
import kasa3 from "/assets/images/kasa/kasa_capture03.webp"
import argentBank1 from "/assets/images/argentBank/argentBank_capture01.webp"
import argentBank2 from "/assets/images/argentBank/argentBank_capture02.webp"
import argentBank3 from "/assets/images/argentBank/argentBank_capture03.webp"
import vformation01 from "../../assets/images/vincent_formation/VF_capture01.webp"
import vformation02 from "../../assets/images/vincent_formation/VF_capture02.webp"
import vformation03 from "../../assets/images/vincent_formation/VF_capture03.webp"

const ShowcaseSection = styled.section`
  background: ${colors.primary};
  position: relative;
  padding: 8vw;

  @media (max-width: ${queries.small}px) {
    padding: 4vw;
  }
`

const ShowcaseTitle = styled.h3`
  color: ${colors.light};
  text-align: right;
  margin: 1rem 0.8rem;
`

function Showcase() {
  return (
    <ShowcaseSection id="showcase">
      <ShowcaseTitle>Showcase</ShowcaseTitle>
      <Project
        buttonSite
        urlSite={"https://www.vincent-formation.fr/"}
        images={[vformation01, vformation02, vformation03]}
        title={"Vincent Formation"}
        description={
          "Developed with React and TypeScript, this site showcases a management consultant's expertise, offering professional training and advisory services."
        }
        tools={["sass", "react", "typescript", "seo"]}
      />
      <Project
        buttonCode
        urlCode={"https://github.com/thanali/argentBank"}
        images={[argentBank1, argentBank2, argentBank3]}
        title={"ArgentBank"}
        description={
          "The first phase included user authentication and a user-friendly dashboard development, while the second phase focused on transaction management."
        }
        tools={["sass", "react", "redux", "swagger"]}
      />
      <Project
        buttonCode
        urlCode={"https://github.com/thanali/77Events"}
        images={[events1, events2, events3]}
        title={"77events"}
        description={
          "Debugged the event agency website, addressing remaining issues and bugs to ensure it operated smoothly according to the agency's requirements."
        }
        tools={["html", "sass", "react", "jest"]}
      />
      <Project
        buttonCode
        urlCode={"https://github.com/thanali/nina-carducci"}
        buttonSite
        urlSite={"https://thanali.github.io/nina-carducci/"}
        images={[carducci1, carducci2, carducci3]}
        title={"Nina Carducci"}
        description={
          "Provided SEO optimization services for a photographer, aiming to improve her website's search engine ranking and overall performance."
        }
        tools={["html", "css", "javascript", "seo"]}
      />
      <Project
        buttonCode
        urlCode={"https://github.com/thanali/kasa"}
        buttonSite
        urlSite={"https://thanali.github.io/kasa"}
        images={[kasa1, kasa2, kasa3]}
        title={"Kasa"}
        description={
          "Redesigned the website, transitioning to a full JavaScript stack with Node.js and React, while implementing wireframe-based design."
        }
        tools={["html", "sass", "javascript", "react"]}
      />
    </ShowcaseSection>
  )
}

export default Showcase
