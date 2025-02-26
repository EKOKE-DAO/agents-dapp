import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet as HelmetImport, HelmetProps } from 'react-helmet';

export const Helmet = HelmetImport as React.ComponentClass<HelmetProps>;

const SITE_URL = 'https://agents.ekokedao.com';

const SeoEngine = () => {
  const { pathname } = useLocation();

  const canonicalUrl = `${SITE_URL}${pathname}`;

  return (
    <Helmet>
      <html lang={'en_US'} />
      <link rel="canonical" href={canonicalUrl} />
      <title>{'Agents D-App | EKOKE'}</title>
      <meta
        name="description"
        content={'Agents properties frontend for EKOKE DAO agents'}
      />
      <meta property="og:title" content={'Agents D-App | EKOKE'} />
      <meta
        property="og:description"
        content={'Agents properties frontend for EKOKE DAO agents'}
      />
      <meta property="og:type" content={'website'} />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="robots" content="noindex" />
      <meta property="og:site_name" content={'Agents D-App | EKOKE'} />
      <meta property="og:locale" content={'en_US'} />
    </Helmet>
  );
};

export default SeoEngine;
