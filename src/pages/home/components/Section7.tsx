import styled from '@emotion/styled';
import { FC, useCallback, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';

import Slider, { type Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

import Modal from '@mui/material/Modal';

const useSection7Texts = () => {
  const { t } = useTranslation('main');
  const headCopy = t('section7.headCopy');
  const title = t('section7.title');
  const descriptions = [t('section7.descriptions.text1'), t('section7.descriptions.text2')].filter(Boolean);
  return { headCopy, title, descriptions };
};

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

const Section7 = () => {
  const { headCopy, title, descriptions } = useSection7Texts();
  const isLaptop = useMediaQuery({ maxWidth: '1024px' });
  const imageSrc = isLaptop ? '/assets/vrin-home_D-1_Laptop.png' : '/assets/vrin-home_D-1_PC.png';

  return (
    <Wrapper>
      <InnerWrapper>
        <ContentContainer>
          <HeadCopy>{headCopy}</HeadCopy>
          <Title>{title}</Title>
          <DescriptionsWrapper>
            {descriptions.map((text, i) => (
              <div key={i}>{text}</div>
            ))}
          </DescriptionsWrapper>
          <Section7Image src={imageSrc} alt="" />
          <Carousel />
        </ContentContainer>
      </InnerWrapper>
    </Wrapper>
  );
};

const CarouselHandler: FC<{ onClickPrev: () => void; onClickNext: () => void }> = ({ onClickNext, onClickPrev }) => (
  <CarouselButtonWrapper>
    <button onClick={onClickPrev}>
      <ArrowLeft />
    </button>
    <button onClick={onClickNext}>
      <ArrowRight />
    </button>
  </CarouselButtonWrapper>
);
const ArrowLeft = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle opacity="0.8" cx="18" cy="18" r="18" fill="white" />
    <path d="M20.7 11.7002L14.4 18.0002L20.7 24.3002" stroke="#6F757B" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const ArrowRight = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle opacity="0.8" cx="18" cy="18" r="18" transform="matrix(-1 0 0 1 36 0)" fill="white" />
    <path d="M15.3 11.7002L21.6 18.0002L15.3 24.3002" stroke="#6F757B" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

import LinearProgress from '@mui/material/LinearProgress';

const Carousel = () => {
  const settings: Settings = useMemo(() => ({ variableWidth: true, arrows: false }), []);
  const { transformWithoutLocationPrefix } = usePrefix();
  const { i18n } = useTranslation('main');
  const carouselLink: { [key in number]: string } = useMemo(
    () => ({
      1: 'https://www.instagram.com/p/Ckze-2mgevQ',
      2: 'https://www.youtube.com/watch?v=FxhqKo1b5hA&feature=youtu.be',
      3: 'https://www.instagram.com/p/Ciw4xWSAhWU',
    }),
    [],
  );
  const carouselCopy: { [key in number]: string } = useMemo(
    () =>
      i18n.language === 'KR'
        ? { 1: '가상쇼룸', 2: '전시', 3: '상품홍보' }
        : { 1: 'Virtual Showroom', 2: 'Exhibition', 3: 'Product Promotion' },
    [i18n.language],
  );
  const carouselData = useMemo(
    () =>
      Array.from(Array(3), (_, i) => ({
        copy: carouselCopy[i + 1] ?? '',
        src: transformWithoutLocationPrefix(`/assets/vrin-carousel_thumbnail_${i + 1}`, 'png'),
        link: carouselLink[i + 1] ?? '',
      })),
    [carouselCopy, carouselLink, transformWithoutLocationPrefix],
  );
  const mediaState = useMediaPrefix({ passLaptop: false, passMobile: false, passPC: false, passTablet: false });
  const carouselWidth = useMemo(() => {
    if (mediaState === 'mob') return '234px';
    if (mediaState === 'tablet') return '267px';
    if (mediaState === 'laptop') return '301px';
    if (mediaState === 'PC') return '340px';
    return '340px';
  }, [mediaState]);

  const isStretched = useMediaPrefix({ passMobile: true, passLaptop: true, passPC: false, passTablet: false }) === 'PC';
  const sliderRef = useRef<Slider | null>(null);
  const onClickNext = useCallback(() => sliderRef.current?.slickNext(), []);
  const onClickPrev = useCallback(() => sliderRef.current?.slickPrev(), []);

  const [modalOpen, setModalOpen] = useState(false);

  const [modalContent, setModalContent] = useState<{ type: 'video' | 'image'; src: string }[]>();
  const onModalOpen = (index: number) => {
    const targetModalContent: undefined | { type: 'video' | 'image'; src: string }[] = (() => {
      if (index === 1) {
        // 가상쇼룸
        return [
          { type: 'video', src: '/assets/vrin-showroom_1.mp4' },
          { type: 'video', src: '/assets/vrin-showroom_2.mp4' },
          { type: 'video', src: '/assets/vrin-showroom_3.mp4' },
        ];
      }
      if (index === 2) {
        // 전시
        return [
          { type: 'video', src: '/assets/vrin-exhibition_1.mp4' },
          { type: 'video', src: '/assets/vrin-exhibition_2.mp4' },
        ];
      }
      if (index === 3) {
        // 상품홍보
        return [
          { type: 'video', src: '/assets/vrin-product_1.mp4' },
          { type: 'video', src: '/assets/vrin-product_2.mp4' },
          { type: 'video', src: '/assets/vrin-product_3.mp4' },
          { type: 'image', src: '/assets/vrin-modal_advertise_1.png' },
          { type: 'image', src: '/assets/vrin-modal_advertise_2.png' },
          { type: 'image', src: '/assets/vrin-modal_advertise_3.png' },
          { type: 'image', src: '/assets/vrin-modal_advertise_4.png' },
        ];
      }
    })();

    if (!targetModalContent) return;
    setModalContent(targetModalContent);

    const slidePages = (targetModalContent.length ?? 2) - 1;
    const slidePercent = 100 * (1 / slidePages);
    setModalSlidePercent(slidePercent);
    setTimeout(() => setModalOpen(true), 0);

    // setModalSlidePercent(Math.floor((100 * ( 2)) / ((modalContent?.length ?? 1)*2)));
  };

  const modalSliderRef = useRef<Slider | null>(null);
  const [modalSlidePercent, setModalSlidePercent] = useState(0);

  return (
    <CarouselWrapper>
      {isStretched && <CarouselHandler onClickNext={onClickNext} onClickPrev={onClickPrev} />}
      <Slider ref={sliderRef} {...settings}>
        {!isStretched &&
          carouselData.map(({ src, copy, link }, i) => (
            <div style={{ width: carouselWidth }} key={i}>
              <Link style={{ position: 'relative' }} to={link}>
                <BGImage style={{ backgroundImage: `url(${src})` }} />
                <CarouselArrow src="/assets/vrin-carousel_arrow.svg" />
                <CarouselCopy>{copy}</CarouselCopy>
                <Dimmed />
              </Link>
            </div>
          ))}
        {isStretched &&
          carouselData.map(({ src, copy }, i) => (
            <div onClick={() => onModalOpen(i + 1)} style={{ width: carouselWidth }} key={i}>
              <div style={{ position: 'relative' }}>
                <BGImage style={{ backgroundImage: `url(${src})` }} />
                <StretchedContentWrapper>
                  <span>{copy}</span>
                  <img src="/assets/vrin-arrow_outward.svg" />
                </StretchedContentWrapper>
                <Dimmed />
              </div>
            </div>
          ))}
      </Slider>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <ModalWrapper>
          <Slider
            autoplay
            afterChange={(slideNumber) => {
              const slidePages = (modalContent?.length ?? 2) - 1;
              const slidePercent = 100 * ((slideNumber + 1) / slidePages);
              setModalSlidePercent(slidePercent);
            }}
            ref={modalSliderRef}
            slidesToShow={2}
            arrows={false}
            infinite={false}>
            {modalContent?.map(({ src, type }, i) => (
              <div key={i} style={{ height: '29vw', margin: '0 20px' }}>
                {type === 'image' && <img style={{ width: '100%', height: '29vw', objectFit: 'cover' }} src={src} />}
                {type === 'video' && (
                  <video style={{ width: '100%', height: '29vw', objectFit: 'cover' }} muted autoPlay src={src} />
                )}
              </div>
            ))}
          </Slider>
          <ProgressWrapper>
            <button onClick={() => setModalOpen(false)}>
              <img src="/assets/vrin-modal_close.svg" />
            </button>
            <CustomProgress variant="determinate" style={{ width: '345px' }} value={modalSlidePercent} />
          </ProgressWrapper>
        </ModalWrapper>
      </Modal>
    </CarouselWrapper>
  );
};

export default Section7;

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
  overflow: hidden;
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

const BGImage = styled.div`
  position: relative;
  width: 307px;
  height: 434px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0% 0%;
  cursor: pointer;

  @media only screen and (max-width: 1024px) {
    width: 285px;
    height: 404px;
  }

  @media only screen and (max-width: 768px) {
    width: 252px;
    height: 146px;
  }

  @media only screen and (max-width: 600px) {
    width: 220px;
    height: 128px;
  }
`;
const CarouselCopy = styled.span`
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 168%;
  color: rgb(255, 255, 255);

  @media only screen and (max-width: 768px) {
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: normal;
  }

  @media only screen and (max-width: 600px) {
    font-size: 1.4rem;
    font-weight: 700;
    top: 18px;
    left: 18px;
  }
`;

const StretchedContentWrapper = styled.div`
  position: absolute;
  bottom: 28px;
  left: 24px;
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  & > span {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 168%;
    color: rgb(255, 255, 255);
  }
  & > img {
    margin-left: 4px;
    margin: 0px;
    @media only screen and (max-width: 1024px) {
      width: 22px;
      height: 22px;
    }
  }

  @media only screen and (max-width: 1024px) {
    bottom: 24px;
    left: 22px;
  }
`;
const Dimmed = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 307px;
  height: 434px;
  opacity: 0.8;
  background: linear-gradient(360deg, rgb(14, 13, 18) 0%, rgba(14, 13, 18, 0) 100%);
  cursor: pointer;

  @media only screen and (max-width: 1024px) {
    width: 285px;
    height: 404px;
  }

  @media only screen and (max-width: 768px) {
    top: 0px;
    bottom: unset;
    width: 252px;
    height: 146px;
    opacity: 0.5;
  }
  @media only screen and (max-width: 600px) {
    width: 220px;
    height: 128px;
  }
`;

const DescriptionsWrapper = styled.span`
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

const Section7Image = styled.img`
  max-width: 722px;
  width: 100%;
  height: auto;
  margin-top: 72px;

  @media only screen and (max-width: 1024px) {
    max-width: 280px;
    margin-top: 85px;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const CarouselWrapper = styled.div`
  position: absolute;
  top: 45%;
  left: 410px;
  width: 1020px;

  .slick-slider .slick-list {
    border-radius: 20px;
  }

  @media only screen and (max-width: 1024px) {
    left: 50px;
    width: 903px;
  }
  @media only screen and (max-width: 768px) {
    position: relative;
    top: unset;
    left: unset;
    width: 800px;
    margin-top: 75px;
  }
  @media only screen and (max-width: 600px) {
    width: 700px;
    margin-top: 29px;
  }
`;

const CarouselArrow = styled.img`
  position: absolute;
  bottom: 20px;
  right: 28px;
  z-index: 1;

  @media only screen and (max-width: 768px) {
    bottom: 22px;
    right: 36px;
  }

  @media only screen and (max-width: 600px) {
    width: 24px;
    height: 24px;
    bottom: 16px;
    right: 30px;
  }
`;

const CarouselButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 16px;
  position: absolute;
  top: -72px;
  left: 85px;
  width: auto;
  @media only screen and (max-width: 1024px) {
    left: 48px;
  }
`;
const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 60px;
  bottom: -70px;
  width: 300px;
  height: 40px;
`;
const CustomProgress = styled(LinearProgress)`
  margin-left: 16px;
  .MuiLinearProgress-bar {
    background: -webkit-linear-gradient(268.82deg, rgb(115, 55, 255) 12.24%, rgb(49, 69, 255) 98.89%);
  }
  background-color: rgb(255, 255, 255);
`;

const ModalWrapper = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0px 40px;
  div.slick-slide {
    position: relative;
    padding: 0px 20px;
  }
`;
