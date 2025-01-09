import { createContext, useContext, useState, useEffect } from 'react';

const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5001/api/pizzas")
      .then((response) => {
        if (!response.ok) throw new Error("Error al cargar las pizzas");
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

  const getPizzaById = async (id) => {
    try {
      const response = await fetch(`http://localhost:5001/api/pizzas/${id}`);
      if (!response.ok) throw new Error("Error al cargar la pizza");
      const data = await response.json();
      return data;
    } catch (err) {
      throw err;
    }
  };

  return (
    <PizzaContext.Provider value={{ pizzas, loading, error, getPizzaById }}>
      {children}
    </PizzaContext.Provider>
  );
};

export const usePizza = () => {
  const context = useContext(PizzaContext);
  if (!context) {
    throw new Error('usePizza debe usarse dentro de un PizzaProvider');
  }
  return context;
}; 