import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Iusers, ICridentialLogin, IStateInitial } from "./interfaces";

const initialState: IStateInitial = {
  loading: false,
  isError: false,
  errorText: "",
  token: JSON.parse(localStorage.getItem("Token") || "false"),
  users: JSON.parse(localStorage.getItem("All_Users") || "[]"),
  CurrentUser: JSON.parse(localStorage.getItem("Current_User") || "[]"),
  language: localStorage.getItem("i18") || "en",
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    signin: (state, action: PayloadAction<Iusers>) => {
      const isAuthorized = state.users.find((userItem) => {
        if (action.payload.email === userItem.email) {
          return true;
        }
      });
      if (isAuthorized) {
        state.errorText = "user@ goyutyun uni";
        state.token = false;
      } else {
        state.users.push(action.payload);
        state.CurrentUser = action.payload;
        state.token = true;
        state.errorText = "";
        localStorage.setItem("All_Users", JSON.stringify(state.users));
        localStorage.setItem("Token", JSON.stringify(state.token));
        localStorage.setItem("Current_User", JSON.stringify(state.CurrentUser));
      }
    },
    login: (state, action: PayloadAction<ICridentialLogin>) => {
      const isUser = state.users.find((userItem) => {
        if (action.payload.email === userItem.email) {
          return true;
        }
      });
      if (isUser) {
        state.token = true;
        state.CurrentUser = action.payload;
        state.errorText = "";
      } else {
        state.errorText = "Էլեկտրոնային փոստը  գոյություն ունի";
        state.token = false;
      }
      localStorage.setItem("Token", JSON.stringify(state.token));
      localStorage.setItem("Current_User", JSON.stringify(state.CurrentUser));
    },
    logoutUser: (state) => {
      state.token = false;
      state.errorText = "";
      state.CurrentUser = <ICridentialLogin>[];
      localStorage.setItem("Token", JSON.stringify(state.token));
      localStorage.setItem("Current_User", JSON.stringify(state.CurrentUser));
    },
    changeLanguage: (state, action) => {
      state.language = action.payload;
      localStorage.setItem("i18", state.language);
    },
  },
});

export const { signin, login, logoutUser, changeLanguage } = usersSlice.actions;

export default usersSlice.reducer;
