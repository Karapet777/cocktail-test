import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Iusers } from "../../../redux/user/interfaces";
import {
  GetTokenSelect,
  GetErrorTextSelect,
} from "../../../redux/user/selectsUser";
import { login } from "../../../redux/user/usersSlice";

export const useLogin = () => {
  const dispatch = useDispatch();
  const token = GetTokenSelect();
  const errorText = GetErrorTextSelect();
  const history = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (
    values: Iusers,
    onSubmitProps: { resetForm: () => void }
  ) => {
    dispatch(login(values));
    history("/coctails");
    onSubmitProps.resetForm();
  };

  return {
    token,
    initialValues,
    handleSubmit,
    errorText,
  };
};
