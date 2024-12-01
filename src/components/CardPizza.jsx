const CardPizza = ({ name, price, ingredients, img, desc }) => {
  return (
    <div className="col-12 col-md-4 mb-4">
      <div className="card">
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title text-capitalize">{name}</h5>
          <p className="card-text">{desc}</p>
          <p className="card-text">Ingredientes:</p>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <p className="text-center fw-bold">Precio: ${price.toLocaleString()}</p>
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
