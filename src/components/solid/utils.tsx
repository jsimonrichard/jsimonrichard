import { clsx, ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { JSX } from 'solid-js';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const JoinElements = ({
  elements,
  separator,
}: {
  elements: JSX.Element[];
  separator: JSX.Element;
}): JSX.Element[] => {
  return elements.reduce<JSX.Element[]>((prev, curr, i) => {
    if (i === 0) return [curr];
    // this is slow :(
    return [...prev, separator, curr];
  }, []);
};

export const englishList = (list: JSX.Element[]) => {
  if (list.length === 1) {
    return list[0];
  } else if (list.length === 2) {
    return <JoinElements elements={list} separator={' and '} />;
  } else {
    return [
      <JoinElements elements={list.slice(0, -1)} separator={', '} />,
      ' and ',
      list[list.length - 1],
    ];
  }
};
