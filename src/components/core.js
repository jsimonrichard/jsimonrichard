import React, { useMemo } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export function StyledLink(props) {
  return (
    <Link {...props} className={"block text-black no-underline hover:underline hover:text-gray-500 "+props.className}>
      {props.children}
    </Link>
  );
}

export function DynamicAge(props) {
  const age = useMemo(() => new Date(Date.now() - props.startDate).getUTCFullYear() - 1970, [props.startDate]);
  return <span>{age}</span>;
}

export function ScrollArrow(props) {
  return (
    <div {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
      </svg>
    </div>
  );
}