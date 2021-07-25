import React, { useMemo } from "react";

import { IBeer, IPurchaseItem, ITag } from "../../../models/types";
import { ColorPalette } from "../../../models/color";
import Block, { Direction } from "../../molecules/block";
import TagList from "../../organisms/tagList";
import Button from "../../atoms/button";
import Card from "../../molecules/card";

interface IProps {
  beerList: IBeer[];
  tagList: ITag[];
  selectedTagLists: ITag[];
  displayedBeerCount: number;
  myCart: IPurchaseItem[];
  onAddItem(item: IBeer): void;
  onSubItem(item: IBeer): void;
  onClickTag(item: ITag): void;
  onClickMoreButton(): void;
}

const sortBeerLists = (
  beerLists: IBeer[],
  tagLists: ITag[],
  displayedBeerCount: number
) => {
  if (beerLists.length > 0) {
    const lists = beerLists.map((item) => {
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

    return lists
      .filter((v) => v.priority > 0)
      .sort((a, b) => {
        return a.id - b.id;
      })
      .sort((a, b) => {
        return b.priority! - a.priority!;
      })
      .slice(
        0,
        displayedBeerCount > beerLists.length
          ? beerLists.length
          : displayedBeerCount
      );
  }
};

const BeerList: React.FC<IProps> = ({
  beerList,
  tagList,
  selectedTagLists,
  displayedBeerCount,
  myCart,
  onAddItem,
  onSubItem,
  onClickTag,
  onClickMoreButton,
}) => {
  const filteredBeerLists = useMemo(
    () => sortBeerLists(beerList, selectedTagLists, displayedBeerCount),
    [beerList, selectedTagLists, displayedBeerCount]
  );

  const renderCard = (item: IBeer) => {
    const foundCartIndex = myCart.findIndex((v) => v.id === item.id);
    const count = foundCartIndex > -1 ? myCart[foundCartIndex].count : 0;
    const stock =
      foundCartIndex > -1
        ? item.stock - myCart[foundCartIndex].count
        : item.stock;

    return (
      <Card
        key={item.id}
        beer={item}
        stock={stock}
        count={count}
        ButtonElements={[
          count > 0 ? (
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
          stock > 0 ? (
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
    <>
      {tagList !== undefined && selectedTagLists !== null && (
        <TagList
          tagList={tagList}
          selectedTagLists={selectedTagLists}
          onClickTag={onClickTag}
        />
      )}
      <Block direction={Direction.COLUMN}>
        <Block style={{ width: "95%" }} direction={Direction.COLUMN}>
          {filteredBeerLists !== undefined &&
            filteredBeerLists.map((item) => renderCard(item))}
        </Block>
        {beerList.length > displayedBeerCount && (
          <Button
            color={ColorPalette.Gray.GRAY}
            weight={700}
            size={15}
            padding={[12, 15]}
            bgColor={ColorPalette.White.WHITE}
            radius={15}
            margin={[0, 0, 10, 0]}
            style={{
              boxShadow: "0 2px 2px 1px rgba(0, 0, 0, 0.05)",
            }}
            onClick={onClickMoreButton}
          >
            더 보기 +
          </Button>
        )}
      </Block>
    </>
  );
};

export default BeerList;
