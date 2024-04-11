import { useTranslation } from 'react-i18next';
import WithVideoSection from './WithVideoSection';

const useSection3Texts = () => {
  const { t } = useTranslation('main');
  const title1 = t('section3.title1');
  const title2 = t('section3.title2');
  const description1 = t('section3.description1');
  return { title1, title2, description1 };
};

const Section3 = () => {
  const { description1, title1, title2 } = useSection3Texts();

  return (
    <WithVideoSection
      description1={description1}
      title1={title1}
      title2={title2}
      mobileVideo="/assets/vrin-home_content_2_mob.mp4"
      tabletVideo="/assets/vrin-home_content_2_tablet.mp4"
      pcVideo="/assets/vrin-home_content_2_PC.mp4"
    />
  );
};

export default Section3;
