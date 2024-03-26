import { createI18n } from "vue-i18n";
import en from "@/locales/en.json";
import br from "@/locales/br.json";
export default createI18n({
  locale: "br",
  fallbackLocale: "br",
  messages: {
    en,
    br,
  },
});
