import styled from '@emotion/styled';
import { useMediaQuery } from 'react-responsive';
import { FC } from 'react';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 250vh;
  background-color: rgb(5, 7, 14);
  @media only screen and (max-width: 600px) {
    height: 100vh;
  }
`;
const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: 60%;
  left: 15vw;
  transform: translate(0px, -50%);
  width: auto;
  z-index: 10;
  @media only screen and (max-width: 600px) {
    top: 120px;
    left: 5%;
    transform: unset;
    background-color: unset;
    border-radius: unset;
    padding: 0px;
  }
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ContentsWrapper = styled.div`
  margin: 0px;
  margin-left: 12px;
  display: flex;
  flex-direction: column;
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;

  @media only screen and (max-width: 600px) {
    margin-bottom: 4px;
  }

  @media only screen and (max-width: 1024px) {
    margin-bottom: 8px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 5.6rem;
  line-height: 140%;
  color: rgb(255, 255, 255);
  @media only screen and (max-width: 600px) {
    font-size: 2.4rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 3.2rem;
  }
  @media only screen and (max-width: 1280px) {
    font-size: 4rem;
  }
`;
const Description = styled.div`
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 140%;
  color: rgb(255, 255, 255);
  white-space: pre-wrap;
  @media only screen and (max-width: 600px) {
    font-size: 1.4rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 1280px) {
    font-size: 2.4rem;
  }
`;

const IconsWrapper = styled.div`
  @media only screen and (max-width: 600px) {
    width: 26px;
    height: 66px;
    padding: 8px 6px;
    margin-top: 6px;
  }
  @media only screen and (max-width: 768px) {
    margin-top: 5px;
  }
  @media only screen and (max-width: 1024px) {
    width: 36px;
    height: 80px;
    padding: 12px 10px;
  }
  width: 48px;
  height: 112px;
  gap: 4px;
  padding: 16px 12px;
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icons = () => (
  <IconsWrapper>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
      <path
        d="M12.5 17C13.6167 17 14.55 16.6208 15.3 15.8625C16.05 15.1042 16.425 14.175 16.425 13.075C16.425 11.9583 16.05 11.025 15.3 10.275C14.55 9.525 13.6167 9.15 12.5 9.15C11.3833 9.15 10.45 9.525 9.7 10.275C8.95 11.025 8.575 11.9583 8.575 13.075C8.575 14.175 8.95 15.1042 9.7 15.8625C10.45 16.6208 11.3833 17 12.5 17ZM12.5 15.875C11.7 15.875 11.0333 15.6083 10.5 15.075C9.96667 14.5417 9.7 13.875 9.7 13.075C9.7 12.2583 9.96667 11.5875 10.5 11.0625C11.0333 10.5375 11.7 10.275 12.5 10.275C13.3 10.275 13.9667 10.5375 14.5 11.0625C15.0333 11.5875 15.3 12.2583 15.3 13.075C15.3 13.875 15.0333 14.5417 14.5 15.075C13.9667 15.6083 13.3 15.875 12.5 15.875ZM4.45 20.5C4.05 20.5 3.70833 20.3583 3.425 20.075C3.14167 19.7917 3 19.45 3 19.05V7.075C3 6.69167 3.14167 6.35417 3.425 6.0625C3.70833 5.77083 4.05 5.625 4.45 5.625H7.875L9.7 3.5H15.3L17.125 5.625H20.55C20.9333 5.625 21.2708 5.77083 21.5625 6.0625C21.8542 6.35417 22 6.69167 22 7.075V19.05C22 19.45 21.8542 19.7917 21.5625 20.075C21.2708 20.3583 20.9333 20.5 20.55 20.5H4.45ZM20.55 19.375C20.65 19.375 20.7292 19.3458 20.7875 19.2875C20.8458 19.2292 20.875 19.15 20.875 19.05V7.075C20.875 6.99167 20.8458 6.91667 20.7875 6.85C20.7292 6.78333 20.65 6.75 20.55 6.75H16.6L14.75 4.625H10.25L8.4 6.75H4.45C4.35 6.75 4.27083 6.78333 4.2125 6.85C4.15417 6.91667 4.125 6.99167 4.125 7.075V19.05C4.125 19.15 4.15417 19.2292 4.2125 19.2875C4.27083 19.3458 4.35 19.375 4.45 19.375H20.55Z"
        fill="#5D6CFA"></path>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
      <circle cx="12.5" cy="12" r="3" fill="#BDC1C7"></circle>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
      <circle cx="12.5" cy="12" r="3" fill="#BDC1C7"></circle>
    </svg>
  </IconsWrapper>
);

const Dim = styled.div`
  position: absolute;
  top: -2px;
  left: 0px;
  width: 100%;
  height: 50vh;
  background: linear-gradient(rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%);
`;

const WithVideoSection: FC<{
  description1?: string;
  description2?: string;
  title1?: string;
  title2?: string;
  tabletVideo: string;
  mobileVideo: string;
  pcVideo: string;
}> = ({ mobileVideo, pcVideo, tabletVideo, description1, description2, title1, title2 }) => {
  const isMobile = useMediaQuery({ maxDeviceWidth: '600px' });
  const isTablet = useMediaQuery({ maxDeviceWidth: '768px' });
  const src = isMobile ? mobileVideo : isTablet ? tabletVideo : pcVideo;
  return (
    <Container>
      <div style={{ position: isMobile ? 'static' : 'sticky', top: 0, minHeight: '100vh', objectFit: 'cover' }}>
        <video
          style={{ minHeight: '100vh', objectFit: 'cover' }}
          width="100%"
          height="100%"
          loop
          playsInline
          autoPlay
          muted
          src={src}
        />
        <Dim />
      </div>
      <InnerContainer>
        <ContentsContainer>
          <Icons />
          <ContentsWrapper>
            <TitleWrapper>
              {title1 && <Title>{title1}</Title>}
              {title2 && <Title>{title2}</Title>}
            </TitleWrapper>
            {description1 && <Description>{description1}</Description>}
            {description2 && <Description>{description2}</Description>}
          </ContentsWrapper>
        </ContentsContainer>
      </InnerContainer>
    </Container>
  );
};

export default WithVideoSection;
