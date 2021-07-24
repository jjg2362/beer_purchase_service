import React, { useEffect, useState, useCallback } from "react";

import { IBeer, ITag } from "../models/types";
import useFetchBeers from "../hooks/useFetchBeers";
import useFetchTags from "../hooks/useFetchTags";
import AddBeer from "../components/templates/addBeer";

const INCREASE_BEER_COUNT = 5;

const AddBeerPage: React.FC = () => {
  const { beerList } = useFetchBeers();
  const { tagList } = useFetchTags();
  const [selectedTagLists, setSelectedTagLists] = useState<ITag[] | null>(null);
  const [sortedBeerLists, setSortedBeerLists] = useState<IBeer[]>([]);
  const [displayedBeerCount, setDisplayedBeerCount] =
    useState<number>(INCREASE_BEER_COUNT);

  /*
  selectedTagLists 또는 beerList 변경시 선택된 태그에 따라 priority값 변경한 객체를 sortedBeerLists에 할당
  */
  const sortBeerList = useCallback(
    (tagLists: ITag[]) => {
      if (tagLists && beerList && tagLists.length > 0 && beerList.length > 0) {
        const lists = beerList.map((item) => {
          let priority = 0;
          item.tags.forEach((beerTag) => {
            const isTagged = tagLists.find((selectedTag) =>
              selectedTag.name.match(beerTag.name)
            );
            if (isTagged !== undefined) {
              ++priority;
            }
          });
          return { ...item, priority };
        });

        setSortedBeerLists(
          lists
            .filter((v) => v.priority > 0)
            .sort((a, b) => {
              return b.priority! - a.priority!;
            })
        );
      }
    },
    [beerList]
  );

  /*
  선택된 태그 리스트(selectedTagLists) 초기화
  모두 선택된 태그로 초기화
  */
  useEffect(() => {
    if (tagList !== undefined) {
      const lists = [...tagList];
      setSelectedTagLists(lists);
      sortBeerList(lists);
    }
  }, [tagList, sortBeerList]);

  /*
  담기 버튼 클릭시 동작
  */
  const onAddItem = useCallback(
    (item: IBeer) => {
      const stock = item.stock - 1;
      if (stock >= 0) {
        const lists = sortedBeerLists.map((beerItem) => {
          if (beerItem.id === item.id) {
            return { ...beerItem, stock, count: item.count! + 1 };
          }
          return beerItem;
        });
        setSortedBeerLists(lists);
      }
    },
    [sortedBeerLists]
  );

  /*
   빼기 클릭시 동작
  */
  const onSubItem = useCallback(
    (item: IBeer) => {
      if (item.count! > 0) {
        const lists = sortedBeerLists.map((beerItem) => {
          if (beerItem.id === item.id) {
            return {
              ...beerItem,
              stock: item.stock + 1,
              count: item.count! - 1,
            };
          }
          return beerItem;
        });
        setSortedBeerLists(lists);
      }
    },
    [sortedBeerLists]
  );

  /*
  태그 버튼 클릭시 동작
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
        sortBeerList(tagLists);
      }
    },
    [selectedTagLists, sortBeerList]
  );

  const onClickMoreButton = useCallback(() => {
    setDisplayedBeerCount(displayedBeerCount + INCREASE_BEER_COUNT);
  }, [displayedBeerCount]);

  return (
    <>
      {tagList !== undefined && selectedTagLists !== null && (
        <AddBeer
          totalBeerCount={beerList.filter((v) => v.count! > 0).length}
          beerList={sortedBeerLists}
          tagList={tagList}
          selectedTagLists={selectedTagLists}
          displayedBeerCount={displayedBeerCount}
          onAddItem={onAddItem}
          onSubItem={onSubItem}
          onClickTag={onClickTag}
          onClickMoreButton={onClickMoreButton}
        />
      )}
    </>
  );
};

export default AddBeerPage;
