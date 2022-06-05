import { jsx as _jsx } from "react/jsx-runtime";
import { ThemeProvider } from '@emotion/react';
import { preset } from '../preset';
export const MRProvider = ({ children }) => {
    return _jsx(ThemeProvider, Object.assign({ theme: preset }, { children: children }));
};
