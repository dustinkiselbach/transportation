import { rgba } from 'polished'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../components/Button'
import { ContactForm } from '../components/ContactForm'
import { Container } from '../components/Container'
import { Layout } from '../components/Layout'

const Contact: React.FC = ({}) => {
  const [form, setForm] = useState({
    name: '',
    subject: '',
    message: ''
  })

  const onChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(form)
    setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value })
  }

  const onSubmit = async () => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const info = await res.json()
      console.log(info)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Layout>
      <_Contact>
        <Container>
          <ContactMain>
            <h1>
              <span>Co</span>ntact
            </h1>
            <ContactContent>
              <ContactItems>
                <h2>Contact Us</h2>
                <ContactItem>
                  <li>Donny Ybarra, Mobility Manager</li>
                  <li>phone: (317) 459-7055</li>
                  <li>fax: (315) 684-9290</li>
                  <li>email: dymobility@gmail.com</li>
                </ContactItem>
                <ContactItem>
                  <li>Madison County Rural Health Council</li>
                  <li>100 Eaton St, PO Box 187 Morrisville, NY 13408</li>
                </ContactItem>
              </ContactItems>
              <ContactFormContainer>
                <h2>Send Us a Message!</h2>
                <ContactForm {...{ onChange }} />
                <Button text='Send Message' {...{ onSubmit }} />
              </ContactFormContainer>
            </ContactContent>
          </ContactMain>
        </Container>
      </_Contact>
    </Layout>
  )
}

export default Contact

const _Contact = styled.section`
  margin: 2rem 0;
`
const ContactMain = styled.div`
  width: 100%;
  h1 {
    font-weight: 500;
    font-size: 3rem;
    margin-bottom: 4rem;
    span {
      border-bottom: 4px solid
        ${props => rgba(props.theme.colors.colorPrimary, 0.9)};
    }
  }
  h2 {
    font-weight: 500;
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  margin-bottom: 4rem;
`

const ContactContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ContactItems = styled.div`
  flex: 1;
`

const ContactItem = styled.ul`
  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  li {
    &:first-child {
      font-weight: 500;
      margin-bottom: 0.5rem;
    }
    &:not(:first-child) {
      color: ${props => rgba(props.theme.colors.colorText, 0.9)};
      margin-bottom: 5px;
    }
  }
`
const ContactFormContainer = styled.div`
  flex: 1;
`
