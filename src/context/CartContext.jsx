import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    setCart(prevCart => {
      const existingPizza = prevCart.find(item => item.id === pizza.id);
      if (existingPizza) {
        return prevCart.map(item =>
          item.id === pizza.id ? { ...item, count: item.count + 1 } : item
        );
      }
      return [...prevCart, { ...pizza, count: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prevCart => {
      const existingPizza = prevCart.find(item => item.id === id);
      if (existingPizza && existingPizza.count === 1) {
        return prevCart.filter(item => item.id !== id);
      }
      return prevCart.map(item =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      );
    });
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.count), 0);
  };

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      getTotal 
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de un CartProvider');
  }
  return context;
}; 