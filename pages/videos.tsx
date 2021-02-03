import { Entry } from 'contentful'
import { NextSeo } from 'next-seo'
import { rgba } from 'polished'

import React from 'react'
import styled from 'styled-components'
import { transportationCMS } from '../cms/transportationCMS'

import { Layout } from '../components/Layout'
import { SectionHeader } from '../components/SectionHeader'

import { VIDEOS_SEO } from '../seo/next-seo.config'
import { ContentfulVideos } from '../types/Contentful'

interface VideosProps {
  videos: Entry<ContentfulVideos>[]
}

const Videos: React.FC<VideosProps> = ({ videos }) => {
  return (
    <>
      <NextSeo {...VIDEOS_SEO} />
      <Layout>
        <SectionHeader title='Videos'>
          <VideosItems>
            {videos.map(
              ({
                fields: { title, description, youtubeLink },
                sys: { id }
              }) => (
                <VideoItem key={id}>
                  <h2>{title}</h2>
                  <p>{description}</p>

                  <VideoContainer>
                    <ResponsiveIframe
                      width={300}
                      height={300}
                      src={youtubeLink}
                      frameBorder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                    />
                  </VideoContainer>
                </VideoItem>
              )
            )}
          </VideosItems>
        </SectionHeader>
      </Layout>
    </>
  )
}

export async function getStaticProps () {
  const res = await transportationCMS.getEntries<ContentfulVideos>({
    content_type: 'videos'
  })

  const videos = res.items

  return {
    revalidate: 60 * 10,
    props: {
      videos
    }
  }
}

const VideosItems = styled.ul``

const VideoItem = styled.li`
  h2 {
    font-weight: 500;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  p {
    color: ${props => rgba(props.theme.colors.colorText, 0.9)};
    margin-bottom: 2rem;
  }

  padding: 2rem;
  background-color: ${props => props.theme.colors.colorOffWhite};
`

const VideoContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
`

const ResponsiveIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`

export default Videos
