import { Link } from './components/Link';
import { Text } from './components/Text';
import { borders } from './foundations/borders';
import { breakpoints } from './foundations/breakpoints';
import { colors } from './foundations/colors';
import { fontSizes } from './foundations/font-sizes';
import { fontWeights } from './foundations/font-weights';
import { fonts } from './foundations/fonts';
import { letterSpacings } from './foundations/letter-spacings';
import { lineHeights } from './foundations/line-heights';
import { zIndices } from './foundations/z-indices';

export const preset = {
  borders,
  breakpoints,
  colors,
  fontSizes,
  fontWeights,
  fonts,
  letterSpacings,
  lineHeights,
  zIndices,
  Components: {
    Text,
    Link,
  },
};
