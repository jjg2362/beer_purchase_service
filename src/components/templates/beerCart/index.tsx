import React, { useMemo } from "react";

import { formatNumberToComma } from "../../../utils";
import { ColorPalette } from "../../../models/color";
import { IBeer, IPurchaseItem, IPurchaseResult } from "../../../models/types";
import Button from "../../atoms/button";
import Span, { TextAlign } from "../../atoms/span";
import Block, { Direction } from "../../molecules/block";
import Card from "../../molecules/card";

interface IProps {
  beerList: IBeer[];
  myCart: IPurchaseItem[];
  onClickCancelButton(item: IBeer): void;
  onClickListButton(): void;
  onClickPurchaseButton(
    purchaseItems: IPurchaseItem[],
    beerLists: IBeer[]
  ): void;
}

const filterBeerList = (beerLists: IBeer[], myCart: IPurchaseItem[]) => {
  if (beerLists.length > 0) {
    return beerLists.filter((beer) => {
      const isFound = myCart.findIndex((cart) => cart.id === beer.id) > -1;
      return isFound && beer;
    });
  }
};

const getTotalPrice = (
  beerLists: IBeer[],
  myCart: IPurchaseItem[]
): IPurchaseResult => {
  const result = {
    totalCount: 0,
    totalPrice: 0,
  };

  myCart.forEach((item) => {
    const foundBeer = beerLists.find((v) => v.id === item.id);

    if (foundBeer !== undefined) {
      const count = item.count + result.totalCount;
      const price = foundBeer.price * item.count + result.totalPrice;
      result.totalCount = count;
      result.totalPrice = price;
    }
  });

  return result;
};

