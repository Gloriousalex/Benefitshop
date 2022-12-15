import { FC } from 'react';
import { NotFoundContainer } from 'containers';
import { withMetadata } from 'common/hoc/withMetadata';
import { METADATA } from 'common/static/metadata';

const NotFoundPage: FC = () => <NotFoundContainer />;

export default withMetadata({
  title: METADATA.NOT_FOUND.title,
  description: METADATA.NOT_FOUND.description,
})(NotFoundPage);
