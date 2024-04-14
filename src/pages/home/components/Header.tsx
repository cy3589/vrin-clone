import { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

import { useMediaQuery } from 'react-responsive';

import CheckIcon from '@mui/icons-material/Check';
import { Button as MUIButton } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Logo from '../../../assets/Logo';
import ArrowDown from '../../../assets/ArrowDown';
import { useNavigateToRegister } from '../hooks/useNavigateToRegister';

const useHeaderTexts = () => {
  const { t } = useTranslation('main');
  const pricing = t('header.pricing');
  const getStartedForFree = t('header.getStartedForFree');
  const freeCopy = t('header.freeCopy');
  const login = t('header.login');
  return { pricing, getStartedForFree, freeCopy, login };
};

const HamburgerIcon = () => (
  <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" fill="#FFFFFF" />
  </svg>
);
const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_2786_9881)">
      <path
        d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
        fill="#FFFFFF"
      />
    </g>
    <defs>
      <clipPath id="clip0_2786_9881">
        <rect width="24" height="24" fill="#FFFFFF" />
      </clipPath>
    </defs>
  </svg>
);

const VrinIcon = () => (
  <svg width="46" viewBox="0 0 77 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.107 0.130859L11.8734 17.9937L17.6399 0.130859H23.7391L15.5423 23.87H8.17363L0 0.130859H6.107Z"
      fill="currentColor"
    />
    <path
      d="M38.9987 23.8466L33.8298 14.895H32.5121V23.8466H26.7391V0.136575H36.6064C38.2571 0.0826855 39.8978 0.410461 41.3989 1.09401C42.6283 1.66919 43.6536 2.5999 44.3403 3.76392C45.0108 4.95134 45.3493 6.29505 45.3207 7.65592C45.3658 9.23966 44.8588 10.7903 43.8853 12.0461C42.8226 13.3243 41.3493 14.201 39.7125 14.5292L45.3913 23.87L38.9987 23.8466ZM32.5121 10.9719H36.0966C37.0097 11.0379 37.9143 10.76 38.6301 10.1935C38.9107 9.89608 39.1255 9.54365 39.2606 9.15889C39.3956 8.77413 39.4481 8.36557 39.4145 7.95949C39.4419 7.55746 39.3865 7.15409 39.2517 6.77401C39.1168 6.39393 38.9053 6.04511 38.6301 5.74884C37.9269 5.17036 37.0221 4.89063 36.1123 4.97044H32.5121V10.9719Z"
      fill="currentColor"
    />
    <path d="M53.4783 0.130859V23.87H48.3913V0.130859H53.4783Z" fill="currentColor" />
    <path
      d="M76.8261 23.87H71.2842L62.0202 9.29606V23.87H56.4783V0.130859H62.0202L71.2842 14.8373V0.130859H76.8261V23.87Z"
      fill="currentColor"
    />
  </svg>
);

const MobileHeader = () => {
  const { i18n } = useTranslation('main');
  const { pricing, login } = useHeaderTexts();
  const [openMenu, setOpenMenu] = useState(false);
  const onToggleMenu = useCallback(() => setOpenMenu((p) => !p), []);
  return (
    <Wrapper style={{ height: openMenu ? '180px' : '60px' }}>
      <Container>
        <MobileInnerContainer>
          <MobileLeftWrapper>
            <MobileLeftButtonWrapper>
              <div
                style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center' }}
                onClick={onToggleMenu}>
                {openMenu ? <CloseIcon /> : <HamburgerIcon />}
              </div>
              <a href={'https://vrin.co.kr'}>
                <VrinIcon />
              </a>
            </MobileLeftButtonWrapper>
          </MobileLeftWrapper>
          <MobileLoginText>
            <a href={'https://vrin.co.kr/login'}>{login}</a>
          </MobileLoginText>
        </MobileInnerContainer>
        <div style={{ display: openMenu ? 'flex' : 'none', flexDirection: 'column', gap: '30px', padding: '32px 0px' }}>
          <MobileLogin style={{ opacity: +openMenu }}>
            <a href="https://vrin.co.kr/pricing">{pricing}</a>
          </MobileLogin>
          <MobileLanguageSwitcherWrapper style={{ opacity: +openMenu }}>
            <MobileLanguageText active={i18n.language === 'KR'} onClick={() => i18n.changeLanguage('KR')}>
              KOR
            </MobileLanguageText>
            <MobileLanguageDivider />
            <MobileLanguageText active={i18n.language === 'US'} onClick={() => i18n.changeLanguage('US')}>
              ENG
            </MobileLanguageText>
          </MobileLanguageSwitcherWrapper>
        </div>
      </Container>
    </Wrapper>
  );
};

const HeaderSwitcher = () => {
  const isMobile = useMediaQuery({ maxWidth: '600px' });
  if (isMobile) return <MobileHeader />;
  return <PCHeader />;
};

