import "./Details.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SingleDonut from "../models/SingleDonut";
import { getDonutById } from "../services/donutService";

const Details = () => {
  const id: any = useParams().id;
  const [singleDonut, setSingleDonut] = useState<SingleDonut>();

  useEffect(() => {
    getDonutById(id!).then((response) => {
      setSingleDonut(response);
    });
  }, [id]);

  return (
    <div className="Details">
      <p>{singleDonut?.name}</p>
      <p>{singleDonut?.calories}</p>
      <img src={singleDonut?.photo} height="200px"></img>
    </div>
  );
};

export default Details;
