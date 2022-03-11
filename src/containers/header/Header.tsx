import userIcon from "../../assets/user.png";

import Button from "../../components/button/Button";
import useHeader from "./useHeader";
import ModalReact from "../modal/Modal";
import CardCoctail from "../cardCoctail/CardCoctail";
import Loader from "../loader/Loader";
import { useTranslation } from "react-i18next";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../../redux/user/usersSlice";
import { styleHeader } from "./Header.style.component";

const Header = () => {
  const {
    logaut,
    currentUser,
    GetRandomCoctail,
    closeModal,
    isLoading,
    isOpenModal,
    addCoctailToHistory,
    newRandomCoctailInModal,
    currentCoctail,
    options,
  } = useHeader();
  const dispatch = useDispatch();

  const { t } = useTranslation();
  const { WrapperHeader, LogoBlock, SettingBlock, CurrentUserName, UserIcon } =
    styleHeader;

  return (
    <WrapperHeader>
      <LogoBlock>
        <UserIcon src={userIcon} alt="userIcon" />
        <CurrentUserName>{`${t("Welcome")} ${
          currentUser.email
        }`}</CurrentUserName>
      </LogoBlock>
      <div>
        <Button title={t("getRandomCoctail")} onClick={GetRandomCoctail} />
      </div>
      <SettingBlock>
        <Select
          options={options}
          onChange={(event) => dispatch(changeLanguage(event?.value))}
        />
        <Button title={t("logOut")} onClick={() => logaut()} />
      </SettingBlock>
      <ModalReact isOpen={isOpenModal} onClose={closeModal}>
        {isLoading ? (
          <Loader />
        ) : (
          <CardCoctail
            src={currentCoctail.strDrinkThumb}
            glass={currentCoctail.strGlass}
            name={currentCoctail.strDrink}
            Alcoholic={currentCoctail.strAlcoholic}
            addCoctailToHistory={addCoctailToHistory}
            newRandomCoctailInModal={newRandomCoctailInModal}
          />
        )}
      </ModalReact>
    </WrapperHeader>
  );
};

export default Header;
