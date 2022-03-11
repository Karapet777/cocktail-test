import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Iusers } from "../../../redux/user/interfaces";
import { GetErrorTextSelect } from "../../../redux/user/selectsUser";
import { signin } from "../../../redux/user/usersSlice";

export const useSignin = () => {
  const dispatch = useDispatch();
  const errorText = GetErrorTextSelect();
  const history = useNavigate();

  const initialValues = {
    email: "",
    password: "",
    name: "",
    id: Date.now().toString(),
  };

  const handleSubmit = (
    values: Iusers,
    onSubmitProps: { resetForm: () => void }
  ) => {
    dispatch(signin(values));
    history("/coctails");
    onSubmitProps.resetForm();
  };

  return {
    errorText,
    handleSubmit,
    initialValues,
  };
};
