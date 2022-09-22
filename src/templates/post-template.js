import { tightContainerStyles, ClassicLink } from "../components/core"
import { Layout } from "../components/layout";
import React from 'react';
import { css } from '@emotion/react';
import { Tag } from "../components/blog";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

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

const DefaultBlogTemplate = ({ data }) => {
  const frontmatter = data.mdx.frontmatter;

  return (
    <Layout>
      <div css={css`
        ${tightContainerStyles}
        padding-top: 7rem;
        overflow-wrap: anywhere;
        padding-bottom: 2rem;
      `}>
        <Header {...frontmatter} />
        <MDXRenderer>
          {data.mdx.body}
        </MDXRenderer>
        {frontmatter.attachments != null && (
          <h3 css={css`margin-top: 3rem;`}>Attachments</h3>
        )}
        {frontmatter.attachments != null && frontmatter.attachments.map(attachment => {
          return (
            <ClassicLink key={attachment.publicURL} href={attachment.publicURL}  target="_blank">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> {attachment.name}
            </ClassicLink>
          );
        })}
      </div>
    </Layout>
  )
};

export const query = graphql`
  query($slug: String) {
    mdx(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
        date
        tags
        attachments {
          name
          publicURL
        }
      }
      body
    }
  }
`;

export default DefaultBlogTemplate;