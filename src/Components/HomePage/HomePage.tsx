import styled from 'styled-components';
import { bgd_desk } from './Images';
import Header from '../Header';
import Footer from '../Footer';

const HomePageContainer = styled.div`
  background-image: url(${bgd_desk});
  background-size: cover;
  background-repeat: no-repeat;
  /* position: fixed;
  top: 0;
  left: 0; */
  width: 100vw;
  height: 100vh;
  background-position: center;
  overflow: hidden;
`;
const FooterWraper = styled.div`
  margin-left: 10px;
  position: absolute;
  bottom: 10px;
`;
function HomePage() {
  return (
    <HomePageContainer>
      <Header />
      <FooterWraper>
        <Footer />
      </FooterWraper>
    </HomePageContainer>
  );
}
export default HomePage;
