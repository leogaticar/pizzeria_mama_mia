const CardPizza = ({ name, price, ingredients, img }) => {
  const formatPrice = (price) => {
    return price.toLocaleString('es-CL');
  };

  return (
    <div className="col-12 col-md-4 mb-4">
      <div className="card">
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Ingredientes:</p>
          <ul>
            {ingredients.map((ingredient, i) => (
              <li key={i}>{ingredient}</li>
            ))}
          </ul>
          <p className="text-center fw-bold">Precio: ${formatPrice(price)}</p>
          <div className="d-flex justify-content-between">
            <button className="btn btn-primary">Ver Más</button>
            <button className="btn btn-danger">Añadir</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
