export interface IProps {
  src: string | undefined;
  name: string | undefined;
  glass: string | undefined;
  Alcoholic: string | undefined;
  addCoctailToHistory: () => void;
  newRandomCoctailInModal: () => void;
}
