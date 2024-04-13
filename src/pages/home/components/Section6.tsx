import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';

const useSection6Texts = () => {
  const { t } = useTranslation('main');
  const headCopy = t('section6.headCopy');
  const title = t('section6.title');
  const card1text1 = t('section6.card1.text1');
  const card1text2 = t('section6.card1.text2');
  const card1text3 = t('section6.card1.text3');
  const card1hoverText1 = t('section6.card1.hover.text1');
  const card1hoverText2 = t('section6.card1.hover.text2');
  const card1hoverText3 = t('section6.card1.hover.text3');
  const card1hoverText4 = t('section6.card1.hover.text4');
  const card2text1 = t('section6.card2.text1');
  const card2text2 = t('section6.card2.text2');
  const card2text3 = t('section6.card2.text3');
  const card2text4 = t('section6.card2.text4');
  const card2hoverText1 = t('section6.card2.hover.text1');
  const card2hoverText2 = t('section6.card2.hover.text2');
  const card2hoverText3 = t('section6.card2.hover.text3');
  const cardText1 = {
    text1: card1text1,
    text2: card1text2,
    text3: card1text3,
    hover: { text1: card1hoverText1, text2: card1hoverText2, text3: card1hoverText3, text4: card1hoverText4 },
  };
  const cardText2 = {
    text1: card2text1,
    text2: card2text2,
    text3: card2text3,
    text4: card2text4,
    hover: { text1: card2hoverText1, text2: card2hoverText2, text3: card2hoverText3 },
  };
  return { headCopy, title, cardText1, cardText2 };
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

const CardsWrapper = styled.div`
  flex-direction: row;
  margin-top: 64px;
  gap: 24px;
  display: flex;

  @media only screen and (max-width: 1024px) {
    margin-top: 40px;
    gap: 28px;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 103px;
    gap: 149px;
  }
  @media only screen and (max-width: 600px) {
    margin-top: 24px;
    gap: 110px;
  }
`;
const cardActiveCSS = css`
  video {
    display: block;
    z-index: 1;
  }

  #video-image {
    display: block;
  }
  img {
    display: none;
  }

  background: linear-gradient(225deg, rgba(255, 255, 255, 0.5) 0%, rgba(81, 30, 198, 0.35) 100%);
  span:nth-of-type(1) {
    display: none;
  }
  span:nth-of-type(2) {
    display: block;
  }
  @media only screen and (min-width: 601px) {
    svg {
      display: none;
    }
  }
`;
const CardWrapper = styled.div<{ isMobile: boolean; active?: boolean }>`
  flex-direction: row;
  position: relative;
  max-width: 588px;
  width: 50%;
  height: 609px;
  border-radius: 22px;
  background: linear-gradient(221deg, rgba(255, 255, 255, 0.2) -0.09%, rgba(81, 30, 198, 0.14) 99.94%);
  padding: 58px 64px;
  cursor: pointer;

  @media only screen and (max-width: 1024px) {
    max-width: 408px;
    height: 420px;
    border-radius: 16px;
    padding: 40px 44px;
    svg {
      min-width: 40px;
      width: 40px;
      height: 40px;
    }
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    max-width: 630px;
    width: 100%;
    height: 250px;
    border-radius: 22px;
    padding: 48px 56px;
    svg {
      min-width: 36px;
      width: 36px;
      height: 36px;
    }
  }
  @media only screen and (max-width: 600px) {
    max-width: 560px;
    padding: 28px;
  }

  #video-image {
    display: none;
  }

  span:nth-of-type(2) {
    display: none;
  }
  video {
    display: none;
  }
  ${({ isMobile, active }) =>
    !isMobile
      ? css`
          &: hover {
            ${cardActiveCSS}
          }
        `
      : active
        ? cardActiveCSS
        : ''};
`;
const badgeCardHoverCSS = css`
  img {
    display: none;
  }

  img.image-fade-in {
    display: block;
  }

  background: linear-gradient(225deg, rgba(255, 255, 255, 0.5) 0%, rgba(81, 30, 198, 0.35) 100%);
  span:nth-of-type(1) {
    display: none;
  }
  span:nth-of-type(2) {
    display: block;
  }
  @media only screen and (min-width: 601px) {
    svg {
      display: none;
    }
  }
`;
const BagCardWrapper = styled.div<{ isMobile: boolean; active?: boolean }>`
  flex-direction: row;
  position: relative;
  max-width: 588px;
  width: 50%;
  height: 609px;
  border-radius: 22px;
  background: linear-gradient(221deg, rgba(255, 255, 255, 0.2) -0.09%, rgba(81, 30, 198, 0.14) 99.94%);
  padding: 58px 64px;
  cursor: pointer;
  span:nth-of-type(2) {
    display: none;
  }
  img {
    display: block;
  }
  img.image-fade-in {
    display: none;
  }

  @media only screen and (max-width: 1024px) {
    max-width: 408px;
    height: 420px;
    border-radius: 16px;
    padding: 40px 44px;
    svg {
      min-width: 40px;
      width: 40px;
      height: 40px;
    }
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    max-width: 630px;
    width: 100%;
    height: 250px;
    border-radius: 22px;
    padding: 48px 56px;
    svg {
      min-width: 36px;
      width: 36px;
      height: 36px;
    }
  }
  @media only screen and (max-width: 600px) {
    max-width: 560px;
    padding: 28px;
  }

  ${({ isMobile, active }) =>
    !isMobile
      ? css`
          &: hover {
            ${badgeCardHoverCSS}
          }
        `
      : active
        ? badgeCardHoverCSS
        : ''};
`;
const CardContentWrapper = styled.div`
  flex-direction: row;
  width: 100%;
  gap: 8px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 28px;
  }
`;
const CardTextWrapper = styled.span`
  color: rgb(255, 255, 255);
  font-size: clamp(2.4rem, 2.2vw, 3.6rem);
  font-weight: 600;
  line-height: 140%;
  white-space: pre-wrap;
  z-index: 2;

  @media only screen and (max-width: 1024px) {
    font-size: 2.4rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: clamp(1.6rem, 3.2vw, 2.4rem);
  }
  @media only screen and (max-width: 600px) {
    font-size: 1.6rem;
  }
`;
const CardHoverTextWrapper = styled.span<{ eng: boolean }>`
  color: rgb(255, 255, 255);
  font-size: clamp(2rem, 1.5vw, 3.2rem);
  font-weight: 600;
  line-height: 140%;
  white-space: pre-wrap;
  z-index: 2;
  @media only screen and (max-width: 768px) {
    font-size: clamp(1.6rem, 2.7vw, 2rem);
  }
  @media only screen and (max-width: 600px) {
    font-size: 1.6rem;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 2rem;
  }
  ${({ eng }) =>
    eng
      ? css`
          color: rgb(255, 255, 255);
          font-size: clamp(1.8rem, 2.2vw, 2.8rem);
          font-weight: 600;
          line-height: 140%;
          white-space: pre-wrap;
          z-index: 2;

          @media only screen and (max-width: 1024px) {
            font-size: 1.8rem;
          }

          @media only screen and (max-width: 768px) {
            font-size: clamp(1.4rem, 2.2vw, 2rem);
          }
          @media only screen and (max-width: 600px) {
            font-size: 1.4rem;
          }
        `
      : ''};
`;
const ArrowSVG = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.2">
      <path
        d="M18.7208 37.5996L16.8008 35.6796L33.1208 19.3596H18.2408V16.6396H37.7608V36.1596H35.0408V21.2796L18.7208 37.5996Z"
        fill="#F3EEFF"></path>
      <circle cx="28" cy="28" r="27.3333" stroke="#F3EEFF" strokeWidth="1.33333"></circle>
    </g>
  </svg>
);
const CloseSVG = () => (
  <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.2">
      <path d="M25 11L11 25" stroke="#F3EEFF" stroke-width="1.3"></path>
      <path d="M11 11L25 25" stroke="#F3EEFF" stroke-width="1.3"></path>
      <path
        d="M35.5714 17.5C35.5714 26.917 27.7159 34.5714 18 34.5714C8.28411 34.5714 0.428571 26.917 0.428571 17.5C0.428571 8.08301 8.28411 0.428571 18 0.428571C27.7159 0.428571 35.5714 8.08301 35.5714 17.5Z"
        stroke="#F3EEFF"
        stroke-width="0.857143"></path>
    </g>
  </svg>
);
const CardImage = styled.img<{ eng: boolean }>`
  width: 106%;
  position: absolute;
  top: 35px;
  right: -32px;
  pointer-events: none;

  @media only screen and (max-width: 1024px) {
    width: 107%;
    min-width: 415px;
    top: 17px;
    right: -20px;
  }

  @media only screen and (max-width: 768px) {
    width: 377px;
    min-width: 377px;
    top: -120px;
    right: 5px;
  }
  @media only screen and (max-width: 600px) {
    width: 53%;
    min-width: 295px;
    top: -12px;
    right: -14px;
  }
  ${({ eng }) =>
    eng
      ? css`
          width: 106%;
          position: absolute;
          top: 110px;
          right: -32px;
          pointer-events: none;

          @media only screen and (max-width: 1024px) {
            width: 107%;
            min-width: 415px;
            top: 80px;
            right: -20px;
          }

          @media only screen and (max-width: 768px) {
            width: 377px;
            min-width: 377px;
            top: -120px;
            right: 5px;
          }
          @media only screen and (max-width: 600px) {
            width: 53%;
            min-width: 295px;
            top: -12px;
            right: -14px;
          }
        `
      : ''}
`;
const BagCardImage = styled.img`
  width: 86%;
  position: absolute;
  top: 165px;
  right: 45px;
  pointer-events: none;
  @media only screen and (max-width: 1280px) {
    top: 200px;
  }
  @media only screen and (max-width: 1024px) {
    width: 85%;
    min-width: 320px;
    top: 155px;
    right: 35px;
  }

  @media only screen and (max-width: 768px) {
    width: 326px;
    min-width: 326px;
    top: -52px;
    right: 51px;
  }
  @media only screen and (max-width: 600px) {
    width: 43%;
    min-width: 240px;
    top: 22px;
    right: 18px;
  }
`;
const CardVideoImage = styled.img<{ eng: boolean }>`
  width: 105%;
  position: absolute;
  top: 34px;
  right: -31px;
  pointer-events: none;
  ${({ eng }) =>
    eng
      ? css`
          width: 105%;
          position: absolute;
          top: 110px;
          right: -31px;
          pointer-events: none;
        `
      : ''};
  @media only screen and (max-width: 1280px) {
    top: 34px;
  }
  @media only screen and (max-width: 1024px) {
    min-width: 415px;
    top: 20px;
    right: -18px;
  }
  @media only screen and (max-width: 768px) {
    width: 380px;
    min-width: 380px;
    top: -120px;
    right: 6px;
  }
  @media only screen and (max-width: 600px) {
    width: 40%;
    min-width: 300px;
    top: -15px;
    right: -12px;
  }
`;
const CardVideo = styled.video<{ eng: boolean }>`
  width: 40%;
  position: absolute;
  top: 220px;
  right: 78px;
  pointer-events: none;
  @media only screen and (max-width: 1280px) {
    top: 15vw;
    right: 4.75vw;
  }
  @media only screen and (max-width: 1024px) {
    min-width: 152px;
    top: 16vw;
    right: 59px;
  }
  @media only screen and (max-width: 768px) {
    width: 157px;
    top: -15px;
    right: 68px;
  }
  @media only screen and (max-width: 600px) {
    min-width: 120px;
    width: 20%;
    top: 70px;
    right: 38px;
  }
  ${({ eng }) =>
    eng
      ? css`
          width: 40%;
          position: absolute;
          top: 330px;
          right: 78px;
          pointer-events: none;

          @media only screen and (max-width: 1280px) {
            top: 23vw;
            right: 5.2vw;
          }

          @media only screen and (max-width: 1024px) {
            min-width: 152px;
            top: 22vw;
            right: 55px;
          }
          @media only screen and (max-width: 768px) {
            width: 157px;
            top: -15px;
            right: 68px;
          }
          @media only screen and (max-width: 600px) {
            min-width: 120px;
            width: 20%;
            top: 70px;
            right: 38px;
          }
        `
      : ''};
`;

