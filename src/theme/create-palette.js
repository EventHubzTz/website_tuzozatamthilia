import { alpha } from '@mui/material/styles';
import { gold, neutral } from './colors';

export function createPalette() {
  return {
    action: {
      active: neutral[500],
      disabled: alpha(neutral[900], 0.38),
      disabledBackground: alpha(neutral[900], 0.12),
      focus: alpha(neutral[900], 0.16),
      hover: alpha(neutral[900], 0.04),
      selected: alpha(neutral[900], 0.12)
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF'
    },
    divider: '#F2F4F7',
    mode: 'light',
    neutral,
    primary: gold,
    text: {
      primary: neutral[900],
      secondary: neutral[500],
      disabled: alpha(neutral[900], 0.38)
    },
  };
}
