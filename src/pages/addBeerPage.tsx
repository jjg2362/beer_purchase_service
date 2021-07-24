import React, { useState, useCallback } from "react";

import { IBeer, IPurchaseItem } from "../models/types";
import useFetchBeers from "../hooks/useFetchBeers";
import useFetchTags from "../hooks/useFetchTags";
import AddBeer from "../components/templates/addBeer";

const AddBeerPage = () => {
  const { beerList, setBeerList } = useFetchBeers();
  const { tagList } = useFetchTags();

  const onAddItem = useCallback(
    (item: IBeer) => {
      const stock = item.stock - 1;
      const count = item.count || 0;
      if (stock >= 0) {
        const lists = beerList.map((beerItem) => {
          if (beerItem.id === item.id) {
            return { ...beerItem, stock, count: count + 1 };
          }
          return beerItem;
        });
        setBeerList(lists);
        console.log(stock);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [beerList]
  );

  const onSubItem = useCallback(
    (item: IBeer) => {
      if (item.count !== undefined && item.count > 0) {
        const lists = beerList.map((beerItem) => {
          if (beerItem.id === item.id) {
            return {
              ...beerItem,
              stock: item.stock + 1,
              count: item.count! - 1,
            };
          }
          return beerItem;
        });
        setBeerList(lists);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [beerList]
  );

  return (
    <>
      {tagList !== undefined && (
        <AddBeer
          beerList={beerList}
          tagList={tagList}
          onAddItem={onAddItem}
          onSubItem={onSubItem}
        />
      )}
    </>
  );
};

export default AddBeerPage;
