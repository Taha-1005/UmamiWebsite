import styled from 'styled-components';
import { bgd_desk } from './Images';
import Header from '../Header';
import Footer from '../Footer';

const HomePageContainer = styled.div`
  background-image: url(${bgd_desk});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
const FooterWraper = styled.div`
  margin-left: 95px;
  position: absolute;
  bottom: 0;
  margin-bottom: 45px;
`;
const TextWarpper = styled.div`
  position: absolute;
  top: 50%;
  left: 110px;
  transform: translateY(-50%);
  letter-spacing: 0.6em;
  font-size: 12px;
  font-family: 'Avenir';
  color: white;
`;
function HomePage() {
  return (
    <HomePageContainer>
      <Header />
      <TextWarpper>YOUR FIFTH SENSE OF TASTE</TextWarpper>
      <FooterWraper>
        <Footer />
      </FooterWraper>
    </HomePageContainer>
  );
}
export default HomePage;
