import { styled } from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';
import { loftInsta } from './Images';
import { NavLink } from 'react-router-dom';

const LoftContainer = styled.div`
  background-color: #164d45;
  width: 100vw;
  height: 100vh;
  background-size: contain;
  overflow-x: hidden;
  position: relative;
  p {
    width: 665px;
    text-align: center;
    color: white;
    font-family: 'Avenir';
    letter-spacing: normal;
    font-size: 11px;
  }
`;
const TextContainer = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const LoftInsta = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 30px;
`;
const FooterWraper = styled.div`
  margin-left: 93px;
  margin-bottom: 43px;
  position: absolute;
  bottom: 0;
`;
function Loft() {
  return (
    <LoftContainer>
      <Header />
      <TextContainer>
        <p>
          LOFT IS A UNIQUE RESTAURANT THAT OFFERS A DIVERSE RANGE OF
          INTERNATIONAL CUISINE TO CATER TO THE PALATES OF ADVENTUROUS FOODIES.
          WITH ITS FOCUS ON GLOBAL FLAVORS, LOFT OFFERS DINERS A CHANCE TO
          EXPLORE NEW AND EXCITING TASTES FROM DIFFERENT PARTS OF THE WORLD.
        </p>
        <p>
          THE ATMOSPHERE AT LOFT IS DESIGNED TO EVOKE A SENSE OF SOPHISTICATION
          AND EXCLUSIVITY, WITH ITS MINIMALIST DÉCOR AND UPSCALE FURNISHINGS.
          THE RESTAURANT'S AMBIANCE IS PERFECT FOR A CASUAL HANG-OUT, A
          CELEBRATORY MEAL, OR A BUSINESS LUNCH.
        </p>
        <p>
          LOFT'S MENU IS CONSTANTLY EVOLVING, WITH NEW DISHES BEING INTRODUCED
          TO KEEP THINGS FRESH AND EXCITING. THE RESTAURANT'S KITCHEN IS LED BY
          A TALENTED TEAM OF CHEFS WHO ARE PASSIONATE ABOUT SHOWCASING THEIR
          CULINARY SKILLS. FROM HAND-ROLLED SUSHI TO AUTHENTIC ITALIAN PASTA
          DISHES, LOFT HAS SOMETHING TO OFFER FOR EVERYONE.
        </p>
        <p>
          LOFT'S MISSION IS TO ACHIEVE EXCEPTIONAL QUALITY, WHERE OUR
          WELL-FORMED TEAM ARE HIGHLY MOTIVATED TO BREAK THE GLASS CEILING AND
          PUSH BOUNDARIES TO ITS MAXIMUM POTENTIAL TO ALLOW CUSTOMERS TO VENTURE
          INTO A DIVERSE AND UNIQUE EXPERIENCE.
        </p>
        <p>
          LOFT STANDARD FOCUSES ON RESILIENCE, SOPHISTICATION AND EXOTICNESS,
          SUCH ATTRIBUTES ARE THE EMBODIMENT OF THE COLOR EMERALD GREEN, WHERE
          OUR TEAM HAS SUCCESSFULLY CULTIVATED INTO THE AMBIENCE AND DESIGN
          ESTABLISHING A PROUD AND DISTINGUISH BRAND IDENTITY
        </p>
      </TextContainer>
      <LoftInsta>
        <NavLink to='/'>
          <img src={loftInsta} />
        </NavLink>
      </LoftInsta>
      <FooterWraper>
        <Footer />
      </FooterWraper>
    </LoftContainer>
  );
}

export default Loft;
