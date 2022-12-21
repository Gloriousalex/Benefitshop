import { FC } from 'react';
import { withMetadata } from 'common/hoc/withMetadata';
import { METADATA } from 'common/static/metadata';
import BenefitsMapContainer from 'containers/BenefitsMapContainer/BenefitsMapContainer';

const BenefitsMapPage: FC = () => <BenefitsMapContainer />;

export default withMetadata({
  title: METADATA.Benefits_Map.title,
  description: METADATA.Benefits_Map.description,
})(BenefitsMapPage);
