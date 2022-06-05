import css, { get } from '@styled-system/css';
import { createShouldForwardProp } from '@styled-system/should-forward-prop';
import {
  background,
  border,
  color,
  compose,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  system,
  typography,
} from 'styled-system';

export const variant = (props: any) => {
  return css(get(props.theme, `Components.${props.variant}`, {}))(props.theme);
};

export const pseudo = (props: any) => {
  return css({
    '&:hover,&[data-hover=true]': props._hover,
    '&:active,&[data-active=true]': props._active,
    '&:focus,&[data-focus=true]': props._focus,
    '&:[data-highlighted]': props._highlighted,
    '&:focus-within': props._focusWithin,
    '&:focus-visible': props._focusVisible,
    '&[disabled=true],&[aria-disabled=true],&[data-disabled=true]':
      props._disabled,
    '&[aria-readonly=true],&[readonly],&[data-readonly=true]': props._readOnly,
    '&::before': props._before,
    '&::after': props._after,
    '&:empty': props._empty,
    '&[aria-expanded=true],&[data-expanded=true]': props._expanded,
    '&[aria-checked=true],&[data-checked=true]': props._checked,
    '&[aria-grabbed=true],&[data-grabbed=true]': props._grabbed,
    '&[aria-pressed=true],&[data-pressed=true]': props._pressed,
    '&[aria-invalid=true],&[data-invalid=true]': props._invalid,
    '&[data-valid=true],&[data-state=valid]': props._valid,
    '&[data-loading=true],&[aria-busy=true]': props._loading,
    '&[aria-selected=true],&[data-selected=true]': props._selected,
    '&[hidden],&[data-hidden=true]': props._hidden,
    '&:nth-of-type(even)': props._even,
    '&:nth-of-type(odd)': props._odd,
    '&:first-of-type': props._first,
    '&:last-of-type': props._last,
    '&:not(:first-of-type)': props._notFirst,
    '&:not(:last-of-type)': props._notLast,
    '&:visited': props._visited,
    '&[aria-current=page]': props._activeLink,
    '&[aria-current=step]': props._activeStep,
    '&:indeterminate,&[aria-checked=mixed],&[data-indeterminate=true]':
      props._indeterminate,
    '&::placeholder': props._placeholder,
    '&::placeholder-shown': props._placeholderShown,
    '&:fullscreen': props._fullScreen,
    '&::selection': props._selection,
  })(props.theme);
};

export const other = system({
  bgColor: { property: 'backgroundColor', scale: 'colors' },
  bgClip: { property: 'backgroundClip' },
  textTransform: { property: 'textTransform' },
  textDecoration: { property: 'textDecoration' },
  boxSize: {
    properties: ['minWidth', 'width', 'minHeight', 'height'],
    scale: 'sizes',
  },
  backdropFilter: { property: 'backdropFilter' },
  gap: { property: 'gap' },
  bgImage: { property: 'backgroundImage' },
  bgSize: { property: 'backgroundSize' },
  bgPosition: { property: 'backgroundPosition' },
  bgRepeat: { property: 'backgroundRepeat' },
  bgAttachment: { property: 'backgroundAttachment' },
  animation: { property: 'animation' },
  appearance: { property: 'appearance' },
  content: { property: 'content' },
  transform: { property: 'transform' },
  transformOrigin: { property: 'transformOrigin' },
  visibility: { property: 'visibility' },
  whiteSpace: { property: 'whiteSpace' },
  userSelect: { property: 'userSelect' },
  pointerEvents: { property: 'pointerEvents' },
  wordBreak: { property: 'wordBreak' },
  overflowWrap: { property: 'overflowWrap' },
  textOverflow: { property: 'textOverflow' },
  boxSizing: { property: 'boxSizing' },
  cursor: { property: 'cursor' },
  resize: { property: 'resize' },
  transition: { property: 'transition' },
  filter: { property: 'filter' },
  objectFit: { property: 'objectFit' },
  objectPosition: { property: 'objectPosition' },
  float: { property: 'float' },
  fill: { property: 'fill' },
  stroke: { property: 'stroke' },
  outline: { property: 'outline' },
  textFillColor: { property: 'WebkitTextFillColor' },
});

export const style = compose(
  space,
  color,
  typography,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
  other
);

export const shouldForwardProp = createShouldForwardProp(style.propNames || []);
