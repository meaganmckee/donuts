import { useEffect, useState } from "react";
import Result from "../models/Result";
import { getDonuts } from "../services/donutService";
import { Link } from "react-router-dom";
import "./DonutContainer.css";

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
