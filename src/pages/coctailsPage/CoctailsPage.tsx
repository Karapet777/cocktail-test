import CardCoctailHistory from "../../containers/cardCoctailHistory/CardCoctailHistory";
import Header from "../../containers/header/Header";
import useCoctailsPage from "./useCoctailsPage";

const CoctailsPage = () => {
  const { currentCoctailsHistory, deleteCoctailHandle } = useCoctailsPage();

  return (
    <div>
      <Header />
      {currentCoctailsHistory.map((coctail) => {
        return (
          <CardCoctailHistory
            key={coctail.idDrink}
            Alcoholic={coctail.strAlcoholic}
            glass={coctail.strGlass}
            name={coctail.strDrink}
            src={coctail.strDrinkThumb}
            deleteCoctailHandle={() => deleteCoctailHandle(coctail.idDrink)}
          />
        );
      })}
    </div>
  );
};

export default CoctailsPage;
