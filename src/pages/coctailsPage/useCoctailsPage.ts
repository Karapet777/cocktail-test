import { useEffect, useState } from "react";
import { GetCurrentUserSelect } from "../../redux/user/selectsUser";
import {
  CoctailHistorySelect,
  CurrentUserCoctailHistorySelect,
} from "../../redux/coctail/selectCoctail";
import { useDispatch } from "react-redux";
import {
  deletCoctail,
  GetCurrentUserCoctails,
} from "../../redux/coctail/coctailSlice";

const useCoctailsPage = () => {
  const currentUser = GetCurrentUserSelect();
  const coctailsHistoryLocal = CoctailHistorySelect();
  const currentCoctailsHistory = CurrentUserCoctailHistorySelect();
  const dispatch = useDispatch();
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    dispatch(GetCurrentUserCoctails(currentUser));
  }, [coctailsHistoryLocal, currentUser, dispatch]);

  const closeModal = () => {
    setIsOpenModal((prev) => {
      return !prev;
    });
  };

  const deleteCoctailHandle = (id: string | undefined) => {
    dispatch(deletCoctail(id));
  };
  return {
    closeModal,
    isOpenModal,
    currentCoctailsHistory,
    deleteCoctailHandle,
  };
};

export default useCoctailsPage;
