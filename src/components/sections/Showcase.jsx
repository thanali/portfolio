/* eslint-disable react/prop-types */
import styled from "styled-components"

import colors from "../../style/colors"
import queries from "../../style/queries"

import Project from "../Project"
import booki1 from "../../assets/images/booki/booki_capture01.webp"
import booki2 from "../../assets/images/booki/booki_capture02.webp"
import booki3 from "../../assets/images/booki/booki_capture03.webp"
import events1 from "../../assets/images/77events/77events_capture01.webp"
import events2 from "../../assets/images/77events/77events_capture02.webp"
import events3 from "../../assets/images/77events/77events_capture03.webp"
import carducci1 from "../../assets/images/nina_carducci/NCarducci_capture01.webp"
import carducci2 from "../../assets/images/nina_carducci/NCarducci_capture02.webp"
import carducci3 from "../../assets/images/nina_carducci/NCarducci_capture03.webp"
import OMF1 from "../../assets/images/ohmyfood/ohmyfood_capture01.webp"
import OMF2 from "../../assets/images/ohmyfood/ohmyfood_capture02.webp"
import OMF3 from "../../assets/images/ohmyfood/ohmyfood_capture03.webp"
import bluel1 from "../../assets/images/sophie_bluel/SBluel_capture01.webp"
import bluel2 from "../../assets/images/sophie_bluel/SBluel_capture02.webp"
import bluel3 from "../../assets/images/sophie_bluel/SBluel_capture03.webp"
import kasa1 from "../../assets/images/kasa/kasa_capture01.webp"
import kasa2 from "../../assets/images/kasa/kasa_capture02.webp"
import kasa3 from "../../assets/images/kasa/kasa_capture03.webp"
import argentBank1 from "../../assets/images/argentBank/argentBank_capture01.webp"
import argentBank2 from "../../assets/images/argentBank/argentBank_capture02.webp"
import argentBank3 from "../../assets/images/argentBank/argentBank_capture03.webp"

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
        url={"https://github.com/thanali/OCP3"}
        images={[booki1, booki2, booki3]}
        title={"Booki"}
        description={"Travel agency homepage"}
        tools={["html", "css"]}
        buttonSite
        urlSite={"https://thanali.github.io/OCP3/"}
      />
      <Project
        url={"https://github.com/thanali/OCP4"}
        images={[OMF1, OMF2, OMF3]}
        title={"OhMyFood"}
        description={`Mobile first app with CSS animations`}
        tools={["html", "sass"]}
        buttonSite
        urlSite={"https://thanali.github.io/OCP4/"}
      />
      <Project
        url={"https://github.com/thanali/OCP6"}
        images={[bluel1, bluel2, bluel3]}
        title={"Sophie Bluel"}
        description={`Dynamic web page with JS`}
        tools={["sass", "javascript"]}
      />
      <Project
        url={"https://github.com/thanali/OCP8"}
        images={[kasa1, kasa2, kasa3]}
        title={"Kasa"}
        description={"Real estate rental app with React"}
        tools={["sass", "react"]}
      />
      <Project
        url={"https://github.com/thanali/OCP9"}
        images={[carducci1, carducci2, carducci3]}
        title={"Nina Carducci"}
        description={"SEO optimization"}
        tools={["css", "javascript"]}
        buttonSite
        urlSite={"https://thanali.github.io/OCP9/"}
      />
      <Project
        url={"https://github.com/thanali/OCP10"}
        images={[events1, events2, events3]}
        title={"77events"}
        description={"Debugging"}
        tools={["sass", "react"]}
      />
      <Project
        url={"https://github.com/thanali/OCP11"}
        images={[argentBank1, argentBank2, argentBank3]}
        title={"ArgentBank"}
        description={"Banking app with React and Redux"}
        tools={["sass", "react", "redux", "swagger"]}
      />
    </ShowcaseSection>
  )
}

export default Showcase
