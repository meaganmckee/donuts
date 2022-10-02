import SingleDonut from "../models/SingleDonut";
import "./Card.css";

interface Props {
  donut: SingleDonut;
}

const Card = ({ donut }: Props) => {
  return (
    <div className="Card">
      <h2>{donut.name}</h2>
    </div>
  );
};

export default Card;
