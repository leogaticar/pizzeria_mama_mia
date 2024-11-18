
const Navbar = () => {
  const total = 25000;
  const token = false;

  const formatPrice = (price) => {
    return price.toLocaleString('es-CL');
  };

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <span className="navbar-brand">🍕 Pizzería Mamma Mia!</span>
        <div className="d-flex">
          <button className="btn btn-outline-light me-2">🍕 Home</button>
          {token ? (
            <>
              <button className="btn btn-outline-light me-2">🔓 Prole</button>
              <button className="btn btn-outline-light me-2">🔒 Logout</button>
            </>
          ) : (
            <>
              <button className="btn btn-outline-light me-2">🔐 Login</button>
              <button className="btn btn-outline-light me-2">🔐 Register</button>
            </>
          )}
          <button className="btn btn-outline-light">🛒 Total: ${formatPrice(total)}</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
