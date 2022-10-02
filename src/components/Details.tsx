import "./Details.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SingleDonut from "../models/SingleDonut";
import { getSingleDonutDetails } from "../services/donutService";

const Details = () => {
  const id: number = useParams().id;
  const [donut, setDonut] = useState<SingleDonut | null>(null);

  useEffect(() => {
    getSingleDonutDetails(id!).then((response) => {
      setDonut(response);
    });
  }, []);

  return <div className="Details">{/* {(donut = { donut })} */}</div>;
};

export default Details;
