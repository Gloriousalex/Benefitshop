import { FC } from 'react';
import { withMetadata } from 'common/hoc/withMetadata';
import { METADATA } from 'common/static/metadata';
import MyBenefitContainer from 'containers/MyBenefitContainer/MyBenefitContainer';

const LoginPage: FC = () => <MyBenefitContainer />;

export default withMetadata({
  title: METADATA.LOGIN.title,
  description: METADATA.LOGIN.description,
})(LoginPage);
