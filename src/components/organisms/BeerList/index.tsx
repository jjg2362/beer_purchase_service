import React from "react";

import { IBeer } from "../../../models/types";
import Block from "../../molecules/block";
import Card from "../../molecules/card";
import Scrollable, { ScrollType, ViewType } from "../../molecules/scrollable";

interface IProps {
  beerList: IBeer[];
}

const BeerList: React.FC<IProps> = ({ beerList }) => {
  return (
    <Block style={{ width: "95%" }}>
      <Scrollable scrollType={ScrollType.VERTICAL} viewType={ViewType.OVERFLOW}>
        {beerList !== undefined &&
          beerList.map((item) => {
            return <Card key={item.id} beer={item} />;
          })}
      </Scrollable>
    </Block>
  );
};

export default BeerList;
