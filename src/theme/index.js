import { createTheme as createMuiTheme } from '@mui/material';
import { createPalette } from './create-palette';
import { createTypography } from './create-typography';

export function lightTheme() {
  const palette = createPalette();
  const typography = createTypography();

  return createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1440
      }
    },
    palette,
    shape: {
      borderRadius: 8
    },
    typography
  });
}