const PCHeader = () => {
  const { onNavigate } = useNavigateToRegister();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const onOpen = (e: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(e.currentTarget);
  const onClose = () => setAnchorEl(null);

  const { getStartedForFree, pricing, login } = useHeaderTexts();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language === 'KR' ? 'KOR' : 'ENG';
  return (
    <>
      <Wrapper style={{ height: '70px' }}>
        <Container>
          <InnerContainer style={{ height: '100%', textAlign: 'center' }}>
            <a href="/">
              <Logo />
            </a>
            <Right>
              <a href="https://vrin.co.kr/pricing">{pricing}</a>
              <LanguageChangerButton
                disableRipple
                id="language-changer-button"
                aria-controls={open ? 'language-changer-menu' : undefined}
                aria-haspopup
                aria-expanded={open ? 'true' : undefined}
                onClick={onOpen}>
                {currentLanguage}
                <ArrowDownWrapper>
                  <ArrowDown width={24} height={24} />
                </ArrowDownWrapper>
              </LanguageChangerButton>
              <span style={{ color: 'rgb(110, 133, 252)' }}>
                <a href="https://vrin.co.kr/login">{login}</a>
              </span>
              <GetStartButton onClick={onNavigate}>
                <span>{getStartedForFree}</span>
              </GetStartButton>
            </Right>
          </InnerContainer>
        </Container>
      </Wrapper>
      <Menu
        id="language-changer-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={onClose}
        slotProps={{ paper: { style: { backgroundColor: 'rgb(40, 45, 50)', width: '138px', marginTop: '8px' } } }}
        MenuListProps={{ 'aria-labelledby': 'language-changer-button' }}>
        <HeaderMenuItem
          onClick={() => {
            i18n.changeLanguage('KR');
            onClose();
          }}>
          <span style={{ color: i18n.language === 'KR' ? 'rgb(110, 133, 252)' : undefined }}>KOR</span>
          {i18n.language === 'KR' && (
            <div>
              <CheckIcon htmlColor="rgb(110, 133, 252)" />
            </div>
          )}
        </HeaderMenuItem>
        <HeaderMenuItem
          onClick={() => {
            i18n.changeLanguage('US');
            onClose();
          }}>
          <span style={{ color: i18n.language === 'US' ? 'rgb(110, 133, 252)' : undefined }}>ENG</span>
          {i18n.language === 'US' && (
            <div>
              <CheckIcon htmlColor="rgb(110, 133, 252)" />
            </div>
          )}
        </HeaderMenuItem>
      </Menu>
    </>
  );
};

export default HeaderSwitcher;

const GetStartButton = styled(MUIButton)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  border-radius: 4px;
  color: rgb(255, 255, 255);
  background-color: rgb(55, 55, 204);
  & > span {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0px;
  }
`;

const LanguageChangerButton = styled(MUIButton)`
  width: 80px;
  height: 32px;
  color: rgb(255, 255, 255);
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: 0px;

  @media only screen and (max-width: 1024px) {
    margin-right: 24px;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 999;
  background: rgba(0, 0, 0, 0.5);
`;
const Container = styled.div`
  padding: 0px 80px;
  height: 100%;
  @media only screen and (max-width: 1024px) {
    padding: 0px 70px;
  }
  @media only screen and (max-width: 600px) {
    padding: 0px 20px;
  }
`;
const InnerContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  a {
    color: rgb(255, 255, 255);
  }
  & > span {
    color: rgb(110, 133, 252);
  }
`;
const MobileInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: auto;
  padding-top: 17px;
  a {
    color: rgb(255, 255, 255);
  }
  & > span {
    color: rgb(110, 133, 252);
  }
`;
const MobileLoginText = styled.span`
  width: fit-content;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: 0px;
  cursor: pointer;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  margin: 0px;
  margin-left: 20px;
  gap: 60px;
  & > * {
    color: white;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 140%;
    letter-spacing: 0px;
    cursor: pointer;
  }

  @media only screen and (max-width: 1024px) {
    gap: 32px;
  }
  @media only screen and (max-width: 768px) {
    gap: 24px;
  }
`;

const MobileLeftButtonWrapper = styled.div`
  display: flex;
  column-gap: 16px;
  align-items: center;
`;

const MobileLanguageDivider = styled.div`
  display: flex;
  width: 1px;
  height: 18px;
  background-color: rgb(111, 117, 123);
  margin: 0px 8px;
`;

const MobileLanguageText = styled.span<{ active: boolean }>`
  width: fit-content;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: 0px;
  cursor: pointer;
  color: ${({ active }) => (active ? 'rgb(255, 255, 255)' : 'rgb(86, 93, 99)')};
`;
const MobileLogin = styled.span`
  color: rgb(255, 255, 255);
  width: fit-content;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: 0px;
  cursor: pointer;
`;

const MobileLanguageSwitcherWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ArrowDownWrapper = styled.div`
  position: absolute;
  top: 4px;
  right: -6px;
  color: rgb(111, 117, 123);
  & > svg {
    fill: currentColor;
  }
`;

const HeaderMenuItem = styled(MenuItem)`
  display: flex;
  justify-content: space-between;
  padding: 8px 20px;
  width: 100%;
  cursor: pointer;
  color: rgb(255, 255, 255);
`;

const MobileLeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
