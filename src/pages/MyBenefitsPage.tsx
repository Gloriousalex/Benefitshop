import { FC } from 'react';
import { withMetadata } from 'common/hoc/withMetadata';
import { METADATA } from 'common/static/metadata';
import MyBenefitContainer from 'containers/MyBenefitContainer/MyBenefitContainer';

const LoginPage: FC = () => {
  return <MyBenefitContainer />;
};

export default withMetadata({
  title: METADATA.My_Benefits.title,
  description: METADATA.My_Benefits.description,
})(LoginPage);
