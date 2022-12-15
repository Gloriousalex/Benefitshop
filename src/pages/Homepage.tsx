import { FC } from 'react';
import { HomeContainer } from 'containers';
import { withMetadata } from 'common/hoc/withMetadata';
import { METADATA } from 'common/static/metadata';

const HomePage: FC = () => <HomeContainer />;

export default withMetadata({
  title: METADATA.HOME.title,
  description: METADATA.HOME.description,
})(HomePage);
