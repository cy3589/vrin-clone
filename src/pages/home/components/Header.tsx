import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/Logo';

import { Button as MUIButton } from '@mui/material';
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

const useHeaderTexts = () => {
  const { t } = useTranslation('main');
  const pricing = t('header.pricing');
  const getStartedForFree = t('header.getStartedForFree');
  const freeCopy = t('header.freeCopy');
  const login = t('header.login');
  return { pricing, getStartedForFree, freeCopy, login };
};

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
`;
const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  a {
    color: rgb(255, 255, 255);
  }
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

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import ArrowDown from '../../../assets/ArrowDown';
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

import CheckIcon from '@mui/icons-material/Check';
import { css } from '@emotion/react';

const Header = () => {
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
            <Link to="/">
              <Logo />
            </Link>
            <Right>
              <div>{pricing}</div>
              <LanguageChangerButton
                disableRipple
                css={css`
                  width: 80px;
                  height: 32px;
                  color: rgb(255, 255, 255);
                  font-size: 1.8rem;
                  font-weight: 600;
                  line-height: 140%;
                  letter-spacing: 0px;
                `}
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
              <div style={{ color: 'rgb(110, 133, 252)' }}>{login}</div>
              <GetStartButton>
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

export default Header;
