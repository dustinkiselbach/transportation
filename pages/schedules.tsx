import { createClient } from 'contentful'
import { lighten, rgba } from 'polished'
import React from 'react'
import styled from 'styled-components'
import { Container } from '../components/Container'
import { Layout } from '../components/Layout'
import { ContentfulSchedules } from '../types/Contentful'

interface SchedulesProps {
  schedules: ContentfulSchedules[]
}

const Schedules: React.FC<SchedulesProps> = ({ schedules }) => {
  return (
    <Layout>
      <_Schedules>
        <Container>
          <SchedulesMain>
            <h1>
              <span>Sc</span>hedules
            </h1>

            <SchedulesItems>
              {schedules.map(
                ({ fields: { title, days, location, pdfLink } }, i) => (
                  <SchedulesItem key={i}>
                    <Route>
                      <a href={pdfLink}>{location}:</a>
                      <p>[{days}]</p>
                    </Route>
                    <h5>{title}</h5>
                  </SchedulesItem>
                )
              )}
            </SchedulesItems>
          </SchedulesMain>
        </Container>
      </_Schedules>
    </Layout>
  )
}

export default Schedules

export async function getStaticProps () {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE || '',
    accessToken: process.env.ACCESS_TOKEN || ''
  })

  const res = await client.getEntries<ContentfulSchedules>({
    content_type: 'schedules'
  })

  const schedules = res.items

  return {
    props: {
      schedules
    }
  }
}

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
