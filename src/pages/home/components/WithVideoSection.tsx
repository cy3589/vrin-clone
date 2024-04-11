import styled from '@emotion/styled';
import { css } from '@emotion/react';
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 250vh;
  background-color: rgb(5, 7, 14);
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
`;

import { useMediaQuery } from 'react-responsive';
import { FC } from 'react';

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
      <div style={{ position: 'sticky', top: 0, minHeight: '100vh', objectFit: 'cover' }}>
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
        <div
          css={css`
            position: absolute;
            top: -2px;
            left: 0px;
            width: 100%;
            height: 50vh;
            background: linear-gradient(rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%);
          `}
        />
      </div>
      <InnerContainer>
        <div
          css={css`
            margin-left: 24px;
            margin: 0px;
            display: flex;
            flex-direction: column;
            & > span {
              font-weight: 700;
              font-size: 3.2rem;
              line-height: 140%;
              color: rgb(255, 255, 255);
              white-space: pre-wrap;
            }
          `}>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              margin-bottom: 12px;
              & > span {
                font-weight: 700;
                font-size: 5.6rem;
                line-height: 140%;
                color: rgb(255, 255, 255);
              }
            `}>
            {title1 && <span>{title1}</span>}
            {title2 && <span>{title2}</span>}
          </div>
          {description1 && <span>{description1}</span>}
          {description2 && <span>{description2}</span>}
        </div>
      </InnerContainer>
    </Container>
  );
};

export default WithVideoSection;
