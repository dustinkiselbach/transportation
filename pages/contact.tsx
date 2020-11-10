import { useRouter } from 'next/router'
import { rgba } from 'polished'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../components/Button'
import { ContactForm } from '../components/ContactForm'
import { Container } from '../components/Container'
import { Layout } from '../components/Layout'

const Contact: React.FC = ({}) => {
  const router = useRouter()
  const [form, setForm] = useState({
    name: '',
    subject: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const onChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value })
  }

  const onSubmit = async () => {
    setLoading(isLoading => !isLoading)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })
      const info = await res.json()
      if (info) {
        router.push('contact/success')
      } else {
        setError(true)
        setTimeout(() => {
          setError(false)
        }, 4000)
      }
    } catch (e) {
      console.log('Error:' + e)
    }
    setLoading(isLoading => !isLoading)
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
                <ErrorMsg>
                  {error ? 'Please complete all fields' : null}
                </ErrorMsg>
                <Button text='Send Message' {...{ onSubmit, loading }} />
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
  @media (max-width: 600px) {
    flex: 0 0 100%;
  }
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
  @media (max-width: 600px) {
    margin-top: 2rem;
    flex: 0 0 100%;
  }
`
const ErrorMsg = styled.div`
  margin: 1rem 0;
  color: #dc3545;
  font-weight: 500;
`
