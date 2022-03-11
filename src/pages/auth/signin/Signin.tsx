import { ErrorMessage, Formik } from "formik";
import React, { FC } from "react";
import Button from "../../../components/button/Button";
import ErrorText from "../../../components/errorText/ErrorText";
import Input from "../../../containers/input/Input";
import { StyleSignin } from "./Signin.style.component";
import { useSignin } from "./useSignin";
import { SigninSchema } from "./validationSchema";
import { useTranslation } from "react-i18next";

interface IProps {
  toggleChengePage: () => void;
}

const Signin: FC<IProps> = ({ toggleChengePage }) => {
  const { BlockInput, Title, Wrapper } = StyleSignin;
  const { errorText, handleSubmit, initialValues } = useSignin();
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={SigninSchema}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <BlockInput>
                <Title>{t("signin")}</Title>
                {errorText && <ErrorText textError={errorText} />}
                <Input
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  name="name"
                  onBlur={handleBlur}
                  placeholder={t("userName")}
                />
                <ErrorMessage
                  name="name"
                  render={(msg) => <ErrorText textError={msg} />}
                />
                <Input
                  type="text"
                  value={values.email}
                  onChange={handleChange}
                  name="email"
                  onBlur={handleBlur}
                  placeholder={t("Email")}
                />
                <ErrorMessage
                  name="email"
                  render={(msg) => <ErrorText textError={msg} />}
                />
                <Input
                  type="password"
                  name="password"
                  placeholder={t("Password")}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <ErrorMessage
                  name="password"
                  render={(msg) => <ErrorText textError={msg} />}
                />

                <Button type="submit" title={t("signin")} />
                <Button onClick={toggleChengePage} title={t("ToLogin")} />
              </BlockInput>
              ;
            </form>
          );
        }}
      </Formik>
    </Wrapper>
  );
};

export default Signin;
