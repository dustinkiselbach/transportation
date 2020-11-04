import React from 'react'
import styled from 'styled-components'
import { Container } from '../../components/Container'
import { Layout } from '../../components/Layout'

const Success: React.FC<{}> = () => {
  return (
    <Layout>
      <Container>
        <_Success>
          <h4>Thank you!</h4>
          <h5>
            We have received your message and will be in touch with you soon.
          </h5>
        </_Success>
      </Container>
    </Layout>
  )
}

export default Success

const _Success = styled.section`
  height: 80vh;
  h4 {
    margin: 2rem 0;
    font-size: 3rem;
    font-weight: 500;
  }

  h5 {
    font-weight: 500;
  }
`
