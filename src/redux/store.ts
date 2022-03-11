import { configureStore } from "@reduxjs/toolkit";
import coctailReducer from "./coctail/coctailSlice";
import usersReducer from "./user/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    coctail: coctailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
