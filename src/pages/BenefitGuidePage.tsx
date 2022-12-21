import { FC } from 'react';
import { withMetadata } from 'common/hoc/withMetadata';
import { METADATA } from 'common/static/metadata';
import GuideContainer from 'containers/GuideContainer/GuideContainer';

const BenefitGuidePage: FC = () => <GuideContainer />;

export default withMetadata({
  title: METADATA.BENEFITS_GUIDE.title,
  description: METADATA.BENEFITS_GUIDE.description,
})(BenefitGuidePage);
