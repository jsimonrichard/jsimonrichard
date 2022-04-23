import React from 'react';
import { css } from '@emotion/react';
import { StyledLink } from './core';

export const PostList = ({nodes}) => (
  <>
    {nodes.map(({slug, frontmatter: {title, date, excerpt, tags}}) => (
      <div>
        <StyledLink css={css`font-size: 1.4rem; font-weight: bold`} to={"/"+slug}>
          {title}
        </StyledLink>

        <div>
          Tags: {tags.map(tag => <Tag tag={tag}/>)}
        </div>

        <div css={css`float: right`}>{date}</div>

        <p>
          {excerpt}
        </p>
      </div>
    ))}
  </>
);

export const Tag = ({tag}) => (
  <StyledLink to={`/tags/${tag}`} css={css`
    display: inline-block;
    border-radius: 0.4em;
    background-color: #BBB;
    font-weight: bold;
    padding: 0.4em;
    cursor: pointer;
  `}>
    {tag}
  </StyledLink>
);