const BeerCart: React.FC<IProps> = ({
  beerList,
  myCart,
  onClickCancelButton,
  onClickListButton,
  onClickPurchaseButton,
}) => {
  const filteredBeerLists = useMemo(
    () => filterBeerList(beerList, myCart),
    [beerList, myCart]
  );
  const totalPrice = useMemo(
    () => getTotalPrice(beerList, myCart),
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
              ??????
            </Button>,
          ]}
        />
      )
    );
  };

  const renderEmpty = () => {
    return (
      <Block direction={Direction.COLUMN} margin={[50, 0, 0, 0]}>
        <svg
          width="60px"
          height="56px"
          viewBox="0 0 60 56"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="Welcome"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="??????-?????????-1"
              transform="translate(-130.000000, -122.000000)"
              fill={ColorPalette.Black.LIGHT}
              fillRule="nonzero"
            >
              <g id="bag" transform="translate(130.000000, 122.000000)">
                <path
                  d="M59,14 L59,0 L1,0 L1,14 L0,14 L0,51.259 C0,53.873 2.127,56 4.742,56 L55.259,56 C57.873,56 60,53.873 60,51.259 L60,14 L59,14 Z M56.5,14 L51.32,7.094 L56.414,2 L57,2 L57,14 L56.5,14 Z M11,14 L11,7 C11,6.976 10.988,6.954 10.986,6.93 C10.981,6.866 10.966,6.806 10.95,6.743 C10.939,6.701 10.94,6.658 10.923,6.618 C10.914,6.596 10.896,6.579 10.886,6.557 C10.859,6.502 10.821,6.455 10.783,6.405 C10.755,6.369 10.739,6.324 10.706,6.292 L6.414,2 L53.586,2 L49.294,6.292 C49.262,6.324 49.245,6.369 49.217,6.405 C49.179,6.455 49.142,6.502 49.115,6.557 C49.104,6.579 49.087,6.595 49.077,6.618 C49.06,6.658 49.061,6.702 49.05,6.743 C49.033,6.806 49.018,6.865 49.014,6.93 C49.012,6.954 49,6.976 49,7 L49,14 L11,14 Z M6,14 L9,9.999 L9,14 L6,14 Z M51,9.999 L54,14 L51,14 L51,9.999 Z M3,2 L3.586,2 L8.68,7.094 L3.5,14 L3,14 L3,2 Z M58,51.259 C58,52.771 56.77,54 55.258,54 L4.742,54 C3.23,54 2,52.771 2,51.259 L2,16 L58,16 L58,51.259 Z"
                  id="Shape"
                ></path>
                <path
                  d="M42,22 C41.448,22 41,22.447 41,23 L41,29 C41,35.065 36.065,40 30,40 C23.935,40 19,35.065 19,29 L19,23 C19,22.447 18.552,22 18,22 C17.448,22 17,22.447 17,23 L17,29 C17,36.168 22.832,42 30,42 C37.168,42 43,36.168 43,29 L43,23 C43,22.447 42.552,22 42,22 Z"
                  id="Shape"
                ></path>
                <path
                  d="M20,23 C20,23.553 20.448,24 21,24 C21.552,24 22,23.553 22,23 C22,20.794 20.206,19 18,19 C15.794,19 14,20.794 14,23 C14,23.553 14.448,24 15,24 C15.552,24 16,23.553 16,23 C16,21.897 16.897,21 18,21 C19.103,21 20,21.897 20,23 Z"
                  id="Shape"
                ></path>
                <path
                  d="M42,19 C39.794,19 38,20.794 38,23 C38,23.553 38.448,24 39,24 C39.552,24 40,23.553 40,23 C40,21.897 40.897,21 42,21 C43.103,21 44,21.897 44,23 C44,23.553 44.448,24 45,24 C45.552,24 46,23.553 46,23 C46,20.794 44.206,19 42,19 Z"
                  id="Shape"
                ></path>
              </g>
            </g>
          </g>
        </svg>
        <Span
          size={20}
          weight={700}
          color={ColorPalette.Gray.DARK}
          margin={[20, 0, 0, 0]}
        >
          ????????? ???????????????.
        </Span>
        <Span
          align={TextAlign.CENTER}
          size={14}
          color={ColorPalette.Gray.GRAY}
          margin={[20, 0, 0, 0]}
        >
          ???????????? ????????? ?????????
          <br />
          ????????? ???????????????.
        </Span>
        <Button
          bgColor={ColorPalette.Blue.BLUE}
          color={ColorPalette.White.WHITE}
          padding={[10, 0]}
          radius={4}
          size={12}
          weight={300}
          style={{ width: "50%" }}
          margin={[20, 0, 0, 0]}
          onClick={onClickListButton}
        >
          ???????????? ??????
        </Button>
      </Block>
    );
  };

  return (
    <Block direction={Direction.COLUMN}>
      <Block style={{ width: "95%" }} direction={Direction.COLUMN}>
        {/* ????????? ??????????????? ??? ?????? UI ?????? */}
        {filteredBeerLists !== undefined && filteredBeerLists.length > 0 ? (
          <>
            {filteredBeerLists.map((item) => renderCard(item))}
            <Block direction={Direction.COLUMN} margin={[20, 0, 0, 0]}>
              <Block sort={23}>
                <Span
                  size={20}
                  color={ColorPalette.Gray.DARK}
                  margin={[0, 4, 0, 0]}
                >
                  ??? ????????????
                </Span>
                <Span
                  size={20}
                  color={ColorPalette.Blue.STALE}
                  margin={[0, 3, 0, 0]}
                  weight={700}
                >
                  {formatNumberToComma(totalPrice.totalCount)}
                </Span>
                <Span size={20} color={ColorPalette.Gray.DARK}>
                  ???
                </Span>
              </Block>
              <Block sort={23} margin={[8, 0, 0, 0]}>
                <Span
                  size={20}
                  color={ColorPalette.Gray.DARK}
                  margin={[0, 4, 0, 0]}
                >
                  ??? ????????????
                </Span>
                <Span
                  size={20}
                  color={ColorPalette.Blue.STALE}
                  margin={[0, 3, 0, 0]}
                  weight={700}
                >
                  {formatNumberToComma(totalPrice.totalPrice)}
                </Span>
                <Span size={20} color={ColorPalette.Gray.DARK}>
                  ???
                </Span>
              </Block>

              <Button
                bgColor={ColorPalette.Blue.BLUE}
                color={ColorPalette.White.WHITE}
                padding={[10, 0]}
                radius={4}
                size={20}
                weight={300}
                style={{ width: "100%" }}
                margin={[20, 0, 0, 0]}
                onClick={() => onClickPurchaseButton(myCart, filteredBeerLists)}
              >
                ????????????
              </Button>
            </Block>
          </>
        ) : (
          renderEmpty()
        )}
      </Block>
    </Block>
  );
};

export default BeerCart;
