import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface IMETA {
  title: string;
  description: string;
}

const HeaderHelmet = (meta: IMETA) => {
  const { t } = useTranslation('metadata');
  return (
    <Helmet>
      <title>{t(meta?.title)}</title>
      <meta name="description" content={meta?.description} />
    </Helmet>
  );
};

export default HeaderHelmet;
