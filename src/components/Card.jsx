import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import colors from "../style/colors"
import queries from "../style/queries"

const CardContainer = styled.div`
  position: relative;
  background: ${colors.light};
  border: 0.7rem solid ${colors.secondary};
  border-radius: 20px;
  padding: 1.5rem 2rem;
  opacity: 0;
  transition: 300ms;

  @media (max-width: ${queries.small}px) {
    padding: 0.7rem 1.2rem;
    border: 0.5rem solid ${colors.secondary};
  }

  &.roadmapStop.show {
    transform: translateX(0px);
    opacity: 1;
  }

  &:nth-child(odd) {
    transform: translateX(50px);
    margin-right: 20vw;

    @media (max-width: ${queries.medium}px) {
      transform: translateX(25px);
      margin-right: 10vw;
    }
    @media (max-width: ${queries.small}px) {
      transform: translateX(5px);
      margin-right: 0;
    }

    img {
      float: left;
      shape-outside: circle(50% at center center);
      margin-right: 1rem;
    }
  }

  &:nth-child(even) {
    transform: translateX(-50px);
    margin-left: 20vw;

    @media (max-width: ${queries.medium}px) {
      transform: translateX(-25px);
      margin-left: 10vw;
    }
    @media (max-width: ${queries.small}px) {
      transform: translateX(-5px);
      margin-left: 0;
    }

    img {
      float: right;
      shape-outside: circle(50% at center center);
      margin-left: 1rem;
    }

    h4,
    p {
      text-align: right;
    }
  }
`

const Image = styled.img`
  width: 12vw;
  max-width: 8rem;
  background: ${colors.primary};
  border-radius: 50%;
  padding: 0.8rem;

  @media (max-width: ${queries.medium}px) {
    width: 18vw;
    padding: 0.4rem;
  }
`

const CardTitle = styled.h4`
  font-size: 1.3rem;
`

function Card({ image, year, title, content }) {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  // Show Card
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(containerRef.current)
          }
        })
      },
      { threshold: 0.7 }
    )

    observer.observe(containerRef.current)
  }, [])

  return (
    <CardContainer
      ref={containerRef}
      className={`roadmapStop ${isVisible ? "show" : ""}`}>
      <Image src={image} alt={`${year} description`} />
      <CardTitle>
        {title} / {year}
      </CardTitle>
      <p>{content}</p>
    </CardContainer>
  )
}

export default Card

Card.propTypes = {
  image: PropTypes.string,
  year: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string
}
