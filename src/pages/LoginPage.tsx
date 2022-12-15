import { FC } from 'react';
import { LoginContainer } from 'containers';
import { withMetadata } from 'common/hoc/withMetadata';
import { METADATA } from 'common/static/metadata';

const LoginPage: FC = () => <LoginContainer />;

export default withMetadata({
  title: METADATA.LOGIN.title,
  description: METADATA.LOGIN.description,
})(LoginPage);
