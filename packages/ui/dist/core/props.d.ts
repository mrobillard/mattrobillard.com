/// <reference types="react" />
import { ResponsiveStyleValue, SystemStyleObject } from '@styled-system/css';
import * as CSS from 'csstype';
import { BackgroundProps, BorderProps, ColorProps, FlexboxProps, GridProps, LayoutProps, PositionProps, ResponsiveValue, ShadowProps, SpaceProps, TypographyProps } from 'styled-system';
export interface BaseProps extends React.RefAttributes<any> {
    as?: React.ElementType | undefined;
}
export declare type PseudoStyleProp = SystemStyleObject | Record<string, SystemStyleObject | ResponsiveStyleValue<number | string> | Record<string, SystemStyleObject | ResponsiveStyleValue<number | string>>>;
export interface PseudoProps {
    _hover?: PseudoStyleProp | undefined;
    _active?: PseudoStyleProp | undefined;
    _focus?: PseudoStyleProp | undefined;
    _highlighted?: PseudoStyleProp | undefined;
    _focusWithin?: PseudoStyleProp | undefined;
    _focusVisible?: PseudoStyleProp | undefined;
    _disabled?: PseudoStyleProp | undefined;
    _readOnly?: PseudoStyleProp | undefined;
    _before?: PseudoStyleProp | undefined;
    _after?: PseudoStyleProp | undefined;
    _empty?: PseudoStyleProp | undefined;
    _expanded?: PseudoStyleProp | undefined;
    _checked?: PseudoStyleProp | undefined;
    _grabbed?: PseudoStyleProp | undefined;
    _pressed?: PseudoStyleProp | undefined;
    _invalid?: PseudoStyleProp | undefined;
    _valid?: PseudoStyleProp | undefined;
    _loading?: PseudoStyleProp | undefined;
    _selected?: PseudoStyleProp | undefined;
    _hidden?: PseudoStyleProp | undefined;
    _even?: PseudoStyleProp | undefined;
    _odd?: PseudoStyleProp | undefined;
    _first?: PseudoStyleProp | undefined;
    _last?: PseudoStyleProp | undefined;
    _notFirst?: PseudoStyleProp | undefined;
    _notLast?: PseudoStyleProp | undefined;
    _visited?: PseudoStyleProp | undefined;
    _activeLink?: PseudoStyleProp | undefined;
    _activeStep?: PseudoStyleProp | undefined;
    _indeterminate?: PseudoStyleProp | undefined;
    _placeholder?: PseudoStyleProp | undefined;
    _placeholderShown?: PseudoStyleProp | undefined;
    _fullScreen?: PseudoStyleProp | undefined;
    _selection?: PseudoStyleProp | undefined;
}
export interface OtherProps {
    bgColor?: ResponsiveValue<CSS.Property.BackgroundColor> | undefined;
    bgClip?: ResponsiveValue<CSS.Property.BackgroundClip> | undefined;
    textTransform?: ResponsiveValue<CSS.Property.TextTransform> | undefined;
    textDecoration?: ResponsiveValue<CSS.Property.TextDecoration> | undefined;
    boxSize?: ResponsiveValue<CSS.Property.Width> | undefined;
    gap?: ResponsiveValue<CSS.Property.Gap> | undefined;
    backdropFilter?: ResponsiveValue<CSS.Property.BackdropFilter> | undefined;
    bgImage?: ResponsiveValue<CSS.Property.BackgroundImage> | undefined;
    bgSize?: ResponsiveValue<CSS.Property.BackgroundSize> | undefined;
    bgPosition?: ResponsiveValue<CSS.Property.BackgroundPosition> | undefined;
    bgRepeat?: ResponsiveValue<CSS.Property.BackgroundRepeat> | undefined;
    bgAttachment?: ResponsiveValue<CSS.Property.BackgroundAttachment> | undefined;
    animation?: ResponsiveValue<CSS.Property.Animation> | undefined;
    appearance?: ResponsiveValue<CSS.Property.Appearance> | undefined;
    content?: ResponsiveValue<CSS.Property.Content> | undefined;
    transform?: ResponsiveValue<CSS.Property.Transform> | undefined;
    transformOrigin?: ResponsiveValue<CSS.Property.TransformOrigin> | undefined;
    visibility?: ResponsiveValue<CSS.Property.Visibility> | undefined;
    whiteSpace?: ResponsiveValue<CSS.Property.WhiteSpace> | undefined;
    userSelect?: ResponsiveValue<CSS.Property.UserSelect> | undefined;
    pointerEvents?: ResponsiveValue<CSS.Property.PointerEvents> | undefined;
    wordBreak?: ResponsiveValue<CSS.Property.WordBreak> | undefined;
    overflowWrap?: ResponsiveValue<CSS.Property.OverflowWrap> | undefined;
    textOverflow?: ResponsiveValue<CSS.Property.TextOverflow> | undefined;
    boxSizing?: ResponsiveValue<CSS.Property.BoxSizing> | undefined;
    cursor?: ResponsiveValue<CSS.Property.Cursor> | undefined;
    resize?: ResponsiveValue<CSS.Property.Resize> | undefined;
    transition?: ResponsiveValue<CSS.Property.Transition> | undefined;
    filter?: ResponsiveValue<CSS.Property.Filter> | undefined;
    objectFit?: ResponsiveValue<CSS.Property.ObjectFit> | undefined;
    objectPosition?: ResponsiveValue<CSS.Property.ObjectPosition> | undefined;
    float?: ResponsiveValue<CSS.Property.Float> | undefined;
    fill?: ResponsiveValue<CSS.Property.Fill> | undefined;
    stroke?: ResponsiveValue<CSS.Property.Stroke> | undefined;
    outline?: ResponsiveValue<CSS.Property.Outline> | undefined;
    textFillColor?: ResponsiveValue<CSS.Property.WebkitTextFillColor> | undefined;
}
export interface StyleProps extends BaseProps, SpaceProps, ColorProps, TypographyProps, LayoutProps, FlexboxProps, GridProps, BackgroundProps, BorderProps, PositionProps, ShadowProps, PseudoProps, OtherProps {
}
//# sourceMappingURL=props.d.ts.map