import "./Card.css";

function Card({title, description} = props) {
  return (
    <div className="Card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Card;
