import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

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