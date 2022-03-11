import { Formik, ErrorMessage } from "formik";
import React, { FC } from "react";
import Button from "../../../components/button/Button";
import ErrorText from "../../../components/errorText/ErrorText";
import Input from "../../../containers/input/Input";
import { Style } from "./Login.style.component";
import { useLogin } from "./useLogin";
import { LoginSchema } from "./validationSchema";
import { useTranslation } from "react-i18next";

interface IProps {
  toggleChengePage: () => void;
}

const Login: FC<IProps> = ({ toggleChengePage }) => {
  const { initialValues, handleSubmit, errorText } = useLogin();
  const { Wrapper, BlockInput, Title } = Style;
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={LoginSchema}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => {
          return (
            <>
              <form onSubmit={handleSubmit}>
                <BlockInput>
                  <Title>{t("Login")}</Title>
                  {errorText && <ErrorText textError={errorText} />}

                  <Input
                    type="text"
                    value={values.email}
                    onChange={handleChange}
                    name="email"
                    onBlur={handleBlur}
                    placeholder="Email"
                  />
                  <ErrorMessage
                    name="email"
                    render={(msg) => <ErrorText textError={msg} />}
                  />
                  <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <ErrorMessage
                    name="password"
                    render={(msg) => <ErrorText textError={msg} />}
                  />
                  <Button type="submit" title="submit" />
                  <Button onClick={toggleChengePage} title="To Signin" />
                </BlockInput>
              </form>
            </>
          );
        }}
      </Formik>
    </Wrapper>
  );
};

export default Login;
