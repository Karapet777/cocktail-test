import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IStateInitial, IdataActionCoctail } from "./interfaces";

const initialState: IStateInitial = {
  loading: false,
  isError: false,
  currentCoctail: {},
  currentUserCoctails: [],

  usersCoctailHistory:
    JSON.parse(localStorage.getItem("usersCoctails") || "[]") || [],
};

export const GetCoctail = createAsyncThunk("coctail/getCoctail", async () => {
  const {
    data: { drinks },
  } = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
  const { strDrinkThumb, strGlass, strDrink, strAlcoholic, idDrink } =
    drinks[0];

  return { strDrinkThumb, strGlass, strDrink, strAlcoholic, idDrink };
});

export const coctailSlice = createSlice({
  name: "coctails",
  initialState,
  reducers: {
    addCoctailHistory: (state, action) => {
      state.usersCoctailHistory.push(action.payload);
    },
    GetCurrentUserCoctails: (state, action) => {
      state.currentUserCoctails = state.usersCoctailHistory.filter(
        (coctail) => {
          if (
            action.payload.email === coctail.email &&
            action.payload.password === coctail.password
          ) {
            return coctail;
          }
        }
      );
      localStorage.setItem(
        "currentUserCoctailHistory",
        JSON.stringify(state.currentUserCoctails)
      );
    },
    deletCoctail: (state, action) => {
      state.usersCoctailHistory = state.usersCoctailHistory.filter(
        (coctail) => {
          if (action.payload !== coctail.idDrink) {
            return coctail;
          }
        }
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GetCoctail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      GetCoctail.fulfilled,
      (state, action: PayloadAction<IdataActionCoctail>) => {
        state.currentCoctail = action.payload;
        state.loading = false;
      }
    );
  },
});

export const { addCoctailHistory, deletCoctail, GetCurrentUserCoctails } =
  coctailSlice.actions;

export default coctailSlice.reducer;
