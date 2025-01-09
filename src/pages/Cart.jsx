import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, addToCart, removeFromCart, getTotal } = useCart();

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
            <button className="btn btn-outline-danger" onClick={() => removeFromCart(item.id)}>-</button>
            <span className="mx-3">{item.count}</span>
            <button className="btn btn-outline-primary" onClick={() => addToCart(item)}>+</button>
          </div>
        </div>
      ))}
      <h3 className="mt-4">Total: ${getTotal().toLocaleString()}</h3>
      <button className="btn btn-dark mt-3">Pagar</button>
    </div>
  );
};

export default Cart; 