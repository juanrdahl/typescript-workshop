import { Language } from "web/enums/Language";
import { en, es } from "web/locales";
import { LocaleType } from "web/locales/types";

const lang: Language = Language.EN as Language;

const translate = (key: keyof LocaleType) => {
  switch (lang) {
    case Language.EN:
      return en[key];
    case Language.ES:
      return es[key];
    default:
      const exhaustiveCheck: never = lang;
      return exhaustiveCheck;
  }
};

export default translate;
