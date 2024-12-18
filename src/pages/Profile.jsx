const Profile = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4">Perfil de Usuario</h2>
      <p className="mb-4">Email: usuario@ejemplo.com</p>
      <button 
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        onClick={() => console.log('Cerrar sesión')}
      >
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Profile; 