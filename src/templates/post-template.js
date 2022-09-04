import { tightContainerStyles } from "../components/core"
import { Layout } from "../components/layout";
import React from 'react';
import { css } from '@emotion/react';
import { Tag } from "../components/blog";
import Helmet from "react-helmet";

const Header = ({title, date, tags}) => (
  <div css={css`margin-bottom: 5rem;`}>

    <Helmet>
      <title>J. Simon Richard - {title}</title>
    </Helmet>
    <h1 css={css`margin-bottom: 0px;`}>{title}</h1>

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

  </div>
);

const DefaultBlogTemplate = ({children, pageContext: {frontmatter}}) => {
  return (
    <Layout>
      <div css={css`
        ${tightContainerStyles}
        padding-top: 7rem;
        overflow-wrap: anywhere;
        padding-bottom: 2rem;
      `}>
        <Header {...frontmatter} />
        {children}
      </div>
    </Layout>
  )
};

export default DefaultBlogTemplate;