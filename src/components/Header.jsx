const Header = () => {
  const headerStyle = {
    backgroundImage: 'url("/Header.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative'
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  };

  return (
    <header className="text-center text-white py-5" style={headerStyle}>
      <div style={overlayStyle}></div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h1>¡Pizzería Mamma Mia!</h1>
        <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
      </div>
    </header>
  );
};

export default Header;
