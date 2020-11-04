import { lighten, rgba } from 'polished'
import React from 'react'
import styled from 'styled-components'
import { Container } from '../components/Container'
import { Layout } from '../components/Layout'

const Schedules: React.FC = ({}) => {
  return (
    <Layout>
      <_Schedules>
        <Container>
          <SchedulesMain>
            <h1>
              <span>Sc</span>hedules
            </h1>

            <SchedulesItems>
              <SchedulesItem>
                <Route>
                  <a href=''>Morrisville, NY:</a>
                  <p>[tue]</p>
                </Route>
                <h5>Grocery Shopping Shuttle</h5>
              </SchedulesItem>
            </SchedulesItems>
          </SchedulesMain>
        </Container>
      </_Schedules>
    </Layout>
  )
}

export default Schedules

const _Schedules = styled.section`
  margin: 2rem 0;
`

const SchedulesMain = styled.div`
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

const SchedulesItems = styled.ul``
const SchedulesItem = styled.li`
  h5 {
    font-size: 1rem;
    font-weight: 500;
  }
`

const Route = styled.div`
  display: flex;
  align-items: center;
  a {
    margin-right: 4px;
    color: ${props => props.theme.colors.colorText};
    &:hover {
      text-decoration: underline;
    }
  }
  p {
    color: ${props => lighten(0.2, props.theme.colors.colorText)};
    font-style: italic;
  }
  margin-bottom: 2px;
`
