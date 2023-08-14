import { styled } from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';

const ToboContainer = styled.div`
  background-color: #8f2e2e;

  width: 100vw;
  height: 100vh;
  background-size: contain;
  overflow-x: hidden;
  position: relative;
  p {
    width: 636.8px;
    text-align: center;
    font-size: 11px;
    color: white;
  }
`;
const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
`;
const FooterWraper = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: 45px;
  margin-left: 10px;
`;
function Tobo() {
  return (
    <ToboContainer>
      <Header />
      <TextContainer>
        <p>
          TOBO TAKES GREAT PRIDE IN BEING THE ONLY BURGER JOINT IN THE WORLD TO
          OFFER A ONE-OF-A-KIND RECIPE. THIS EXCLUSIVE RECIPE FEATURES A BLEND
          OF PREMIUM INGREDIENTS, BOLD FLAVORS, AND A DICE OF LOVE TO CREATE
          BURGERS THAT ARE TRULY ONE OF A KIND.
        </p>
        <p>
          TOBO HAS CAPTURED THE HEARTS OF FOODIES EVERYWHERE, IS MORE THAN JUST
          A PLACE TO GRAB A QUICK BITE. IT'S A VERITABLE FEAST FOR THE SENSES, A
          SENSORY SYMPHONY OF SIGHTS, SMELLS, AND TASTES THAT TANTALIZE AND
          TEMPT.
        </p>
        <p>
          AS YOU APPROACH TOBO, THE MOUTHWATERING AROMA OF SIZZLING BURGERS
          WAFTS THROUGH THE AIR, DRAWING YOU CLOSER WITH EVERY STEP. THE SOUNDS
          OF SIZZLING MEAT AND BUBBLING CHEESE MINGLE WITH THE CHATTER OF HUNGRY
          PATRONS, CREATING A LIVELY AMBIANCE THAT'S BOTH INVITING AND EXCITING.
        </p>
        <p>
          THE MODERN INDUSTRIAL DESIGN THEME AT TOBO IS CHARACTERIZED BY ITS USE
          OF RAW MATERIALS SUCH AS CONCRETE, METAL, AND WOOD, AND FEATURES SLEEK
          AND CLEAN LINES THAT CREATE A SOPHISTICATED AND STYLISH ATMOSPHERE.
          THE OPEN KITCHEN AND ILLUMINATED MENU BOARDS ADD TO THE OVERALL
          AESTHETIC AND ALLOW DINERS TO WATCH AS THEIR BURGERS ARE MADE TO
          ORDER.
        </p>
        <p>
          WHETHER YOU'RE GRABBING A QUICK BITE OR SETTLING IN FOR A LEISURELY
          MEAL, TOBO IS THE PERFECT DESTINATION FOR ANYONE LOOKING FOR A UNIQUE
          AND MEMORABLE DINING EXPERIENCE. WITH ITS ONE-OF-A-KIND RECIPE AND
          MODERN INDUSTRIAL DESIGN, TOBO IS A BURGER JOINT THAT TRULY STANDS OUT
          FROM THE REST.
        </p>
      </TextContainer>
      <FooterWraper>
        <Footer />
      </FooterWraper>
    </ToboContainer>
  );
}

export default Tobo;
