import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from 'react-responsive';

import { useMemo, type FC } from 'react';

const useSection5Texts = () => {
  const { t } = useTranslation('main');
  const headCopy = t('section5.headCopy');
  const title = t('section5.title');
  const description1 = t('section5.description1');
  const description2 = t('section5.description2');
  const boxLeft = t('section5.boxLeft');
  const boxLeftSub = t('section5.boxLeftSub');
  const boxMid = t('section5.boxMid');
  const boxMidSub = t('section5.boxMidSub');
  const boxRight = t('section5.boxRight');
  const boxRightSub = t('section5.boxRightSub');
  return { headCopy, title, description1, description2, boxLeft, boxLeftSub, boxMid, boxMidSub, boxRight, boxRightSub };
};

const Wrapper = styled.div`
  background-color: rgb(5, 7, 14);
`;
const InnerWrapper = styled.div`
  position: relative;
  max-width: 1300px;
  width: calc(100% - 180px);
  white-space: pre-wrap;
  padding: 200px 0px;
  margin: 0 auto;
  @media only screen and (max-width: 1024px) {
    max-width: 844px;
    padding: 100px 0px;
  }
  @media only screen and (max-width: 768px) {
    max-width: 630px;
    width: calc(100% - 140px);
  }
  @media only screen and (max-width: 600px) {
    width: calc(100% - 40px);
    padding: 48px 0px;
  }
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const HeadCopy = styled.span`
  font-size: 3rem;
  font-weight: 700;
  line-height: normal;
  background: linear-gradient(0deg, rgb(115, 55, 255) 0%, rgb(49, 69, 255) 100%) text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 14px;
  @media only screen and (max-width: 1024px) {
    font-size: 1.8rem;
    margin-bottom: 8px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 1.4rem;
  }
`;
const Title = styled.span`
  color: rgb(255, 255, 255);
  font-size: 4.8rem;
  font-weight: 700;
  line-height: normal;
  @media only screen and (max-width: 1024px) {
    font-size: 3.2rem;
    font-weight: 600;
  }
  @media only screen and (max-width: 768px) {
    font-size: 2.8rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 2rem;
  }
`;
const Description = styled.span`
  color: rgb(246, 247, 248);
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 140%;
  margin-top: 20px;
  @media only screen and (max-width: 1024px) {
    font-size: 1.8rem;
    margin-top: 12px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.6rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 1.2rem;
    margin-top: 10px;
  }
`;
const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  margin-top: 64px;
  padding: 64px 0px;
  text-align: center;
  border-radius: 16px;
  background: linear-gradient(221deg, rgba(255, 255, 255, 0.2) -0.09%, rgba(81, 30, 198, 0.03) 99.94%);

  svg {
    width: 56px;
    height: 56px;
    margin-left: 8px;
  }

  @media only screen and (max-width: 1024px) {
    margin-top: 40px;
    padding: 48px 0px;
    svg {
      width: 40px;
      height: 40px;
    }
  }
  @media only screen and (max-width: 768px) {
    margin-top: 32px;
    padding: 32px 0px;
    svg {
      width: 32px;
      height: 32px;
    }
  }
  @media only screen and (max-width: 600px) {
    width: fit-content;
    flex-direction: column;
    align-items: center;
    height: 100%;
    margin: 24px auto auto;
    padding: 32px 24px;
    gap: 32px;
  }
`;

const BoxTopText = styled.div`
  color: rgb(255, 255, 255);
  text-align: center;
  font-size: 8rem;
  font-weight: 800;
  line-height: 120%;
  @media only screen and (max-width: 1024px) {
    font-size: 5.6rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 4rem;
  }
`;
const BoxTopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const BoxContentTitle = styled.div`
  color: rgb(255, 255, 255);
  font-size: 2.8rem;
  font-weight: 400;
  line-height: 140%;
  @media only screen and (max-width: 1024px) {
    font-size: 1.8rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.6rem;
  }
`;
const BoxContentDescription = styled.div`
  color: rgb(189, 193, 199);
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 140%;
  @media only screen and (max-width: 1024px) {
    font-size: 1rem;
  }
`;

const BoxContentWrapper = styled.div<{ animate: boolean; animationDelay: number }>`
  opacity: 0;
  ${({ animate, animationDelay }) =>
    animate
      ? css`
          animation: 1s ease-in-out ${animationDelay}s 1 normal forwards running easeinout;
        `
      : ''};
  gap: 12px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 1024px) {
    gap: 4px;
  }
`;
const BoxContent: FC<{
  animate: boolean;
  topText: string;
  title: string;
  description: string;
  animationDelay: number;
}> = ({ description, title, topText, animationDelay, animate }) => {
  return (
    <BoxContentWrapper animate={animate} animationDelay={animationDelay}>
      <BoxTopWrapper>
        <BoxTopText>{topText}</BoxTopText>
        <svg xmlns="http://www.w3.org/2000/svg" width="57" height="56" viewBox="0 0 57 56" fill="none">
          <path
            d="M25.4672 7.0828L29.427 7.0828L29.427 40.7411L44.7713 25.3969L47.5761 28.2017L27.4471 48.3307L7.31817 28.2017L10.123 25.3969L25.4672 40.7411L25.4672 7.0828Z"
            fill="#3737CC"
          />
        </svg>
      </BoxTopWrapper>
      <BoxContentTitle>{title}</BoxContentTitle>
      <BoxContentDescription>{description}</BoxContentDescription>
    </BoxContentWrapper>
  );
};

const Section5 = () => {
  const { headCopy, title, description1, description2, boxLeft, boxLeftSub, boxMid, boxMidSub, boxRight, boxRightSub } =
    useSection5Texts();
  const { ref, inView } = useInView({ triggerOnce: true });

  const isMobile = useMediaQuery({ maxWidth: '600px' });

  const boxContents = useMemo(() => {
    if (isMobile)
      return [
        { topText: '4H', title: boxMid, description: boxMidSub, animate: inView, animationDelay: 0 },
        { topText: '80%', title: boxLeft, description: boxLeftSub, animate: inView, animationDelay: 0.5 },
      ];
    return [
      { topText: '80%', title: boxLeft, description: boxLeftSub, animate: inView, animationDelay: 0 },
      { topText: '4H', title: boxMid, description: boxMidSub, animate: inView, animationDelay: 0.5 },
      { topText: '90%', title: boxRight, description: boxRightSub, animate: inView, animationDelay: 1 },
    ];
  }, [boxLeft, boxLeftSub, boxMid, boxMidSub, boxRight, boxRightSub, inView, isMobile]);

  return (
    <Wrapper>
      <InnerWrapper>
        <ContentContainer>
          <HeadCopy>{headCopy}</HeadCopy>
          <Title>{title}</Title>
          <Description>
            <div>{description1}</div>
            <div>{description2}</div>
          </Description>
          <BoxWrapper ref={ref}>
            {boxContents.map((values, i) => (
              <BoxContent key={i} {...values} />
            ))}
          </BoxWrapper>
        </ContentContainer>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Section5;
