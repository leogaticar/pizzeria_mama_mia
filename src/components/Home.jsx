import { pizzas } from "../pizzas";
import CardPizza from "./CardPizza";

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {pizzas.map((pizza) => (
          <CardPizza key={pizza.id} {...pizza} />
        ))}
      </div>
    </div>
  );
};

export default Home;
