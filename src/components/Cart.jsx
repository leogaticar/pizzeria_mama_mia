import { useState } from "react";
import { pizzaCart } from "../pizzas";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const handleIncrement = (id) => {
    setCart(cart.map(item => 
      item.id === id ? {...item, count: item.count + 1} : item
    ));
  };

  const handleDecrement = (id) => {
    setCart(cart.map(item => 
      item.id === id && item.count > 0 ? {...item, count: item.count - 1} : item
    ).filter(item => item.count > 0));
  };

  const total = cart.reduce((sum, item) => sum + (item.price * item.count), 0);

  return (
    <div className="container mt-5">
      <h2>Detalles del pedido:</h2>
      {cart.map((item) => (
        <div key={item.id} className="d-flex align-items-center mb-3">
          <img src={item.img} alt={item.name} style={{width: "100px", height: "100px", objectFit: "cover"}} />
          <div className="ms-3">
            <h4 className="text-capitalize">{item.name}</h4>
            <p>${item.price.toLocaleString()}</p>
          </div>
          <div className="ms-auto d-flex align-items-center">
            <button className="btn btn-outline-danger" onClick={() => handleDecrement(item.id)}>-</button>
            <span className="mx-3">{item.count}</span>
            <button className="btn btn-outline-primary" onClick={() => handleIncrement(item.id)}>+</button>
          </div>
        </div>
      ))}
      <h3 className="mt-4">Total: ${total.toLocaleString()}</h3>
      <button className="btn btn-dark mt-3">Pagar</button>
    </div>
  );
};

export default Cart; 