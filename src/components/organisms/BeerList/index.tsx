import React from "react";

import { IBeer } from "../../../models/types";
import { ColorPalette } from "../../../models/color";
import Block, { Direction } from "../../molecules/block";
import Button from "../../atoms/button";
import Card from "../../molecules/card";

interface IProps {
  beerList: IBeer[];
  onAddItem(item: IBeer): void;
  onSubItem(item: IBeer): void;
}

const BeerList: React.FC<IProps> = ({ beerList, onAddItem, onSubItem }) => {
  const renderBeerCard = (item: IBeer) => {
    return (
      <Card
        key={item.id}
        beer={item}
        Buttons={[
          item.count && item.count > 0 ? (
            <Button
              bgColor={ColorPalette.Gray.GAINSBORO}
              color={ColorPalette.Blue.NAVY}
              size={12}
              weight={300}
              padding={[10, 12]}
              margin={[0, 6, 0, 0]}
              radius={4}
              onClick={() => onSubItem(item)}
            >
              빼기
            </Button>
          ) : (
            <></>
          ),
          item.stock > 0 ? (
            <Button
              bgColor={ColorPalette.Blue.BLUE}
              color={ColorPalette.White.WHITE}
              size={12}
              weight={300}
              padding={[10, 12]}
              radius={4}
              onClick={() => onAddItem(item)}
            >
              담기
            </Button>
          ) : (
            <Button
              bgColor={ColorPalette.Gray.LIGHT}
              color={ColorPalette.Black.LIGHT}
              size={12}
              weight={300}
              padding={[10, 12]}
              radius={4}
              disabled
            >
              담기
            </Button>
          ),
        ]}
      />
    );
  };

  return (
    <Block style={{ width: "95%" }} direction={Direction.COLUMN}>
      {beerList !== undefined && beerList.map((item) => renderBeerCard(item))}
    </Block>
  );
};

export default BeerList;
