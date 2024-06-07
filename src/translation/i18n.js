import { createI18n } from "vue-i18n";
import transaltion_en from "./translate_en";
import transaltion_km from "./translate_km";

// Define messages for each locale
const messages = {
  en: transaltion_en,
  km: transaltion_km,
};

// Create i18n instance with options
const i18n = createI18n({
  locale: "en", // set locale
  fallbackLocale: "en", // set fallback locale
  messages, // set locale messages
});

export default i18n;
