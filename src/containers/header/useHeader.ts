import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  GetCurrentUserSelect,
  GetTokenSelect,
} from "../../redux/user/selectsUser";
import { logoutUser } from "../../redux/user/usersSlice";
import {
  addCoctailHistory,
  GetCoctail,
} from "../../redux/coctail/coctailSlice";
import {
  GetCoctailSelect,
  LoadingSelect,
} from "../../redux/coctail/selectCoctail";
import { useNavigate } from "react-router-dom";

export const useHeader = () => {
  const dispatch = useDispatch();
  const currentUser = GetCurrentUserSelect();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const isLoading = LoadingSelect();
  const currentCoctail = GetCoctailSelect();
  const token = GetTokenSelect();
  const redirect = useNavigate();

  const options = [
    { value: "am", label: "AM" },
    { value: "en", label: "EN" },
  ];

  useEffect(() => {
    token ? redirect("/coctails") : redirect("/");
  }, [token, dispatch, redirect]);

  const logaut = () => {
    dispatch(logoutUser());
  };

  const GetRandomCoctail = () => {
    dispatch(GetCoctail());
    openModal();
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };
  const openModal = () => {
    setIsOpenModal(true);
  };

  const addCoctailToHistory = () => {
    dispatch(addCoctailHistory({ ...currentCoctail, ...currentUser }));
    closeModal();
  };

  const newRandomCoctailInModal = () => {
    dispatch(GetCoctail());
  };

  return {
    logaut,
    currentUser,
    GetRandomCoctail,
    closeModal,
    isOpenModal,
    isLoading,
    addCoctailToHistory,
    currentCoctail,
    newRandomCoctailInModal,
    options,
  };
};

export default useHeader;
