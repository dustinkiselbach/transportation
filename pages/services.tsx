import { lighten, rgba } from 'polished'
import React from 'react'
import styled from 'styled-components'
import { Container } from '../components/Container'
import { Layout } from '../components/Layout'

const Services: React.FC = ({}) => {
  return (
    <Layout>
      <_Services>
        <Container>
          <ServicesMain>
            <h1>
              <span>Se</span>rvices
            </h1>
            <ServicesItems>
              <ServicesItem>
                <ServicesItemHeader>
                  <h2>Transportation Coordination</h2>
                </ServicesItemHeader>
                <ServicesItemContent>
                  <h3>
                    Transportation Coordination with Madison County Mobility
                    Management can look like:
                  </h3>
                  <li>
                    Contacting for assistance with connecting to resources
                  </li>
                  <li>
                    Seeking assistance with planning a local trip throughout
                    Madison County
                  </li>
                  <li>
                    Coordinating with service providers to facilitate
                    transportation services that fit individuals best
                  </li>
                </ServicesItemContent>
              </ServicesItem>
              <ServicesItem>
                <ServicesItemHeader>
                  <h2>MCRHC Mobility Manager MTS Token Program</h2>
                </ServicesItemHeader>
                <ServicesItemContent>
                  <p>
                    Madison Transit System uses a token system to pay for public
                    transit trips with the shuttles, if eligible, contact the
                    Madison County Mobility Management office to ask about
                    applying for bulk token purchases and/or “free rides” (based
                    on availability at time of contact).
                  </p>
                </ServicesItemContent>
              </ServicesItem>
            </ServicesItems>
          </ServicesMain>
        </Container>
        <Container>
          <Resources>
            <h1>
              <span>In</span>ventory of Resources
            </h1>
            <ResourceItems>
              <ResoureceItem>
                <h4>Title</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aliquid officia alias quo! Voluptatibus cumque nostrum saepe
                  omnis magnam nulla reprehenderit.
                </p>
                <ResourceContact>
                  <li>999-999-9999</li>
                  <li>www.lorem.com</li>
                </ResourceContact>
              </ResoureceItem>
              <ResoureceItem>
                <h4>Title</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aliquid officia alias quo! Voluptatibus cumque nostrum saepe
                  omnis magnam nulla reprehenderit.
                </p>
                <ResourceContact>
                  <li>999-999-9999</li>
                  <li>www.lorem.com</li>
                </ResourceContact>
              </ResoureceItem>
              <ResoureceItem>
                <h4>Title</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aliquid officia alias quo! Voluptatibus cumque nostrum saepe
                  omnis magnam nulla reprehenderit.
                </p>
                <ResourceContact>
                  <li>999-999-9999</li>
                  <li>www.lorem.com</li>
                </ResourceContact>
              </ResoureceItem>
            </ResourceItems>
          </Resources>
        </Container>
      </_Services>
    </Layout>
  )
}

const _Services = styled.section`
  margin: 2rem 0;
`

const ServicesMain = styled.div`
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
  margin-bottom: 4rem;
`

const ServicesItems = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ServicesItem = styled.div`
  flex: 1;
  flex-wrap: wrap;
  background-color: ${props => props.theme.colors.colorOffWhite};
  display: flex;

  flex-direction: column;

  &:first-child {
    margin-right: 1rem;
  }
`
const ServicesItemHeader = styled.div`
  padding: 1rem 2rem;
  background-color: ${props =>
    lighten(0.025, props.theme.colors.colorOffWhite)};
  h2 {
    font-weight: 500;
    font-size: 2rem;
    margin: 1rem 0;
  }
`

const ServicesItemContent = styled.ul`
  padding: 2rem;

  h3 {
    margin-bottom: 2rem;
    font-weight: 400;
    font-size: 1rem;
    color: ${props => rgba(props.theme.colors.colorText, 0.9)};
  }
  li,
  p {
    margin-left: 1rem;

    font-weight: 500;
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`

const Resources = styled.div`
  h1 {
    font-weight: 500;
    margin-bottom: 3rem;
  }

  span {
    border-bottom: 4px solid
      ${props => rgba(props.theme.colors.colorPrimary, 0.9)};
  }
`

const ResourceItems = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ResoureceItem = styled.div`
  h4 {
    margin-bottom: 1rem;
    font-weight: 500;
  }

  p {
    color: ${props => rgba(props.theme.colors.colorText, 0.9)};
    margin-bottom: 1rem;
  }

  flex: 1 1;
  padding: 2rem;
  background-color: ${props => props.theme.colors.colorOffWhite};
  margin: 1rem 1rem 1rem 0;
`

const ResourceContact = styled.ul`
  font-weight: 500;
  li {
    &::before {
      content: '- ';
      margin-right: 2px;
    }
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`

export default Services
