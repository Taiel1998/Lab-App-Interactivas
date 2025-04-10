import './App.css';
import Card from './Card.jsx';

function App() {
  const users = [
    { id: 1, name: 'Juan Pérez', email: 'juan.perez@example.com', avatar: 'https://via.placeholder.com/150' },
    { id: 2, name: 'María López', email: 'maria.lopez@example.com', avatar: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Carlos García', email: 'carlos.garcia@example.com', avatar: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Ana Torres', email: 'ana.torres@example.com', avatar: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="app-container">
      <header className="users-title">
        <h1>Lista de Usuarios</h1>
        <p className='subtitle'>Explora la información de los usuarios registrados.</p>
      </header>
      <div className="card-list">
        {users.map((user) => (
          <Card key={user.id} name={user.name} email={user.email} avatar={user.avatar} />
        ))}
      </div>
    </div>
  );
}

export default App;