const useMediaPrefix = ({
  passLaptop,
  passMobile,
  passPC,
  passTablet,
}: {
  passMobile: boolean;
  passTablet: boolean;
  passLaptop: boolean;
  passPC: boolean;
}) => {
  const isMobile = useMediaQuery({ maxWidth: '600px' });
  const isTablet = useMediaQuery({ maxWidth: '768px' });
  const isLaptop = useMediaQuery({ maxWidth: '1024px' });
  if (!passMobile && isMobile) return 'mob';
  if (!passTablet && isTablet) return 'tablet';
  if (!passLaptop && isLaptop) return 'laptop';
  if (!passPC) return 'PC';
  return '';
};

const useLocationPrefix = () => {
  const { i18n } = useTranslation('main');
  if (i18n.language === 'KR') return 'ko';
  return 'en';
};

const usePrefix = (props?: { passMobile?: boolean; passTablet?: boolean; passLaptop?: boolean; passPC?: boolean }) => {
  const passMobile = !!props?.passMobile;
  const passTablet = !!props?.passTablet;
  const passLaptop = !!props?.passLaptop;
  const passPC = !!props?.passPC;

  const mediaPrefix = useMediaPrefix({ passMobile, passTablet, passLaptop, passPC });
  const locationPrefix = useLocationPrefix();
  const transform = useCallback(
    (pathWithoutExt: string, ext: string) =>
      `${[pathWithoutExt, mediaPrefix, locationPrefix].filter(Boolean).join('_')}.${ext}`,
    [mediaPrefix, locationPrefix],
  );

  const transformWithoutLocationPrefix = useCallback(
    (pathWithoutExt: string, ext: string) => `${[pathWithoutExt, mediaPrefix].filter(Boolean).join('_')}.${ext}`,
    [mediaPrefix],
  );
  return { transform, transformWithoutLocationPrefix };
};

