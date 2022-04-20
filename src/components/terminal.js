import styled from "@emotion/styled";
import React, { useState } from "react";
import { css, jsx } from "@emotion/react";
import { Link } from 'gatsby';

import { Typer, Cursor } from "./typer";


const TerminalWrapper = styled.div`
  background: #142137;
  border-radius: 8px;
  color: white;
  border: white 4px solid;
`;

const TerminalHeader = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row-reverse;
`;

const TerminalHeaderButton = styled.div`
  border-radius: 50%;
  width: 0.875rem;
  height: 0.875rem;
  margin-left: 0.375rem;
  background-color: ${props => props.color}
`;

const TerminalBase = ({styles, children}) => (
  <TerminalWrapper css={styles}>
    <TerminalHeader>
      <TerminalHeaderButton color="#ef4444" />
      <TerminalHeaderButton color="#eab308" />
      <TerminalHeaderButton color="#22c55e" />
    </TerminalHeader>
    <div css={css`
      padding: 1.5rem;
      padding-top: 0px;
    `}>
      {children}
    </div>
  </TerminalWrapper>
);

export const Terminal = ({styles, command, children}) => (
  <TerminalBase styles={styles}>
    <div>
      <span css={css`font-weight: bold`}>
        <span css={css`color: #5ea61b`}>jsimonrichard@jsimonrichard.com</span>
        :<span css={css`color: #3465A4`}>~</span>$
      </span>

      <span> {command}</span>
    </div>

    {children}
  </TerminalBase>
);

export const AnimatedTerminal = ({styles, command, start, startDelay, children}) => {
  const [isRunning, setIsRunning] = useState(true);
  return <Terminal command={(
    <Typer start={start} onFinish={()=>setIsRunning(false)} startDelay={startDelay}>
      {command}
    </Typer>
  )} styles={styles}>
    <div css={css`visibility: ${isRunning ? "hidden" : "visible"}`}>
      {children}<Cursor />
    </div>
  </Terminal>;
}


const TerminalInnerLink = styled.a

export const TerminalLink = (props) => <span>
  [<Link css={css`
    :hover {
      text-decoration: underline;
      color: #86efac;
    }

    text-decoration: none;
    text-transform: uppercase;
    color: #10b981;
  `} {...props}/>]
</span>