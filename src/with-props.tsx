import clsx, { ClassValue } from 'clsx';
import {
  Component,
  ComponentProps,
  ValidComponent,
  mergeProps,
} from 'solid-js';
import { twMerge } from 'tailwind-merge';
import { Dynamic } from 'solid-js/web';

export type ResolvePropsCallback<
  T extends ValidComponent,
  ExtraProps extends {} = {},
> = (
  props: Omit<ComponentProps<T>, keyof ExtraProps> & Partial<ComponentProps<T>>,
  extraProps: ExtraProps,
) => Partial<ComponentProps<T>>;

export const resolveClasses: ResolvePropsCallback<any> = (
  props,
  extraProps,
) => ({
  class:
    props.class &&
    'class' in extraProps &&
    twMerge(clsx(extraProps.class as ClassValue, props.class)),
});

export type PropsWithout<
  T extends ValidComponent,
  U extends ValidComponent,
  ExtraProps extends {} = {},
> = Omit<ComponentProps<T>, keyof ExtraProps> &
  Partial<ComponentProps<T>> & {
    as?: Component<ComponentProps<T> & ComponentProps<U>>;
  } & ComponentProps<U>;

export function withProps<
  T extends ValidComponent,
  ExtraPropInputs extends {} = {},
  ExtraProps extends {} = {},
>(
  Comp: T,
  extraProps:
    | ExtraProps
    | ((props: ExtraPropInputs & Partial<ComponentProps<T>>) => ExtraProps),
  excludeFromComponentProps: (keyof ExtraPropInputs)[] = [],
  resolveProps: ResolvePropsCallback<T, ExtraProps> = resolveClasses,
) {
  return <U extends ValidComponent>(
    props: PropsWithout<T, U, ExtraProps> & ExtraPropInputs,
  ) => {
    let filteredProps: PropsWithout<T, U, ExtraProps>;

    let extraPropsCalculated: ExtraProps | undefined = undefined;
    if (extraProps instanceof Function) {
      extraPropsCalculated = extraProps(props);
      // filter props
      filteredProps = Object.keys(props)
        .filter(
          (key) =>
            !excludeFromComponentProps.includes(key as keyof ExtraPropInputs),
        )
        .reduce((newObj: PropsWithout<T, U, ExtraProps>, key) => {
          // combine same keys
          newObj[key] = props[key];
          return newObj;
        }, {} as PropsWithout<T, U, ExtraProps>);
    } else {
      extraPropsCalculated = extraProps;
      filteredProps = props;
    }

    let dynamicProps = {};
    if (resolveProps) {
      dynamicProps = resolveProps(filteredProps, extraPropsCalculated);
    }

    const totalProps = mergeProps(extraPropsCalculated, props, dynamicProps);
    return <Dynamic component={props.as ?? Comp} {...totalProps} />;
  };
}