const Section6 = () => {
  const { headCopy, title, cardText1, cardText2 } = useSection6Texts();
  const { i18n } = useTranslation('main');
  const { transform } = usePrefix();
  const { transformWithoutLocationPrefix: passLaptopTransformWithoutLocationPrefix } = usePrefix({ passLaptop: true });
  const eng = i18n.language === 'US';
  const isMobile = useMediaQuery({ maxWidth: '600px' });
  const [card1Active, setCard1Active] = useState(false);
  const [card2Active, setCard2Active] = useState(false);
  const onToggleCard1 = useMemo(() => (isMobile ? () => setCard1Active((p) => !p) : undefined), [isMobile]);
  const onToggleCard2 = useMemo(() => (isMobile ? () => setCard2Active((p) => !p) : undefined), [isMobile]);

  return (
    <Wrapper>
      <InnerWrapper>
        <ContentContainer>
          <HeadCopy>{headCopy}</HeadCopy>
          <Title>{title}</Title>
          <CardsWrapper>
            {(() => {
              console.log({ isMobile, card1Active, onToggleCard1 });
              return void 0;
            })()}
            <CardWrapper onClick={onToggleCard1} isMobile={isMobile} active={card1Active}>
              <CardContentWrapper>
                <CardTextWrapper>
                  {[cardText1.text1, cardText1.text2, cardText1.text3].filter(Boolean).map((text, i) => (
                    <div key={i}>{text}</div>
                  ))}
                </CardTextWrapper>
                <CardHoverTextWrapper eng={eng}>
                  {[cardText1.hover.text1, cardText1.hover.text2, cardText1.hover.text3, cardText1.hover.text4]
                    .filter(Boolean)
                    .map((text, i) => (
                      <div key={i}>{text}</div>
                    ))}
                </CardHoverTextWrapper>
                {isMobile ? card1Active ? <CloseSVG /> : <ArrowSVG /> : null}
                {!isMobile && <ArrowSVG />}
              </CardContentWrapper>
              <CardImage eng={eng} src={transform('/assets/vrin-home_C-1', 'png')} alt="" />
              <CardVideoImage
                eng={eng}
                id="video-image"
                src={passLaptopTransformWithoutLocationPrefix('/assets/vrin-home_C-3', 'png')}
                alt=""
              />
              <CardVideo eng={eng} src="/assets/vrin-home_2_PC.mp4" muted autoPlay loop playsInline />
            </CardWrapper>
            <BagCardWrapper onClick={onToggleCard2} isMobile={isMobile} active={card2Active}>
              <CardContentWrapper>
                <CardTextWrapper>
                  {[cardText2.text1, cardText2.text2, cardText2.text3, cardText2.text4]
                    .filter(Boolean)
                    .map((text, i) => (
                      <div key={i}>{text}</div>
                    ))}
                </CardTextWrapper>
                <CardHoverTextWrapper eng={eng}>
                  {[cardText2.hover.text1, cardText2.hover.text2, cardText2.hover.text3]
                    .filter(Boolean)
                    .map((text, i) => (
                      <div key={i}>{text}</div>
                    ))}
                </CardHoverTextWrapper>
                {isMobile ? card2Active ? <CloseSVG /> : <ArrowSVG /> : null}
                {!isMobile && <ArrowSVG />}
              </CardContentWrapper>
              <BagCardImage src={transform('/assets/vrin-home_C-2', 'png')} alt="" />
              <IntervalBagImages />
            </BagCardWrapper>
          </CardsWrapper>
        </ContentContainer>
      </InnerWrapper>
    </Wrapper>
  );
};

