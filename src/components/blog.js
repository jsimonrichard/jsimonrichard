import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { StyledLink } from './core';

export const PostList = ({nodes}) => (
  <>
    {nodes.map(({slug, frontmatter: {title, date, excerpt, tags}}) => (
      <div css={css`margin-bottom: 5rem;`}>
        <StyledLink css={css`font-size: 1.4rem; font-weight: bold;`} to={"/blog/"+slug}>
          {title}
        </StyledLink>

        <div css={css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        `}>
          <div>
            Tags: {tags.map(tag => <Tag tag={tag}/>)}
          </div>

          <div>{date}</div>
        </div>

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
    background-color: #dedede;
    font-weight: bold;
    padding: 0.4em;
    margin-right: 0.4rem;
    cursor: pointer;
  `}>
    {tag}
  </StyledLink>
);

export const RefLink = ({href, children}) => <sup><a href={href}>{children}</a></sup>;

export const MLAReference = styled.div`
  margin-left: 2rem;
  text-indent: -2rem;
`;