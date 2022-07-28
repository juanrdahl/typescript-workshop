import { Language } from "../enums/Language";
import { en, es } from "../locales";
import { LocaleType } from "../locales/types";

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
