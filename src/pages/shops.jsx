import React from 'react';

import SEO from 'Components/SEO';
import Hero from 'Components/Hero';
import Shops from 'Components/Shops/Shops';

import PageWrapper from 'Layouts/PageWrapper';

export default ({ location }) => (
  <PageWrapper>
    <SEO title="Lista de Negócios" location={ location } />
    <Hero background="shopsBg" />
    <Shops />
  </PageWrapper>
);
