import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from 'react-responsive';
import { useNavigateToRegister } from '../hooks/useNavigateToRegister';

const GetStartButton = styled.button`
  width: fit-content;
  height: auto;
  background: rgb(230, 232, 235);
  border-radius: 6px;
  padding: 16px 56px;

  & > span {
    display: flex;
    align-items: center;
    text-align: center;
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 140%;
    color: rgb(55, 55, 204);
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height: 260px;
  min-height: 200px;
  height: 16vw;
  background: rgb(55, 55, 204);
`;
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Copy = styled.span`
  color: rgb(255, 255, 255);
  text-align: center;
  font-size: 3.2rem;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 16px;
`;

const BottomFixed = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: auto;
  z-index: 998;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 16px 0px;
`;
const BottomFixedButton = styled.button`
  width: calc(100% - 40px);
  padding: 12px 20px;
  border-radius: 4px;
  background-color: rgb(55, 55, 204);
  color: rgb(255, 255, 255);
`;
const Section8 = () => {
  const { onNavigate } = useNavigateToRegister();
  const isMobile = useMediaQuery({ maxWidth: '600px' });
  const { inView, ref } = useInView();
  const { t } = useTranslation('main');
  const copy = t('section8.copy');
  const getStartedForFree = t('section8.getStartedForFree');
  return (
    <>
      <Wrapper ref={ref}>
        <InnerWrapper>
          <Copy>{copy}</Copy>
          <GetStartButton onClick={onNavigate}>
            <span>{getStartedForFree}</span>
          </GetStartButton>
        </InnerWrapper>
      </Wrapper>
      {isMobile && !inView && (
        <BottomFixed>
          <BottomFixedButton onClick={onNavigate}>{getStartedForFree}</BottomFixedButton>
        </BottomFixed>
      )}
    </>
  );
};

export default Section8;
