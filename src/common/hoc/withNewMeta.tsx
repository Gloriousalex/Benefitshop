import HeaderHelmet from 'common/components/HeaderHelmet/HeaderHelmet';
import { Component, FC } from 'react';
import { Helmet } from 'react-helmet-async';

interface Meta {
  title: string;
  description: string;
}

export const withnewMeta = (meta: Meta) => (WrappedRoute: FC) => {
  return class WithMetadata extends Component {
    render() {
      return (
        <>
          <HeaderHelmet title={meta?.title} description={meta?.description} />

          <WrappedRoute {...this.props} />
        </>
      );
    }
  };
};
