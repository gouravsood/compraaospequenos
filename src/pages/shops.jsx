import React from 'react';

import SEO from 'Components/SEO';
import Hero from 'Components/Hero';
import Shops from 'Components/Shops/Shops';

import PageWrapper from 'Layouts/PageWrapper';

export default () => (
  <PageWrapper>
    <SEO title="Lista de Negócios" />
    <Hero background="shopsBg" />
    <Shops />
  </PageWrapper>
);
