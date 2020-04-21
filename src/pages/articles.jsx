import React from 'react';

import { graphql } from 'gatsby';

import SEO from 'Components/SEO';
import PageWrapper from 'Layouts/PageWrapper';
import Section from 'Layouts/Section';
import Articles from 'Components/Articles/Articles';

export default ({ data, location }) => {
  const { edges: articles } = data.allMarkdownRemark;

  return (
    <PageWrapper>
      <SEO title="Articles" location={ location }/>
      <Section>
        <h1>Articles</h1>
        <Articles articles={ articles } />
      </Section>
    </PageWrapper>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(filter: {
      frontmatter: {
        templateKey: {eq: "article"},
      },
    }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`;
