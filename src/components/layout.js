import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import favicon from '../images/favicon.ico';
import { containerStyles, mediaQueryMedium, StyledLink, StyledExternalLink } from './core';


const navItemStyles = css`
  color: black;

  display: none;
  align-items: center;

  text-decoration: none;
  :hover {
    text-decoration: underline;
  }

  padding-top: 1rem;

  @media (min-width: 620px) {
    border-left: 1px solid black;
    padding: 0rem 2rem;
    display: flex;
  }

  &:first-child {
    border-left: none;
    padding-top: 0px;
    padding-left: 0px;
  }

`;

const NavItem = styled(Link)`${navItemStyles}`;
const ExternalNavItem = styled.a`${navItemStyles}`;

const FooterColumn = styled.div`
  padding: 3rem;
  flex: 0 1 auto;
`;

export const Layout = ({fillHeader=true, children}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div css={css`min-height: 100vh`}>
      <Helmet>
        <title>J. Simon Richard</title>
        <link rel="icon" href={favicon} />
      </Helmet>

      <header css={css`
        position: fixed;
        padding: 1.5rem;
        width: 100vw;
        box-sizing: border-box;
        z-index: 10;
        background-color: ${fillHeader ? "white" : "transparent"};
        border-bottom: ${fillHeader ? "1px solid black" : "none"};
        transition: background-color 500ms;
        transision: border-bottom 500ms;

        display: flex;
        flex-direction: column;
        align-items: stretch;

        @media (min-width: 620px) {
          flex-direction: row;
        }

      `}>
          <div css={css`
            display: flex;
            align-items: center;
          `}>
            <NavItem css={css`
              font-weight: bold;
              font-size: 1.6rem;
              text-decoration: none !important;
              display: flex;
            `} to="/">J. Simon Richard</NavItem>

            <div css={css`flex: 1 0 auto`} />

            <MenuRoundedIcon css={css`
              cursor: pointer;
              float: right;
              padding: 0rem 1rem;

              @media (min-width: 620px) {
                display: none;
              }
            `} onClick={()=>setExpanded(!expanded)} />
          </div>

          <NavItem to="/blog" css={expanded && css`display: flex`}>Blog</NavItem>

          <ExternalNavItem href="https://github.com/jsimonrichard" target="_blank" css={expanded && css`display: flex`}>GitHub</ExternalNavItem>
      </header>

      <main>
        {children}
      </main>

      <footer css={css`
        background-color: #EEE;
      `}>
        <div css={css`
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          align-items: start;
          
          ${mediaQueryMedium(css`
            flex-direction: row;
          `)}

          ${containerStyles}
        `}>
          <FooterColumn>
            <StyledLink to="/" className="text-xl font-bold" css={css`
              font-weight: bold;
              font-size: 1.4rem;
            `}>Home</StyledLink>

            <StyledLink to="/#about">About</StyledLink>
            <StyledLink to="/#education">Education</StyledLink>
            <StyledLink to="/#work">Work Experiences</StyledLink>
            <StyledLink to="/#skills">Skills</StyledLink>
            <StyledLink to="/#interest">Interests</StyledLink>
          </FooterColumn>

          <FooterColumn>
              <StyledLink to="/blog" css={css`
                font-weight: bold;
                font-size: 1.4rem;
              `}>
                Blog
              </StyledLink>
          </FooterColumn>

          <FooterColumn>
            <h2 css={css`
              font-size: 1.4rem;
              margin-top: 0px;
            `}>Social</h2>

            <StyledExternalLink href="https://www.linkedin.com/in/jsimonrichard/" target="_blank">
              LinkedIn
            </StyledExternalLink>

            <StyledExternalLink href="https://www.instagram.com/jsimonrichard/" target="_blank">
              Instagram
            </StyledExternalLink>
          </FooterColumn>

          <FooterColumn>
            <h2 css={css`
              font-size: 1.4rem;
              margin: 0px;
            `}>Contact Me</h2>
            
            <StyledExternalLink href="mailto:jsimonrichard@gmail.com">
              jsimonrichard@gmail.com
            </StyledExternalLink>
          </FooterColumn>
        </div>

        <div css={css`
          padding: 1rem;
          margin: auto;
          width: fit-content;
        `}>
          Copywrite © {new Date().getFullYear()} J. Simon Richard
        </div>
      </footer>
    </div>
  );
};