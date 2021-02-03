import { Entry } from 'contentful'
import { NextSeo } from 'next-seo'
import { lighten } from 'polished'
import React from 'react'
import styled from 'styled-components'
import { transportationCMS } from '../cms/transportationCMS'

import { Layout } from '../components/Layout'
import { SectionHeader } from '../components/SectionHeader'
import { SCHEDULES_SEO } from '../seo/next-seo.config'
import { ContentfulSchedules } from '../types/Contentful'

interface SchedulesProps {
  schedules: Entry<ContentfulSchedules>[]
}

const Schedules: React.FC<SchedulesProps> = ({ schedules }) => {
  return (
    <>
      <NextSeo {...SCHEDULES_SEO} />
      <Layout>
        <SectionHeader title='Schedules'>
          <SchedulesItems>
            {schedules.map(
              ({ fields: { title, days, location, pdf }, sys: { id } }) => (
                <SchedulesItem key={id}>
                  <Route>
                    <a href={pdf.fields.file.url}>{location}:</a>
                    <p>[{days}]</p>
                  </Route>
                  <h5>{title}</h5>
                </SchedulesItem>
              )
            )}
          </SchedulesItems>
        </SectionHeader>
      </Layout>
    </>
  )
}

export default Schedules

export async function getStaticProps () {
  const res = await transportationCMS.getEntries<ContentfulSchedules>({
    content_type: 'schedules'
  })

  const schedules = res.items

  return {
    revalidate: 60 * 10,
    props: {
      schedules
    }
  }
}

const SchedulesItems = styled.ul``
const SchedulesItem = styled.li`
  margin-bottom: 2rem;
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
    text-decoration: underline;
    &:hover {
      color: ${props => lighten(0.25, props.theme.colors.colorText)};
    }
    transition: all 0.2s ease-in-out;
  }
  p {
    color: ${props => lighten(0.1, props.theme.colors.colorText)};
    font-style: italic;
  }
  margin-bottom: 2px;
`
