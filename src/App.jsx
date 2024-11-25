import { useState } from 'react';
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import Footer from "./components/Footer";

const App = () => {
  const [currentView, setCurrentView] = useState('register');

  return (
    <div className="App">
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />
      {currentView === 'register' ? <Register /> : <Login />}
      <Footer />
    </div>
  );
};

export default App;