import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import styled from "styled-components"

import colors from "../style/colors"
import queries from "../style/queries"

const FormContainer = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1vh;
  margin: auto;
  width: 60vw;
  padding: 5vw;

  @media (max-width: ${queries.medium}px) {
    width: 80vw;
  }
  @media (max-width: ${queries.small}px) {
    width: 95vw;
  }

  input,
  textarea {
    font-family: "Quicksand", Arial, Helvetica, sans-serif;
    font-size: 1rem;
    padding: 0.6rem 0.7rem;
    border-radius: 5px;
    border: none;
  }
`

const FormTitle = styled.h3`
  color: #fff;
  text-align: center;
`

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 100%;
`

const Submit = styled.button`
  font-size: 1.2rem;
  padding: 0.6rem 1.8rem;
  margin: 1rem;
  border-radius: 20px;
  border: none;
  font-weight: 700;
  color: ${colors.secondary};
  background: ${colors.light};
  box-shadow: 5px 2px 10px #494949;
  width: fit-content;
  align-self: center;
  transition: 300ms;
  cursor: pointer;

  &:hover {
    background: ${colors.primary};
    color: ${colors.light};
  }
`

const Msg = styled.div`
  text-align: center;
  padding: 2vw 4vw;
  border-radius: 10px;
  box-shadow: 0px 0px 14px 1px #4a4a4a;

  p {
    font-size: 1.2rem;
    font-weight: 600;
  }
`

const SuccessMsg = styled(Msg)`
  background: ${colors.primary};
`

const FailedsMsg = styled(Msg)`
  background: red;
`

function Form() {
  const form = useRef()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [success, setSuccess] = useState(false)
  const [failed, setFailed] = useState(false)

  const handleNameChange = event => {
    document.querySelector("#name").style.border = "none"
    setName(event.target.value)
  }

  const handleEmailChange = event => {
    document.querySelector("#email").style.border = "none"
    setEmail(event.target.value)
  }

  const sendEmail = e => {
    e.preventDefault()
    if (name === "") {
      document.querySelector(
        "#name"
      ).style.border = `thick solid ${colors.primary}`
      return
    }

    if (email === "") {
      document.querySelector(
        "#email"
      ).style.border = `thick solid ${colors.primary}`
      return
    }

    emailjs
      .sendForm(
        "service_l4mgw75",
        "template_222t1pd",
        form.current,
        "r9VvciBhkZmLM0ArF"
      )

      .then(
        result => {
          console.log(result.text)
          form.current.reset()
          setSuccess(true)
          form.current.reset()
          setName("")
          setEmail("")
          setTimeout(() => setSuccess(false), 2500)
        },
        error => {
          console.log(error.text)
          setFailed(true)
          setTimeout(() => setFailed(false), 2500)
        }
      )
  }

  return (
    <>
      <FormContainer ref={form} onSubmit={sendEmail}>
        <FormTitle>Let me a message</FormTitle>
        {success && (
          <SuccessMsg>
            <p>Your message is on the way</p>
          </SuccessMsg>
        )}

        {failed && (
          <FailedsMsg>
            <p>An error occured</p>
          </FailedsMsg>
        )}

        <Field>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            value={name}
            onChange={handleNameChange}
          />
        </Field>
        <Field>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            value={email}
            onChange={handleEmailChange}
          />
        </Field>
        <Field>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Your email subject"
          />
        </Field>
        <Field>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Your message"></textarea>
        </Field>

        <Submit type="submit">Send</Submit>
      </FormContainer>
    </>
  )
}

export default Form
