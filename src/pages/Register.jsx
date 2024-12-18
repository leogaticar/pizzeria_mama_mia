import { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [message, setMessage] = useState({
    text: '',
    type: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email || !formData.password || !formData.confirmPassword) {
      setMessage({
        text: 'Todos los campos son obligatorios',
        type: 'error'
      });
      return false;
    }

    if (!emailRegex.test(formData.email)) {
      setMessage({
        text: 'Por favor ingrese un correo electrónico válido',
        type: 'error'
      });
      return false;
    }

    if (formData.password.length < 6) {
      setMessage({
        text: 'La contraseña debe tener al menos 6 caracteres',
        type: 'error'
      });
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage({
        text: 'Las contraseñas no coinciden',
        type: 'error'
      });
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setMessage({
        text: '¡Registro exitoso!',
        type: 'success'
      });
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Registro</h2>
              
              {message.text && (
                <div className={`alert ${
                  message.type === 'success' ? 'alert-success' : 'alert-danger'
                } text-center mb-4`}>
                  {message.text}
                </div>
              )}

              <div className="text-muted small mb-4">
                La contraseña debe tener al menos 6 caracteres
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ejemplo@correo.com"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirmar Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••"
                  />
                </div>

                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                  >
                    Registrarse
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register; 