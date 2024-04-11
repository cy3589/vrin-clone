import { useTranslation } from 'react-i18next';
import WithVideoSection from './WithVideoSection';

const useSection4Texts = () => {
  const { t } = useTranslation('main');
  const title1 = t('section4.title1');
  const title2 = t('section4.title2');
  const description1 = t('section4.description1');
  return { title1, title2, description1 };
};

const Section4 = () => {
  const { description1, title1, title2 } = useSection4Texts();

  return (
    <WithVideoSection
      description1={description1}
      title1={title1}
      title2={title2}
      mobileVideo="/assets/vrin-home_content_3_mob.mp4"
      tabletVideo="/assets/vrin-home_content_3_tablet.mp4"
      pcVideo="/assets/vrin-home_content_3_PC.mp4"
    />
  );
};

export default Section4;
