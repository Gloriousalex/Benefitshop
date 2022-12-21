import { FC } from 'react';
import { withMetadata } from 'common/hoc/withMetadata';
import { METADATA } from 'common/static/metadata';
import MyBenefitContainer from 'containers/MyBenefitContainer/MyBenefitContainer';

const LoginPage: FC = () => {
  return <MyBenefitContainer />;
};

export default withMetadata({
  title: METADATA.MY_BENEFITS.title,
  description: METADATA.MY_BENEFITS.description,
})(LoginPage);
