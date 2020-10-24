import styled from 'styled-components'
import { Button } from '../components/Button'
import { Layout } from '../components/Layout'

export default function Home () {
  return (
    <Layout>
      <Hero img={'/hero.jpg'}>
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
            <Button text='Learn More' />
          </ButtonContainer>
        </HeroMain>
      </Hero>
    </Layout>
  )
}

const Hero = styled.div<{ img: string }>`
  height: 100vh;
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
  margin-top: 5rem;
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  h2 {
    font-weight: 400;
    align-self: flex-end;
    margin-left: 2rem;
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
  margin-right: 1rem;

  h3 {
    font-weight: 300;
  }
`
