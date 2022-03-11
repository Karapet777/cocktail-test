import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import AppRouts from "./appRouts/AppRouts";
import i18n from "./i18next/root";
import { GetLenguageSelect } from "./redux/user/selectsUser";

const App: FC = () => {
  const dispatch = useDispatch();
  const language = GetLenguageSelect();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, dispatch]);
  return <AppRouts />;
};

export default App;
