import { useSelector } from "react-redux";
import { RootState } from "../store";

export const GetTokenSelect = () => {
  return useSelector((state: RootState) => state.users.token);
};

export const GetCurrentUserSelect = () => {
  return useSelector((state: RootState) => state.users.CurrentUser);
};

export const GetErrorTextSelect = () => {
  return useSelector((state: RootState) => state.users.errorText);
};
export const GetAllUsersSelect = () => {
  return useSelector((state: RootState) => state.users.users);
};
export const GetLenguageSelect = () => {
  return useSelector((state: RootState) => state.users.language);
};
