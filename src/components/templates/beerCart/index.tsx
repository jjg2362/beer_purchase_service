import React from "react";
import { useMemo } from "react";
import { ColorPalette } from "../../../models/color";
import { IBeer, IPurchaseItem } from "../../../models/types";
import Button from "../../atoms/button";
import Block, { Direction } from "../../molecules/block";
import Card from "../../molecules/card";

interface IProps {
  beerList: IBeer[];
  myCart: IPurchaseItem[];
  onClickCancelButton(item: IBeer): void;
}

const filterBeerList = (beerLists: IBeer[], myCart: IPurchaseItem[]) => {
  return beerLists.filter((beer) => {
    const isFound = myCart.findIndex((cart) => cart.id === beer.id) > -1;
    return isFound && beer;
  });
};

const BeerCart: React.FC<IProps> = ({
  beerList,
  myCart,
  onClickCancelButton,
}) => {
  const filteredBeerLists = useMemo(
    () => filterBeerList(beerList, myCart),
    [beerList, myCart]
  );

  const renderCard = (item: IBeer) => {
    const foundCart = myCart.find((v) => v.id === item.id);
    const count = foundCart !== undefined ? foundCart.count : 0;

    return (
      count > 0 && (
        <Card
          key={item.id}
          beer={item}
          count={count}
          ButtonElements={[
            <Button
              bgColor={ColorPalette.Gray.GAINSBORO}
              color={ColorPalette.Blue.NAVY}
              size={12}
              weight={300}
              padding={[10, 12]}
              radius={4}
              onClick={() => onClickCancelButton(item)}
            >
              취소
            </Button>,
          ]}
        />
      )
    );
  };

  return (
    <Block direction={Direction.COLUMN}>
      <Block style={{ width: "95%" }} direction={Direction.COLUMN}>
        {filteredBeerLists !== undefined &&
          filteredBeerLists.map((item) => renderCard(item))}
      </Block>
    </Block>
  );
};

export default BeerCart;
