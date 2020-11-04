import { rgba } from 'polished'
import styled from 'styled-components'
import { Button } from '../components/Button'
import { Layout } from '../components/Layout'
import { Container } from '../components/Container'
import { useRouter } from 'next/router'

export default function Home () {
  const router = useRouter()
  return (
    <Layout>
      <Hero img={'/hero.jpg'}>
        <Container>
          <HeroTop>
            <h2>Madison County Mobility Management</h2>
            <HeroCallUs>
              <h3>Call us Mon-Friday 8-4pm</h3>
              <ButtonContainer>
                <Button text='999-999-9999' variant='secondary' />
              </ButtonContainer>
            </HeroCallUs>
          </HeroTop>
          <HeroMain>
            <h1>We Go the</h1>
            <h1>Extra Mile for You</h1>
            <h2>Need a lift? We can help.</h2>
            <ButtonContainer>
              <Button
                text='Learn More'
                onSubmit={() => router.push('#about')}
              />
            </ButtonContainer>
          </HeroMain>
        </Container>
      </Hero>
      <About id='about'>
        <Container>
          <AboutContent>
            <h1>
              <span>Ab</span>out
            </h1>
            <p>
              Mobility Management is about bringing together the people who need
              transportation, with the people who provide transportation and the
              people who can pay for transportation, to address community
              transportation needs.
            </p>
            <p>
              It is making the most of existing resources, creating new services
              when needed and looking at the issues through the lens of the
              rider
            </p>
            <h2>How it benefits your community: </h2>
            <p>
              Mobility management can be the conduit for transportation
              solutions within your community by allowing the human service
              organizations to focus delivering their services and not spend
              time and resources deciphering how people will access those
              services. Mobility management keeps track of the pulse within the
              community and how various programs may be able to collaborate or
              combine efforts to provide better access to the available programs
              and services in the community.
            </p>
          </AboutContent>
          <__Fillgrid />
          <AboutImg></AboutImg>
        </Container>
      </About>
    </Layout>
  )
}

const Hero = styled.section<{ img: string }>`
  height: calc(100vh - 4rem);
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${props => props.img});
  background-size: cover;
  background-position: center center;
  /* background-repeat: no-repeat; */
  position: relative;
  display: flex;
  color: ${props => props.theme.colors.colorWhite};
`
const HeroTop = styled.div`
  margin-top: 2.5rem;
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  h2 {
    font-weight: 400;
    align-self: flex-end;
  }
`

const HeroMain = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-self: center;
  h1 {
    font-size: 4.5rem;
    margin: 0 0 1rem 0;
    &:nth-child(2) {
      margin-bottom: 4rem;
    }
  }

  h2 {
    font-weight: 400;
    margin-bottom: 4rem;
    text-align: center;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const HeroCallUs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-weight: 300;
  }
`
const About = styled.section`
  height: 100vh;
  display: flex;
  padding: 3rem 0;
  position: relative;
`
const __Fillgrid = styled.div`
  height: 100%;
  width: 50%;
`

const AboutContent = styled.div`
  background-color: ${props => props.theme.colors.colorOffWhite};
  position: absolute;
  top: 50%;
  left: 32%;

  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  transform: translate(-50%, -50%);

  h1 {
    font-weight: 500;
    position: relative;
    span {
      border-bottom: 4px solid
        ${props => rgba(props.theme.colors.colorPrimary, 0.9)};
    }
  }

  h2 {
    font-weight: 500;
    margin: 1rem 0;
  }

  p {
    margin: 1rem 0;
  }
`

const AboutImg = styled.div`
  background-image: url('/about2.jpg');
  background-size: cover;
  background-position: center center;
  height: 100%;
  width: 50%;
`
