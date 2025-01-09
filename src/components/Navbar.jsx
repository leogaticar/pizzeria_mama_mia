import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { getTotal } = useCart();

  return (
    <nav style={{ 
      backgroundColor: '#ef4444', 
      width: '100%',
      padding: '1rem',
      position: 'sticky',
      top: 0,
      zIndex: 50
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
          Pizzería Mamma Mia
        </Link>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Inicio</Link>
          <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>Registro</Link>
          <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
          <Link to="/profile" style={{ color: 'white', textDecoration: 'none' }}>Perfil</Link>
          <Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>
            <span style={{ 
              backgroundColor: '#dc2626', 
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem'
            }}>
              🛒 Total: ${getTotal().toLocaleString()}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
