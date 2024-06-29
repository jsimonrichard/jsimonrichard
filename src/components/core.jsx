import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import React, { useMemo } from 'react';

export const StyledLink = styled(Link)`
  display: block;
  color: black;
  text-decoration: none;

  :hover {
    text-decoration: underline;
    color: #555;
  }
`;

export const StyledExternalLink = styled.a`
  display: block;
  color: black;
  text-decoration: none;

  :hover {
    text-decoration: underline;
    color: #555;
  }
`;

export const ClassicLink = styled.a`
  display: inline;
  text-decoration: none;
  color: #1d4ed8;

  :hover {
    color: #1e3a8a;
    text-decoration: underline;
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 0.5rem;
  text-indent: 2rem;
`;

export function DynamicAge(props) {
  const age = useMemo(() => new Date(Date.now() - props.startDate).getUTCFullYear() - 1970, [props.startDate]);
  return <span>{age}</span>;
}

export const mediaQueryLarge = (styles) => css`
  @media (min-width: 1300px) {
    ${styles}
  }
`;

export const mediaQueryMedium = (styles) => css`
  @media (min-width: 620px) {
    ${styles}
  }
`;


export const containerStyles = css`
  margin: auto;
  width: 90%;
  box-sizing: border-box;
  ${mediaQueryLarge(css`
    width: ${0.9 * 1300}px;
  `)}
`;

export const tightContainerStyles = css`
  margin: auto;
  width: 90%;
  box-sizing: border-box;
  @media (min-width: 800px) {
    width: ${0.9 * 800}px;
  }
`;

export const blogContainerStyles = css`
  ${tightContainerStyles}
  ${mediaQueryMedium(css`
    padding-top: 15rem;
  `)}
`

export const Container = styled.section`${containerStyles}`


export const LineHeader = ({ children, ...props }) => <div css={css`
  margin-top: 5rem;
  margin-bottom: 3rem;
  text-align: center;
  width: 100%;
  height: fit-content;
  overflow: hidden;
  font-size: 1.6rem;
`} {...props}>
  <span css={css`
    display: inline-block;
    position: relative;
    font-weight: bold;

    ::before, ::after {
      content: "";
      position: absolute;
      height: 3px;
      border-bottom: 1px solid currentColor;
      border-top: 1px solid currentColor;
      top: 40%;
      width: 50vw;
    }

    ::before {
      right: 100%;
      margin-right: 15px;
    }

    ::after {
      left: 100%;
      margin-left: 15px;
    }
  `}>{children}</span>
</div>;

export const FullScreen = styled.section`
  width: 100vw;
  max-width: 100%;
  min-height: 100vh;
`;
