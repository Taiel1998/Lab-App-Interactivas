import './Card.css';

function Card({ name, email }) {
  const avatarUrl = `https://robohash.org/${encodeURIComponent(name)}.png?size=150x150`;
  return (
    <div className="card">
      <img className="card-avatar" src={avatarUrl} alt={`Avatar de ${name}`} />
      <h2 className="card-name">{name}</h2>
      <p className="card-email">{email}</p>
    </div>
  );
}

export default Card;