const useInterval = (ms = 1000) => {
  const intervalRef = useRef<NodeJS.Timeout>();
  const set = useCallback(
    (callbackFn: () => void) => {
      clearInterval(intervalRef.current);
      callbackFn();
      intervalRef.current = setInterval(callbackFn, ms);
    },
    [ms],
  );
  useEffect(() => clearInterval(intervalRef.current), []);
  return { set };
};

const HoverBagImage = styled.img`
  transition: opacity 1s;
  position: absolute;
  top: 210px;
  right: -30px;
  pointer-events: none;

  @media only screen and (max-width: 1024px) {
    top: 188px;
    right: -12px;
  }

  @media only screen and (max-width: 768px) {
    width: 350px;
    top: 10px;
    right: -40px;
  }

  @media only screen and (max-width: 600px) {
    width: 250px;
    top: 111px;
    right: -10px;
  }
`;

const IntervalBagImages = () => {
  const imageSrcList = useMemo(() => Array.from(Array(10), (_, i) => `/assets/vrin-home_bag_${i + 1}.png`), []);
  const [currentIndex, setCurrentIndex] = useState(1);
  const setCurrentIndexFn = useCallback(() => setCurrentIndex((prev) => (prev >= 10 ? 1 : prev + 1)), []);
  const { set } = useInterval();
  useEffect(() => set(setCurrentIndexFn), [set, setCurrentIndexFn]);
  return (
    <>
      {imageSrcList.map((src, i) => (
        <HoverBagImage
          className="image-fade-in"
          style={{ opacity: +(currentIndex === i + 1) }}
          key={i}
          width="100%"
          src={src}
          alt=""
        />
      ))}
    </>
  );
};

export default Section6;
