import { useEffect, useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5001/api/pizzas/p001")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar la pizza");
        }
        return response.json();
      })
      .then((data) => {
        setPizza(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!pizza) return <div>No se encontró la pizza</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src={pizza.img}
            alt={pizza.name}
            className="w-full h-64 object-cover rounded-lg"
          />
          <div>
            <h1 className="text-3xl font-bold mb-4">{pizza.name}</h1>
            <p className="text-gray-600 mb-4">{pizza.desc}</p>
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2">Ingredientes:</h2>
              <ul className="list-disc list-inside">
                {pizza.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-gray-600">
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-2xl font-bold mb-4">${pizza.price}</p>
            <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza; 