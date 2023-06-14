import { lighten, rgba } from 'polished'
import React from 'react'
import styled from 'styled-components'
import { Container } from '../components/Container'
import { Layout } from '../components/Layout'
import { ContentfulResources } from '../types/Contentful'
import { Entry } from 'contentful'
import { NextSeo } from 'next-seo'
import { SERVICES_SEO } from '../seo/next-seo.config'
import { transportationCMS } from '../cms/transportationCMS'

interface ServicesProps {
  resources: Entry<ContentfulResources>[]
}

const Services: React.FC<ServicesProps> = ({ resources }) => {
  return (
    <>
      <NextSeo {...SERVICES_SEO} />
      <Layout>
        <_Services>
          <Container>
            <ServicesMain>
              <h1>
                <span>Re</span>sources
              </h1>
              <ResourceItems>
                {resources.map(
                  ({
                    fields: { title, description, contactItems },
                    sys: { id }
                  }) => (
                    <ResourceItem key={id}>
                      <h4>{title}</h4>
                      <p>{description}</p>
                      <ResourceContact>
                        {contactItems?.split(',').map(contact => {
                          if (contact.split('').includes('@')) {
                            return (
                              <li key={contact}>
                                <a href={`mailto:${contact}`}>{contact}</a>
                              </li>
                            )
                          } else if (contact.split('').includes('-')) {
                            return (
                              <li key={contact}>
                                <a href={`tel:${contact}`}>{contact}</a>
                              </li>
                            )
                          } else {
                            return (
                              <li key={contact}>
                                <a href={contact}>{contact}</a>
                              </li>
                            )
                          }
                        })}
                      </ResourceContact>
                    </ResourceItem>
                  )
                )}
              </ResourceItems>
            </ServicesMain>
          </Container>
        </_Services>
      </Layout>
    </>
  )
}

export async function getStaticProps () {
  const res = await transportationCMS.getEntries<ContentfulResources>({
    content_type: 'resources'
  })

  const resources = res.items

  return {
    revalidate: 60 * 10,
    props: {
      resources
    }
  }
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
  @media (max-width: 600px) {
    margin-top: 2rem;
    flex: 0 0 100%;
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
  @media (max-width: 800px) {
    padding: 1rem;
  }
`

const ServicesItemContent = styled.ul`
  padding: 2rem;
  list-style-type: '- ';

  p {
    margin-bottom: 1rem;
    font-weight: 400;
    color: ${props => rgba(props.theme.colors.colorText, 0.9)};
  }

  li {
    margin-left: 1rem;

    font-weight: 500;
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
  @media (max-width: 800px) {
    padding: 1rem;
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

const ResourceItem = styled.div`
  height: auto;

  h4 {
    margin-bottom: 1rem;
    font-weight: 500;
    font-size: 1.2rem;
  }

  p {
    color: ${props => rgba(props.theme.colors.colorText, 0.9)};
    margin-bottom: 1rem;
  }

  flex: 1 1 30%;
  padding: 2rem;
  background-color: ${props => props.theme.colors.colorOffWhite};
  margin: 1rem 1rem 1rem 0;

  @media (max-width: 1000px) {
    flex: 1 1 44%;
  }

  @media (max-width: 800px) {
    padding: 1rem;
  }

  @media (max-width: 600px) {
    flex: 0 0 100%;
  }
`

const ResourceContact = styled.ul`
  font-weight: 500;
  margin-left: 1rem;
  list-style-type: '- ';
  li {
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
    a {
      color: ${props => props.theme.colors.colorText};
      text-decoration: underline;
    }
  }
`

export default Services
