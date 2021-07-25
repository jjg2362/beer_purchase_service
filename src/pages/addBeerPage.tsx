import React, { useEffect, useState, useCallback } from "react";

import {
  IBeer,
  ITag,
  EPageState,
  IPurchaseItem,
  IPurchaseResult,
} from "../models/types";
import { ColorPalette } from "../models/color";
import useFetchBeers from "../hooks/useFetchBeers";
import useFetchTags from "../hooks/useFetchTags";
import usePurchase from "../hooks/usePurchase";
import Block, { Direction } from "../components/molecules/block";
import BeerList from "../components/templates/beerList";
import BeerCart from "../components/templates/beerCart";
import Header from "../components/organisms/header";

const INCREASE_BEER_COUNT = 5;

const AddBeerPage: React.FC = () => {
  const { beerList } = useFetchBeers();
  const { tagList } = useFetchTags();
  const { onPurchase } = usePurchase();
  const [selectedTagLists, setSelectedTagLists] = useState<ITag[]>([]);
  const [displayedBeerCount, setDisplayedBeerCount] =
    useState<number>(INCREASE_BEER_COUNT);
  const [pageState, setPageState] = useState<EPageState>(EPageState.LIST);
  const [myCart, setMyCart] = useState<IPurchaseItem[]>([]);

  /*
  선택된 태그 리스트(selectedTagLists) 초기화
  모두 선택된 태그로 초기화
  */
  useEffect(() => {
    if (tagList !== null && tagList.length > 0) {
      const lists = [...tagList];
      setSelectedTagLists(lists);
    }
  }, [tagList]);

  /*
  담기 버튼 클릭시 동작
  */
  const onAddItem = useCallback(
    (item: IBeer) => {
      if (beerList !== null) {
        const foundBeer = beerList.find((v) => v.id === item.id);

        if (foundBeer !== undefined) {
          const cart = [...myCart];
          const foundCartIndex = cart.findIndex((v) => v.id === item.id);

          if (foundCartIndex > -1) {
            const stock = foundBeer.stock - cart[foundCartIndex].count;

            if (stock > 0) {
              const count = ++cart[foundCartIndex].count;
              cart[foundCartIndex].count = count;
              setMyCart(cart);
            }
          } else {
            const stock = foundBeer.stock - 1;
            if (stock > 0) {
              cart.push({ id: item.id, count: 1 });
              setMyCart(cart);
            }
          }
        }
      }
    },
    [beerList, myCart]
  );

  /*
   빼기 클릭시 동작
  */
  const onSubItem = useCallback(
    (item: IBeer) => {
      let cart = [...myCart];
      const foundCartIndex = myCart.findIndex((v) => v.id === item.id);
      const count = --myCart[foundCartIndex].count;

      if (count > 0) {
        cart[foundCartIndex].count = count;
      } else {
        cart.splice(foundCartIndex, 1);
      }
      setMyCart(cart);
    },
    [myCart]
  );

  /*
  태그 버튼 클릭시 동작
  태그 버튼을 토글하고, 최대 출력 아이템 갯수를 기본으로 초기화한다.
  맥주 리스트를 정렬한다.
  */
  const onClickTag = useCallback(
    (item: ITag) => {
      if (selectedTagLists !== null) {
        const tagLists = [...selectedTagLists];
        const selectedIndex = selectedTagLists.findIndex(
          (v) => v.name === item.name
        );
        if (selectedIndex > -1) {
          tagLists.splice(selectedIndex, 1);
        } else {
          tagLists.push(item);
        }
        setSelectedTagLists(tagLists);
        setDisplayedBeerCount(INCREASE_BEER_COUNT);
      }
    },
    [selectedTagLists]
  );

  /*
  더보기 버튼 클릭시 동작
  최대 출력 아이템 갯수를 다섯 개 늘린다.
  */
  const onClickMoreButton = useCallback(() => {
    setDisplayedBeerCount(displayedBeerCount + INCREASE_BEER_COUNT);
  }, [displayedBeerCount]);

  const onClickCancelButton = useCallback(
    (item: IBeer) => {
      const foundCartIndex = myCart.findIndex((v) => v.id === item.id);

      if (foundCartIndex > -1) {
        const cart = [...myCart];
        cart.splice(foundCartIndex, 1);
        setMyCart(cart);
      }
    },
    [myCart]
  );

  //카트로 이동
  const onClickCartButton = useCallback(() => {
    if (pageState !== EPageState.CART) {
      setPageState(EPageState.CART);
    }
  }, [pageState]);

  //맥주 리스트로 이동
  const onClickListButton = useCallback(() => {
    if (pageState !== EPageState.LIST) {
      setPageState(EPageState.LIST);
    }
  }, [pageState]);

  /*
  구매하기 버튼 클릭시 작동
  */
  const onClickPurchaseButton = useCallback(
    (purchaseItems: IPurchaseItem[], beerLists: IBeer[]) => {
      const result = onPurchase(purchaseItems, beerLists);
      console.log(result);
      setMyCart([]);
    },
    [onPurchase]
  );

  return (
    <Block
      direction={Direction.COLUMN}
      sort={12}
      style={{
        width: "100%",
        maxWidth: "540px",
        minHeight: "100vh",
        backgroundColor: ColorPalette.Gray.GAINSBORO,
      }}
    >
      <Header
        pageState={pageState}
        beerCount={myCart.length}
        onClickCartButton={onClickCartButton}
        onClickListButton={onClickListButton}
      />
      <Block direction={Direction.COLUMN} padding={[10, 0]}>
        {pageState === EPageState.LIST ? (
          <BeerList
            beerList={beerList}
            tagList={tagList}
            selectedTagLists={selectedTagLists}
            displayedBeerCount={displayedBeerCount}
            myCart={myCart}
            onAddItem={onAddItem}
            onSubItem={onSubItem}
            onClickTag={onClickTag}
            onClickMoreButton={onClickMoreButton}
          />
        ) : (
          <BeerCart
            beerList={beerList}
            myCart={myCart}
            onClickCancelButton={onClickCancelButton}
            onClickListButton={onClickListButton}
            onClickPurchaseButton={onClickPurchaseButton}
          />
        )}
      </Block>
    </Block>
  );
};

export default AddBeerPage;
