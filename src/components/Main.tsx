import { useEffect, useState } from "react";
import Result from "../models/Result";
import { getDonuts } from "../services/donutService";
import DonutContainer from "./DonutContainer";
import "./Main.css";

const Main = () => {
  const [donuts, setDonuts] = useState<Result[]>([]);

  useEffect(() => {
    getDonuts().then((response) => {
      setDonuts(response.results);
    });
  }, []);

  return (
    <div className="Main">
      <DonutContainer donuts={donuts} />
    </div>
  );
};

export default Main;
