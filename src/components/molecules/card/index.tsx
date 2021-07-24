import React from "react";
import { ColorPalette } from "../../../models/color";
import { IBeer } from "../../../models/types";
import P from "../../atoms/p";
import Span from "../../atoms/span";
import Image from "../../atoms/image";
import Block, { Direction } from "../block";

interface IProps {
  beer: IBeer;
  Buttons: React.ReactNode[];
}

const Card: React.FC<IProps> = ({ beer, Buttons }) => {
  return (
    <Block
      direction={Direction.COLUMN}
      padding={[10]}
      style={{
        borderRadius: "4px",
        backgroundColor: ColorPalette.White.WHITE,
        boxShadow: "1px 1px 4px 1px rgba(0, 0, 0, 0.05)",
      }}
      margin={[0, 0, 10, 0]}
    >
      <Block sort={61}>
        <Block
          style={{
            width: "56px",
            height: "81px",
            border: `1px solid ${ColorPalette.Gray.LIGHT}`,
            flex: "0 0 56px",
          }}
        >
          <Image src={`/img/${beer.image}`} alt={beer.name} />
        </Block>
        <Block
          sort={41}
          direction={Direction.COLUMN}
          margin={[0, 0, 0, 10]}
          style={{ flex: 1 }}
        >
          <P color={ColorPalette.Black.LIGHT} size={18}>
            {beer.name}
          </P>
          <Block sort={21}>
            {beer.tags.map((item, index) => {
              return (
                <Span key={index} color={ColorPalette.Gray.GRAY} weight={700}>
                  {item.name}
                  {index < beer.tags.length - 1 && ", "}
                </Span>
              );
            })}
          </Block>
          <Block sort={21}>
            <Span size={16} weight={700} color={ColorPalette.Blue.STALE}>
              {beer.price}
            </Span>
            <Span weight={400}>원</Span>
          </Block>
          <Block sort={21}>
            <Span
              color={ColorPalette.Black.LIGHT}
              size={14}
              margin={[0, 4, 0, 0]}
            >
              재고
            </Span>
            <Span color={ColorPalette.Black.LIGHT} size={14} weight={400}>
              {beer.stock}
            </Span>

            {beer.count !== undefined && beer.count > 0 && (
              <>
                <Span
                  color={ColorPalette.Black.LIGHT}
                  size={14}
                  margin={[0, 4, 0, 6]}
                >
                  수량
                </Span>
                <Span color={ColorPalette.Black.LIGHT} size={14} weight={400}>
                  {beer.count}
                </Span>
              </>
            )}
          </Block>
        </Block>
      </Block>
      <Block sort={13}>{Buttons.map((button) => button)}</Block>
    </Block>
  );
};

export default Card;
