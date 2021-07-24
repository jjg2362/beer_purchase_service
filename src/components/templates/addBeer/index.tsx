import React from "react";
import classNames from "classnames";

import { IBeer, ITag } from "../../../models/types";
import { ColorPalette } from "../../../models/color";
import Header from "../../organisms/header";
import Block, { Direction } from "../../molecules/block";
import TagList from "../../organisms/tagList";
import BeerList from "../../organisms/beerList";
import Button from "../../atoms/button";
import styles from "./style.module.css";

interface IProps {
  totalBeerCount: number;
  beerList: IBeer[];
  tagList: ITag[];
  selectedTagLists: ITag[];
  displayedBeerCount: number;
  onAddItem(item: IBeer): void;
  onSubItem(item: IBeer): void;
  onClickTag(item: ITag): void;
  onClickMoreButton(): void;
}

const AddBeer: React.FC<IProps> = ({
  totalBeerCount,
  beerList,
  tagList,
  selectedTagLists,
  displayedBeerCount,
  onAddItem,
  onSubItem,
  onClickTag,
  onClickMoreButton,
}) => {
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
      <Header beerCount={totalBeerCount} />
      <Block direction={Direction.COLUMN} padding={[10, 0]}>
        <TagList
          tagList={tagList}
          selectedTagLists={selectedTagLists}
          onClickTag={onClickTag}
        />
        <Block direction={Direction.COLUMN}>
          <BeerList
            beerList={beerList.slice(
              0,
              displayedBeerCount > beerList.length
                ? beerList.length
                : displayedBeerCount
            )}
            onAddItem={onAddItem}
            onSubItem={onSubItem}
          />
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
      </Block>
    </Block>
  );
};

export default AddBeer;
