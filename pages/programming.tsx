import { Entry } from 'contentful'
import { NextSeo } from 'next-seo'
import { lighten } from 'polished'
import React from 'react'
import styled from 'styled-components'
import { transportationCMS } from '../cms/transportationCMS'

import { Layout } from '../components/Layout'
import { SectionHeader } from '../components/SectionHeader'
import { ANNOUNCEMENTS_SEO } from '../seo/next-seo.config'
import { ContentfulAnnouncements } from '../types/Contentful'

interface AnnouncementsProps {
  announcements: Entry<ContentfulAnnouncements>[]
}

const Announcements: React.FC<AnnouncementsProps> = ({ announcements }) => {
  return (
    <>
      <NextSeo {...ANNOUNCEMENTS_SEO} />

      <Layout>
        <SectionHeader title='Programming'>
          <AnnouncementsItems>
            {announcements.map(
              ({ fields: { name, description, pdf }, sys: { id } }) => (
                <AnnouncementsItem key={id}>
                  <h5>
                    <a href={pdf.fields.file.url}>{name}</a>
                  </h5>
                  <p>{description}</p>
                </AnnouncementsItem>
              )
            )}
          </AnnouncementsItems>
        </SectionHeader>
      </Layout>
    </>
  )
}

export async function getStaticProps () {
  const res = await transportationCMS.getEntries<ContentfulAnnouncements>({
    content_type: 'announcements'
  })

  const announcements = res.items

  return {
    revalidate: 60 * 10,
    props: {
      announcements
    }
  }
}

const AnnouncementsItems = styled.ul``

const AnnouncementsItem = styled.li`
  margin-bottom: 2rem;
  h5 {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 2px;
    a {
      color: ${props => props.theme.colors.colorText};
      text-decoration: underline;
      &:hover {
        color: ${props => lighten(0.25, props.theme.colors.colorText)};
      }
      transition: all 0.2s ease-in-out;
    }
  }
`

export default Announcements
