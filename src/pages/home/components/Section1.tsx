import { useTranslation } from 'react-i18next';

const useSection1Texts = () => {
  const { t } = useTranslation('main');
  const title = t('section1.title');
  const descriptionText1 = t('section1.description.text1');
  const descriptionText2 = t('section1.description.text2');
  const descriptionText3 = t('section1.description.text3');
  const getStartedForFree = t('section1.getStartedForFree');
  return {
    title,
    getStartedForFree,
    descriptions: [descriptionText1, descriptionText2, descriptionText3].filter(Boolean),
  };
};

import styled from '@emotion/styled';
import { Button as MUIButton } from '@mui/material';
const Container = styled.div`
  background-color: rgb(5, 7, 14);
  background-image: url(/assets/vrin-home_A-1_PC.png);
  background-size: cover;
  background-repeat: no-repeat;

  @media only screen and (max-width: 1024px) {
    background-image: url(/assets/vrin-home_A-1_laptop.png);
  }
  @media only screen and (max-width: 768px) {
    background-image: url(/assets/vrin-home_A-1_tablet.png);
  }
  @media only screen and (max-width: 600px) {
    background-image: url(/assets/vrin-home_A-1_mob.png);
  }
`;
const InnerContainer = styled.div`
  position: relative;
  max-width: 1300px;
  width: calc(100% - 180px);
  height: 100vh;
  max-height: 970px;
  z-index: 1;
  white-space: pre-wrap;

  margin: 0 auto;
  box-sizing: border-box;
  display: block;
  padding-left: 16px;
  padding-right: 16px;

  @media only screen and (max-width: 1024px) {
    max-width: 844px;
    max-height: 870px;
  }

  @media only screen and (max-width: 768px) {
    max-width: 630px;
    width: calc(100% - 140px);
    max-height: 540px;
  }

  @media only screen and (max-width: 600px) {
    width: calc(100% - 40px);
    max-height: 420px;
  }
`;

const DescriptionBox = styled.div`
  position: absolute;
  left: 0px;
  bottom: 120px;
  z-index: 2;
  & > span {
    color: rgb(189, 193, 199);
    font-size: 3.2rem;
    font-weight: 400;
    line-height: 140%;
    @media only screen and (max-width: 1024px) {
      font-size: 2.4rem;
    }

    @media only screen and (max-width: 600px) {
      font-size: 1.6rem;
    }
  }
  & > div:first-of-type {
    color: rgb(230, 232, 235);
    font-size: 5.2rem;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 12px;
    @media only screen and (max-width: 768px) {
      font-size: 4.4rem;
    }
    @media only screen and (max-width: 600px) {
      font-size: 2.4rem;
      margin-bottom: 10px;
    }
  }
  @media only screen and (max-width: 768px) {
    bottom: 90px;
  }
  @media only screen and (max-width: 600px) {
    bottom: 70px;
  }
`;
const Button = styled(MUIButton)`
  width: 100%;
  max-width: 326px;
  padding: 16px;
  margin-top: 56px;
  border-radius: 6px;
  background-color: rgb(55, 55, 204);
  color: rgb(255, 255, 255);
  & > span {
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 140%;
    @media only screen and (max-width: 1024px) {
      font-size: 2rem;
    }
    @media only screen and (max-width: 768px) {
      font-size: 1.8rem;
    }

    @media only screen and (max-width: 600px) {
      font-size: 1.4rem;
    }
  }

  @media only screen and (max-width: 1024px) {
    max-width: 243px;
    margin-top: 48px;
  }
  @media only screen and (max-width: 768px) {
    max-width: 210px;
    padding: 12px;
    margin-top: 40px;
  }
  @media only screen and (max-width: 600px) {
    max-width: 160px;
    padding: 10px;
    margin-top: 24px;
    border-radius: 4px;
  }
`;
const Section1 = () => {
  const { descriptions, getStartedForFree, title } = useSection1Texts();
  return (
    <Container>
      <InnerContainer>
        <DescriptionBox>
          <div>{title}</div>
          <span>
            {descriptions.map((text, i) => (
              <div key={i}>{text}</div>
            ))}
          </span>
          <Button>
            <span>{getStartedForFree}</span>
          </Button>
        </DescriptionBox>
      </InnerContainer>
    </Container>
  );
};

export default Section1;
