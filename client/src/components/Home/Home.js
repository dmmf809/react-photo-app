import React  from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Slide1 from '../../Images/lakelouise.jpg'
import Slide2 from '../../Images/ghostlake.jpg'
import Slide3 from '../../Images/lakeminnewanks.jpg'
import { StyledButton,
         Image,
         ButtonContainer, } from './HomeElements'

const Home = () => {

    return (
      <>
              <Carousel>
              <Carousel.Item interval={1500}>
                <Image
                  className="d-block w-100"
                  src={Slide1}
                  alt="Lake Louise"
                />
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <Image
                  className="d-block w-100"
                  src= {Slide2}
                  alt="Ghost Lake"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src= {Slide3}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
            <ButtonContainer>
              <StyledButton to="/collections">
                Collections
              </StyledButton>
            </ButtonContainer>

      </>
    );
}

export default Home