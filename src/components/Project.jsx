import { useEffect, useState } from "react"
import PropTypes from "prop-types"
import styled, { keyframes } from "styled-components"

import colors from "../style/colors"
import queries from "../style/queries"

const Show = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 15rem;
  border-top: 3px solid ${colors.light};

  @media (max-width: ${queries.smallProject}px) {
    height: 21rem;
  }
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: ${queries.medium}px) {
    flex-direction: column;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 2vw;
  width: 80%;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  color: ${colors.dark};

  @media (max-width: ${queries.medium}px) {
    display: block;
    text-align: end;
    width: 100%;
    padding: 0;
  }

  p {
    margin-top: 0.5rem;
    max-width: 55%;

    @media (max-width: ${queries.medium}px) {
      max-width: 100%;
    }
  }
`

const ProjectTitle = styled.h4`
  text-align: end;
  font-size: 3.5rem;
  font-weight: 100;
  letter-spacing: -2px;
  line-height: 3rem;
`

const Tools = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  gap: 0.7rem;
  flex-wrap: wrap;
  text-align: center;

  @media (max-width: ${queries.medium}px) {
    margin-top: 1rem;
    width: 100%;
  }

  span {
    color: ${colors.light};
    background: ${colors.secondary};
    flex: 1;
    padding: 0.3rem 0.6rem;
    border-radius: 10px;
    text-transform: uppercase;
    font-size: 0.9rem;
    font-weight: 600;
  }
`

const ContentHovered = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  white-space: nowrap;
`

const Image = styled.img`
  position: absolute;
  top: -4vw;
  object-fit: cover;
  z-index: 2;
  width: 35vw;
  margin-left: 8vw;
  transform: rotate(-4deg);
  pointer-events: none;

  @media (max-width: ${queries.medium}px) {
    top: 0vw;
    width: 45vw;
    margin-left: 5vw;
  }

  @media (max-width: ${queries.smallProject}px) {
    display: none;
  }
`

const Scroll = keyframes`
100% {transform: translateX(-50%)}
`

const TextHovered = styled.p`
  width: fit-content;
  font-size: 8rem;
  opacity: 0.5;
  color: ${colors.light};
  font-weight: 100;
  animation: ${Scroll} 10s linear infinite;

  @media (max-width: ${queries.smallProject}px) {
    font-size: 10rem;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  justify-content: center;
  height: 100%;
  position: absolute;
  z-index: 3;
  top: 0;
  right: 0;
  margin-right: 5vw;

  @media (max-width: ${queries.smallProject}px) {
    width: 100%;
    margin-right: 0;
    flex-wrap: wrap;
    align-content: center;
  }
`

const Button = styled.a`
  border: none;
  background: ${colors.secondary};
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  text-align: center;
  box-shadow: -6px 5px ${colors.light};
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  color: ${colors.light};
  transition: 300ms;

  &:hover {
    background: ${colors.light};
    box-shadow: -6px 5px ${colors.dark};
    color: ${colors.dark};
  }
`

function Project({
  url,
  title,
  description,
  images = [],
  tools,
  buttonSite,
  urlSite
}) {
  const [hovered, setIsHovered] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const textDefil = `${title}-`.repeat(4)

  // Slider projects
  useEffect(() => {
    const nextSlide = () => {
      if (images && images?.length > 0) {
        setCurrentSlide(
          currentSlide < images?.length - 1 ? currentSlide + 1 : 0
        )
      }
    }

    let timer
    if (hovered) {
      timer = setTimeout(nextSlide, 400)
    }
    return () => {
      clearTimeout(timer)
    }
  }, [hovered, currentSlide, images])

  return (
    <Show
      onMouseEnter={() => {
        if (!hovered) {
          setIsHovered(true)
        } else {
          setIsHovered(false)
        }
      }}
      onMouseLeave={() => setIsHovered(false)}>
      <Content
        style={{
          display: `${!hovered ? "flex" : "none"}`
        }}>
        <TextContainer className="text-container">
          <ProjectTitle>{title}</ProjectTitle>
          <p>{description}</p>
        </TextContainer>
        <Tools>
          {tools && tools.map((tool, index) => <span key={index}>{tool}</span>)}
        </Tools>
      </Content>

      <ContentHovered
        style={{
          display: `${hovered ? "flex" : "none"}`
        }}>
        <Image src={images[currentSlide]} alt={`Slide-${currentSlide}`} />
        <TextHovered aria-hidden="true">{textDefil}</TextHovered>
        <TextHovered aria-hidden="true">{textDefil}</TextHovered>
        <ButtonContainer>
          <Button href={url}>See the code</Button>
          {buttonSite && <Button href={urlSite}>Visit the site</Button>}
        </ButtonContainer>
      </ContentHovered>
    </Show>
  )
}

export default Project

Project.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  // subtitle: PropTypes.string,
  description: PropTypes.string,
  images: PropTypes.array,
  tools: PropTypes.array,
  buttonSite: PropTypes.bool,
  urlSite: PropTypes.string
}
