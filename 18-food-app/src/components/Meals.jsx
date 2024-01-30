import { fetchMeals } from "../http";
import MealCard from "./MealCard";
import useHttp from "../hooks/useHttp";
import Error from "./UI/Error";

function Meals() {
  const [isFetching, fetchedData, error] = useHttp(fetchMeals, [], true);

  if (isFetching) {
  }

  return (
    <div id="meals">
      {isFetching && <h3 className="center">Fetching some data</h3>}
      {!isFetching &&
        fetchedData &&
        fetchedData.map((m) => <MealCard key={m.id} meal={m} />)}
      {error && <Error title="Failed to fetch meals" message={error} />}
    </div>
  );
}

export default Meals;
