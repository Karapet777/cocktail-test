import { ErrorMessage, Formik } from "formik";
import React, { FC } from "react";
import Button from "../../../components/button/Button";
import ErrorText from "../../../components/errorText/ErrorText";
import Input from "../../../containers/input/Input";
import { StyleSignin } from "./Signin.style.component";
import { useSignin } from "./useSignin";
import { SigninSchema } from "./validationSchema";

interface IProps {
  toggleChengePage: () => void;
}

const Signin: FC<IProps> = ({ toggleChengePage }) => {
  const { BlockInput, Title, Wrapper } = StyleSignin;
  const { errorText, handleSubmit, initialValues } = useSignin();

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
                <Title>Signin</Title>
                {errorText && <ErrorText textError={errorText} />}
                <Input
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  name="name"
                  onBlur={handleBlur}
                  placeholder="Name"
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

                <Button type="submit" title="Signin" />
                <Button onClick={toggleChengePage} title="To Login" />
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
