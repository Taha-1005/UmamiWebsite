import { styled } from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';

const ContactContainer = styled.div`
  background-color: black;
  width: 100vw;
  height: 110vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
const FooterWraper = styled.div`
  margin-top: 50px;
  margin-left: 10px;
`;
const FormContainer = styled.div`
  display: flex;
  font-family: 'Avenir';
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FormContact = styled.div`
  margin-left: 60px;
  font-size: 16px;
  color: #bbafaf;
  margin-top: 100px;
`;
const FormDetails = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  width: fit-content;
  color: #bbafaf;
  gap: 60px;
  input {
    background: transparent;
    border: none;
    border-bottom: 2px solid #ccc;
    color: white;
    height: 40.4px;
    width: 180;
    padding: 3px;
    padding-left: 22px;
    &:hover {
      border: 2.3px solid #ccc;
    }
    &:focus {
      outline: none;
      border: 2.3px solid #ccc;
    }
  }
`;
const FormButtonContainer = styled.div`
  margin-top: -30px;
  width: 100%;
  display: flex;
  justify-content: right;

  button {
    border-radius: 0;
    background-color: transparent;
    color: white;
    border-color: white;
    transition: background-color 0.3s ease-in-out;
    width: 150px;
    height: 42px;
    &:hover {
      background-color: white;
      color: black;
    }
  }
`;
const DetailRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
const SpecificDetail = styled.div`
  display: flex;
  flex-direction: column;
`;
const FeedbackRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  textarea {
    background: transparent;
    border: none;
    border-bottom: 2px solid #ccc;
    color: white;
    height: 92.9px;
    width: 401px;
    padding-top: 10.5px;
    padding-left: 22px;
    padding-bottom: 3px;
    padding-right: 10px;
    &:hover {
      border: 2.3px solid #ccc;
    }
    &:focus {
      outline: none;
      border: 2.3px solid #ccc;
    }
  }
`;
function Contact() {
  return (
    <ContactContainer>
      <Header />
      <FormContact>CONTACT</FormContact>
      <FormContainer>
        <FormDetails>
          <DetailRow>
            <SpecificDetail>
              First Name
              <input maxLength={100}></input>
            </SpecificDetail>
            <SpecificDetail>
              Last Name
              <input maxLength={100}></input>
            </SpecificDetail>
          </DetailRow>
          <DetailRow>
            <SpecificDetail>
              Email*
              <input maxLength={100} required={true} type='email'></input>
            </SpecificDetail>
            <SpecificDetail>
              Phone
              <input maxLength={100}></input>
            </SpecificDetail>
          </DetailRow>
          <FeedbackRow>
            Leave us a message...
            <textarea />
          </FeedbackRow>
          <FormButtonContainer>
            <button>Submit</button>
          </FormButtonContainer>
        </FormDetails>
      </FormContainer>
      <FooterWraper>
        <Footer />
      </FooterWraper>
    </ContactContainer>
  );
}

export default Contact;
