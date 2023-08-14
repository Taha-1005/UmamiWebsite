import styled from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';
import { NavLink } from 'react-router-dom';
import { loftImage, toboImage } from './Images';

function Brands() {
  const Brands = styled.div`
    background-color: black;
    width: 100vw;
    height: 100vh;
    background-size: contain;
    /* position: relative; */
    overflow: hidden;
  `;
  const BrandsRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 450px;
    width: 100%;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    a {
      color: white;
      &:hover {
        color: white;
      }
    }
  `;
  const BrandsCol1 = styled.div`
    img {
      width: 134px;
      height: 62px;
    }
  `;
  const BrandsCol2 = styled.div`
    color: white;
    font-family: 'Avenir';
    font-size: 14px;
  `;
  const FooterWraper = styled.div`
    position: absolute;
    bottom: 0;
    margin-bottom: 50px;
    margin-left: 100px;
  `;
  const BrandsCol3 = styled.div`
    img {
      width: 134px;
      height: 62px;
    }
  `;
  return (
    <Brands>
      <Header />
      <BrandsRow>
        <BrandsCol1>
          <NavLink to='/loft'>
            <img src={loftImage} />
          </NavLink>
        </BrandsCol1>
        <BrandsCol2>DINE IN // MODERN FAST FOOD</BrandsCol2>
        <BrandsCol3>
          <NavLink to='/tobo'>
            <img src={toboImage} />
          </NavLink>
        </BrandsCol3>
      </BrandsRow>
      <FooterWraper>
        <Footer />
      </FooterWraper>
    </Brands>
  );
}

export default Brands;
