import React from "react";

import { IBeer } from "../../../models/types";
import Block, { Direction } from "../../molecules/block";
import Card from "../../molecules/card";

interface IProps {
  beerList: IBeer[];
}

const BeerList: React.FC<IProps> = ({ beerList }) => {
  return (
    <Block style={{ width: "95%" }} direction={Direction.COLUMN}>
      {beerList !== undefined &&
        beerList.map((item) => {
          return <Card key={item.id} beer={item} />;
        })}
    </Block>
  );
};

export default BeerList;
