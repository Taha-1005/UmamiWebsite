import { styled } from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';

const AboutUsContainer = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  p {
    color: white;
    width: 810px;
    font-size: 13px;
    font-family: 'Avenir';
  }
`;
const TextContainer = styled.div`
  margin-top: 100px;
  margin-left: 60px;
`;
const FooterWraper = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: 45px;
  margin-left: 95px;
`;
function AboutUs() {
  return (
    <AboutUsContainer>
      <Header />
      <TextContainer>
        <p>
          Umami Co story has started in 2012 in the very center heart of Kuwait,
          surrounded with art and culture, at Jabber Al Ahmad St, where it
          launched its first franchises, offering extraordinary dishes from all
          around the world for our customer to dwell in exploration with exotic
          ingredients and flavors. Our name was inspired by one of the Japanese
          commandments of flavors, “Umami”, evoking the essence of
          deliciousness.
        </p>
        <p>
          Our founder and CEO Rahaf Al-Anjari has established Umami Co with a
          vision to create a culinary revolution and nurture the human spirit,
          we strive to blur the threads of creativity and relativity, weaving
          together flavor, culture and, art into a masterpiece that
          transcendence the plate. We believe food is more than a sustenance, it
          is an experience helps to transport the human soul into unfathomed
          dimensions, conjures memories and emotions that lingers long after the
          meal is over.
        </p>
        <p>
          We are committed to sourcing the finest ingredients, working with
          local farmers and artisans to create a sustainable and ethical food
          system. We believe in the power of community, building relationships
          with our guests and colleagues to foster a sense of belonging and
          connection.
        </p>
        <p>
          Join us on this journey as we reimagine what is possible in the world
          of food and beverage. Together, let us celebrate the artistry of
          cuisine and the joy of sharing a meal with those we love.
        </p>
      </TextContainer>
      <FooterWraper>
        <Footer />
      </FooterWraper>
    </AboutUsContainer>
  );
}

export default AboutUs;
