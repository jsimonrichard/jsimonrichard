import React from 'react';
import { Layout } from "../../components/layout";
import { css } from '@emotion/react';
import { LineHeader, tightContainerStyles } from '../../components/core';
import { graphql } from 'gatsby';
import { PostList } from '../../components/blog';

const BlogHomePage = ({data}) => {
  return (
    <Layout>
      <div css={css`
        ${tightContainerStyles}
        padding-top: 7rem;
      `}>
        <LineHeader>Posts</LineHeader>
        
        <PostList nodes={data.allMdx.nodes} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query Posts {
    allMdx(sort: {order: DESC, fields: frontmatter___date}) {
      nodes {
        slug
        frontmatter {
          title
          date
          excerpt
          tags
        }
      }
    }
  }
`;

export default BlogHomePage;