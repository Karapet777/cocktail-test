import { useSelector } from "react-redux";
import { RootState } from "../store";

export const GetCoctailSelect = () => {
  return useSelector((state: RootState) => state.coctail.currentCoctail);
};

export const LoadingSelect = () => {
  return useSelector((state: RootState) => state.coctail.loading);
};

export const CoctailHistorySelect = () => {
  return useSelector((state: RootState) => state.coctail.usersCoctailHistory);
};
export const CurrentUserCoctailHistorySelect = () => {
  return useSelector((state: RootState) => state.coctail.currentUserCoctails);
};
