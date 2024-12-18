import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center py-10">
      <h1 className="text-4xl mb-4">¡Página no encontrada! 😢</h1>
      <p className="mb-4">Lo sentimos, la página que buscas no existe.</p>
      <Link to="/" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound; 