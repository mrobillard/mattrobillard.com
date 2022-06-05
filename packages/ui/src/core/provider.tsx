import { ThemeProvider } from '@emotion/react';
import { ReactNode } from 'react';

import { preset } from '@preset';

export interface MRProviderProps {
  readonly children?: ReactNode;
}

export const MRProvider: React.FC<MRProviderProps> = ({ children }) => {
  return <ThemeProvider theme={preset}>{children}</ThemeProvider>;
};
