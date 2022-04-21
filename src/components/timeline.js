import React from 'react';
import { css } from '@emotion/react';
import { mediaQueryLarge, mediaQueryMedium } from './core';

export function Timeline({children}) {
  return (
    <div css={css`
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));

      ${mediaQueryMedium(css`
        grid-template-columns: repeat(4, minmax(0, 1fr));
      `)}

      ${mediaQueryLarge(css`
        grid-template-columns: repeat(5, minmax(0, 1fr));
      `)}
    `}>
      {children.map((child,id) => (
        <>
          <div css={css`
            text-align: right;
            padding-right: 1rem;
            padding-bottom: 1rem;
            border-right: 2px solid black;
          `} key={id}>
            {child.props.date}
          </div>

          <div css={css`
            padding-left: 1rem;
            padding-bottom: 2rem;
            grid-column: 2 / -1;
          `}>
            {child.props.children}
          </div>
        </>
      ))}
    </div>
  )
}

export const TimelineItem = ({children}) => children;