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