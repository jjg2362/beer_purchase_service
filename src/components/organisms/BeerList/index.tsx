import React from "react";
import { IBeer } from "../../../models/types";
import Card from "../../molecules/card";

interface IProps {
  beerList: IBeer[];
}

const BeerList: React.FC<IProps> = ({ beerList }) => {
  return (
    <>
      {beerList !== undefined &&
        beerList.map((item) => {
          return <Card beer={item} />;
        })}
    </>
  );
};

export default BeerList;
