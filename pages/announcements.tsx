import { Entry } from 'contentful'
import { NextSeo } from 'next-seo'
import { rgba } from 'polished'
import React from 'react'
import styled from 'styled-components'
import { transportationCMS } from '../cms/transportationCMS'
import { Container } from '../components/Container'
import { Layout } from '../components/Layout'
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
        <_Announcements>
          <Container>
            <AnnouncementsMain>
              <h1>
                <span>An</span>nouncements
              </h1>
              <AnnouncementsItems>
                {announcements.map(
                  ({ fields: { name, description, url }, sys: { id } }) => (
                    <AnnouncementsItem>
                      <h5>
                        <a href={url}>{name}</a>
                      </h5>
                      <p>{description}</p>
                    </AnnouncementsItem>
                  )
                )}
              </AnnouncementsItems>
            </AnnouncementsMain>
          </Container>
        </_Announcements>
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

const _Announcements = styled.section`
  margin: 2rem 0;

  /* min-height: 50vh; */
`

const AnnouncementsMain = styled.div`
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

const AnnouncementsItems = styled.ul``

const AnnouncementsItem = styled.li`
  h5 {
    font-size: 1rem;
    font-weight: 500;
    a {
      color: ${props => props.theme.colors.colorText};
      text-decoration: underline;
    }
  }
`

export default Announcements
