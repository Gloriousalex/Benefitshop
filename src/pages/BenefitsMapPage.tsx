import { FC } from 'react';
import { withMetadata } from 'common/hoc/withMetadata';
import { METADATA } from 'common/static/metadata';
import BenefitsMapContainer from 'containers/BenefitsMapContainer/BenefitsMapContainer';

const BenefitsMapPage: FC = () => <BenefitsMapContainer />;

export default withMetadata({
  title: METADATA.BENEFITS_MAP.title,
  description: METADATA.BENEFITS_MAP.description,
})(BenefitsMapPage);
