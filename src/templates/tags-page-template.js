import React from 'react';
import { Layout } from "../components/layout";
import { css } from '@emotion/react';
import { LineHeader, tightContainerStyles } from '../components/core';
import { graphql } from 'gatsby';
import { PostList, Tag } from '../components/blog';

const TagPage = ({pageContext: { tag }, data}) => {
  return (
    <Layout>
      <div css={css`
        ${tightContainerStyles}
        padding-top: 15rem;
      `}>
        <LineHeader>
          Posts with the <Tag tag={tag}/> tag
        </LineHeader>
        
        <PostList nodes={data.allMdx.nodes} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PostsWithTag($tag: String) {
    allMdx(
      sort: {order: DESC, fields: frontmatter___date},
      filter: { frontmatter: {tags: {in: [$tag] } } }
    ) {
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

export default TagPage;