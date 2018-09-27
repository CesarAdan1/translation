import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  resources: {
    en: {
      translations: {
        "All": "All",
        "Popular": "Popular",
        "Recent": "Recent",
        "Debut": "Debut",
      }
    },
    es: {
      translations: {
        "All": "Todos",
        "Popular": "Famosos",
        "Recent": "Ahora",
        "Debut": "Nuevos",
      }
    }
  },
  fallbackLng: "en",
  debug: false,
  ns: ["translations"],
  defaultNS: "translations",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
    formatSeparator: ","
  },
  react: {
    wait: true
  }
});

export default i18n;
