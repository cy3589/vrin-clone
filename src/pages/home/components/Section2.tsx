import { useTranslation } from 'react-i18next';
import WithVideoSection from './WithVideoSection';

const useSection2Texts = () => {
  const { t } = useTranslation('main');
  const title1 = t('section2.title1');
  const title2 = t('section2.title2');
  const description1 = t('section2.description1');
  const description2 = t('section2.description2');
  return { title1, title2, description1, description2 };
};

const Section2 = () => {
  const { description1, description2, title1, title2 } = useSection2Texts();

  return (
    <WithVideoSection
      description1={description1}
      description2={description2}
      title1={title1}
      title2={title2}
      mobileVideo="/assets/vrin-home_content_1_mob.mp4"
      tabletVideo="/assets/vrin-home_content_1_tablet.mp4"
      pcVideo="/assets/vrin-home_content_1_PC.mp4"
    />
  );
};

export default Section2;
