import axios from "axios";
import MultipleDonutsResponse from "../models/MultipleDonutsResponse";
import SingleDonut from "../models/SingleDonut";

export const getDonuts = (): Promise<MultipleDonutsResponse> => {
  return axios
    .get("https://grandcircusco.github.io/demo-apis/donuts.json")
    .then((response) => {
      return response.data;
    });
};

export const getSingleDonutDetails = (id: number): Promise<SingleDonut> => {
  return axios
    .get(
      `https://grandcircusco.github.io/demo-apis/donuts/${encodeURIComponent(
        id
      )}`
    )
    .then((response) => {
      return response.data;
    });
};
