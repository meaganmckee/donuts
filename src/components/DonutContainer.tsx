import Result from "../models/Result";
import { Link } from "react-router-dom";
import "./DonutContainer.css";
import Card from "./Card";
import Details from "./Details";
import SingleDonut from "../models/SingleDonut";

interface Props {
  donuts: Result[];
}

const DonutContainer = ({ donuts }: Props) => {
  return (
    <div className="DonutContainer">
      <ul>
        {donuts.map((donut) => (
          <li>
            <Link to={`/donuts/${encodeURIComponent(donut.id!)}`}>
              <h2>{donut.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonutContainer;
