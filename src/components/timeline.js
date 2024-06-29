import React, { useMemo } from "react";
import { css } from "@emotion/react";
import { mediaQueryLarge, mediaQueryMedium } from "./core";

export function Timeline({ children: _children, border, ...props }) {
  const children = useMemo(() =>
    _children instanceof Array ? _children : [_children]
  );

  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: auto 1fr;

        & > aside {
          text-align: right;
          padding-right: 1rem;
          padding-bottom: 1rem;
          border-right: ${border ?? "2px solid black"};
        }

        & > div {
          padding-left: 1rem;
          padding-bottom: 2rem;
        }

        & > aside:last-of-type {
          padding-bottom: 0px;
        }

        & > div:last-of-type {
          padding-bottom: 0px;
        }
      `}
      {...props}
    >
      {children.map((child, id) => (
        <>
          <aside key={id}>{child.props.date}</aside>

          <div>{child.props.children}</div>
        </>
      ))}
    </div>
  );
}

export const TimelineItem = ({ children }) => children;
