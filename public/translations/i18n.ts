import i18n, { type InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';

export const i18nInit = (resources: InitOptions) => i18n.use(initReactI18next).init({
  lng: 'en-GB',
  interpolation: {
    escapeValue: false,
    format: (value, format) => {
      if (value === undefined) {
        return value;
      }

      switch (format) {
        case 'capitalize': {
          return value.length > 1
            ? `${value.charAt(0).toUpperCase()}${value.substring(1)}`
            : value;
        }
        default:
          return value;
      }
    }
  },
  ...resources
});

export default i18n;
