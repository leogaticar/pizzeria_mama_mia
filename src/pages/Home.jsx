import { useEffect, useState } from "react";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5001/api/pizzas")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar las pizzas");
        }
        return response.json();
      })
      .then((data) => {
        setPizzas(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="border rounded-lg p-4 shadow-md">
            <img
              src={pizza.img}
              alt={pizza.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-xl font-bold mt-2">{pizza.name}</h2>
            <p className="text-gray-600">{pizza.desc}</p>
            <p className="text-xl font-bold mt-2">${pizza.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
