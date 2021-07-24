import React, { useEffect, useState, useCallback } from "react";

import { IBeer, ITag } from "../models/types";
import useFetchBeers from "../hooks/useFetchBeers";
import useFetchTags from "../hooks/useFetchTags";
import AddBeer from "../components/templates/addBeer";

const AddBeerPage: React.FC = () => {
  const { beerList, setBeerList } = useFetchBeers();
  const { tagList } = useFetchTags();
  const [selectedTagLists, setSelectedTagLists] = useState<ITag[] | null>(null);
  const [taggedBeerLists, setTaggedBeerLists] = useState<IBeer[]>([]);

  /*
  selectedTagLists 또는 beerList 변경시 선택된 태그에 따라 priority값 변경한 객체를 taggedBeerLists에 할당
  */
  useEffect(() => {
    if (
      selectedTagLists &&
      beerList &&
      selectedTagLists.length > 0 &&
      beerList.length > 0
    ) {
      const lists = beerList.map((beer) => {
        let priority = 0;
        beer.tags.forEach((beerTag) => {
          const isTagged = selectedTagLists.find((selectedTag) =>
            selectedTag.name.match(beerTag.name)
          );
          if (isTagged !== undefined) {
            ++priority;
          }
        });
        return { ...beer, priority };
      });
      setTaggedBeerLists(
        lists
          .filter((item) => item.priority > 0)
          .sort((a, b) => {
            return b.priority! - a.priority!;
          })
      );
    }
  }, [selectedTagLists, beerList]);

  /*
  선택된 태그 리스트(selectedTagLists) 초기화
  모두 선택된 태그로 초기화
  */
  useEffect(() => {
    if (tagList !== undefined) {
      const lists = [...tagList];
      setSelectedTagLists(lists);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tagList]);

  /*
  담기 버튼 클릭시 동작
  */
  const onAddItem = useCallback(
    (item: IBeer) => {
      const stock = item.stock - 1;
      if (stock >= 0) {
        const lists = beerList.map((beerItem) => {
          if (beerItem.id === item.id) {
            return { ...beerItem, stock, count: item.count! + 1 };
          }
          return beerItem;
        });
        setBeerList(lists);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [beerList]
  );

  /*
   빼기 클릭시 동작
  */
  const onSubItem = useCallback(
    (item: IBeer) => {
      if (item.count! > 0) {
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
      }
    },
    [selectedTagLists]
  );

  return (
    <>
      {tagList !== undefined && selectedTagLists !== null && (
        <AddBeer
          totalBeerCount={beerList.filter((v) => v.count! > 0).length}
          beerList={taggedBeerLists}
          tagList={tagList}
          selectedTagLists={selectedTagLists}
          onAddItem={onAddItem}
          onSubItem={onSubItem}
          onClickTag={onClickTag}
        />
      )}
    </>
  );
};

export default AddBeerPage;
