import React, { useState, FC } from "react";
import { stylesAuth } from "./Auth.style.component";
import Login from "./login/Login";
import Signin from "./signin/Signin";

const Auth: FC = () => {
  const [isLogin, setIsLogin] = useState(false);
  const { Wrapper } = stylesAuth;

  const toggleChengePage = () => {
    setIsLogin(!isLogin);
  };
  return (
    <Wrapper>
      {isLogin ? (
        <Login toggleChengePage={toggleChengePage} />
      ) : (
        <Signin toggleChengePage={toggleChengePage} />
      )}
    </Wrapper>
  );
};

export default Auth;
