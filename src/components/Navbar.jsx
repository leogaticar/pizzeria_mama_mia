const Navbar = ({ currentView, setCurrentView }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          Pizzería Mamma Mia!
        </a>
        <div className="navbar-nav ms-auto">
          <button 
            className={`btn ${currentView === 'login' ? 'btn-primary' : 'btn-outline-light'} me-2`}
            onClick={() => setCurrentView('login')}
          >
            Login
          </button>
          <button 
            className={`btn ${currentView === 'register' ? 'btn-primary' : 'btn-outline-light'}`}
            onClick={() => setCurrentView('register')}
          >
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
