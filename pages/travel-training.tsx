import { Entry } from 'contentful'
import { lighten, rgba } from 'polished'
import styled from 'styled-components'
import { transportationCMS } from '../cms/transportationCMS'
import { Layout } from '../components/Layout'
import { SectionHeader } from '../components/SectionHeader'
import { ContentfulTravelTraining } from '../types/Contentful'

import { Button } from '../components/Button'
import { useRouter } from 'next/router'

interface TravelTrainingProps {
  travelTraining: Entry<ContentfulTravelTraining>
}

const TravelTraining = ({ travelTraining }: TravelTrainingProps) => {
  const router = useRouter()
  const {
    fields: { description, flyer }
  } = travelTraining
  return (
    <Layout>
      <SectionHeader title='Travel Training'>
        <TravelTrainingDescription>
          <p>{description}</p>
          <a href={flyer.fields.file.url}>{flyer.fields.title}</a>
        </TravelTrainingDescription>
        <Button text='Contact Us' onSubmit={() => router.push('/contact')} />
      </SectionHeader>
    </Layout>
  )
}

export async function getStaticProps () {
  const res = await transportationCMS.getEntries<ContentfulTravelTraining>({
    content_type: 'travelTraining'
  })

  const travelTraining = res.items[0]

  return {
    revalidate: 60 * 10,
    props: {
      travelTraining
    }
  }
}

const TravelTrainingDescription = styled.div`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: ${props => rgba(props.theme.colors.colorText, 0.9)};
  p {
    margin-bottom: 2rem;
  }
  a {
    color: ${props => props.theme.colors.colorText};
    text-decoration: underline;

    &:hover {
      color: ${props => lighten(0.25, props.theme.colors.colorText)};
    }
    transition: all 0.2s ease-in-out;
  }
`

export default TravelTraining
