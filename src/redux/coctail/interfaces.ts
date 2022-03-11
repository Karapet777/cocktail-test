export interface IStateInitial {
  loading: boolean;
  isError: boolean;
  usersCoctailHistory: IdataActionCoctail[];
  currentCoctail: IdataActionCoctail;
  currentUserCoctails: IdataActionCoctail[];
}
export interface IdataActionCoctail {
  strDrinkThumb?: string;
  strAlcoholic?: string;
  strGlass?: string;
  strDrink?: string;
  idDrink?: string;
  email?: string;
  password?: string;
}
