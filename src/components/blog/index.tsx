import type { ComponentProps } from 'solid-js';

export const RefLink = (props: ComponentProps<'a'>) => {
  return (
    <sup>
      <a {...props} />
    </sup>
  );
};
