
import { translations } from "./translations";
import { atom, useRecoilValue } from "recoil";

export const localeState = atom({key: "locale", default: "vn"});
export const locales = Object.keys(translations);

function translate(locale: string, key: string, vars: any):string {
  // Let's throw some errors if we're trying to use keys/locales that don't exist.
  // We could improve this by using Typescript and/or fallback values.
  if (!key) throw new Error("no key provided to $t()");
  if (!locale) throw new Error(`no translation for key "${key}"`);

  // Grab the translation from the translations object.
  let text = translations[locale][key];

  if (!text) return key;

  // Replace any passed in variables in the translation string.
  Object.keys(vars).map((k) => {
    const regex = new RegExp(`{{${k}}}`, "g");
    text = text.replace(regex, vars[k]);
  });

  return text;
}

export const t = (key: string, vars:any = {}) => {
  const locale = "vn"
  return translate(locale, key, vars)
}
