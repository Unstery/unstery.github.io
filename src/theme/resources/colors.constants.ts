import type { ColorType } from '../types/color.type';

const colors: ColorType = {
  primary: {
    200: '#0891B2',
  },
  background: {
    0: '#FFFFFF',
    200: '#FEFEFE', // light-mode-bg
    300: '#EFEFEF', // light-mode-bg
    600: '#1E293C', // dark-mode-bg
    700: '#1D232A', // dark-mode-bg
    900: '#000000'
  },
  text: {
    0: '#FFFFFF',
    200: '#FCFBF9', // dark-mode-text
    700: '#121212', // light-mode-text
    900: '#000000',
  },
  information: '#34BCF1',
  success: '#2ECC71',
  error: '#E74C3C',
  warning: '#F5B00A'
};

export default colors;
