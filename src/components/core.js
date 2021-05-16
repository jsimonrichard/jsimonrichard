import React from 'react';
import { Link } from 'react-router-dom';

export function StyledLink(props) {
  return (
    <Link {...props} className={"block text-black no-underline hover:underline hover:text-gray-500 "+props.className}>
      {props.children}
    </Link>
  );
}