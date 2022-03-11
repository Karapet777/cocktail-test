import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const translationsEn = {
  Login: "Login",
  Welcome: "Welcome",
  getRandomCoctail: "Get a random cocktail!",
  logOut: "Logout",
  name: "Name",
  glass: "Glass",
  type: "Type",
};
const translationsAm = {
  Login: "Մուտք",
  Welcome: "Բարի գալուստ",
  getRandomCoctail: "Ստանալ պատահական կոկտեյլ",
  logOut: "Դուրս գալ",
  name: "Անվանում",
  galss: "Բաժակ",
  type: "Տեսակ",
};

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationsEn },
    am: { translation: translationsAm },
  },
  lng: "en",
  fallbackLng: "em",
  interpolation: { escapeValue: false },
});

export default i18n;
