import React from "react";
import { ColorPalette } from "../../../models/color";
import { IBeer } from "../../../models/types";
import P from "../../atoms/p";
import Span from "../../atoms/span";
import Block, { Direction } from "../block";

interface IProps {
  beer: IBeer;
}

const Card: React.FC<IProps> = ({ beer }) => {
  return (
    <Block
      direction={Direction.COLUMN}
      padding={[10]}
      style={{
        borderRadius: "4px",
        backgroundColor: ColorPalette.White.WHITE,
      }}
    >
      <P>{beer.name}</P>
      {beer.tags.map((item, index) => {
        return (
          <Span key={index}>
            {item.name}
            {index < beer.tags.length - 1 && ", "}
          </Span>
        );
      })}
      <Span>{beer.price}</Span>
      <Span>원</Span>
      <Span>재고</Span>
      <Span>{beer.stock}</Span>
    </Block>
  );
};

export default Card;
