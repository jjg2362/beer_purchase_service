import React from "react";
import classNames from "classnames";

import { ITag } from "../../../models/types";
import { ColorPalette } from "../../../models/color";
import Header from "../../organisms/header";
import Block, { Direction } from "../../molecules/block";
import TagList from "../../organisms/tagList";
import styles from "./style.module.css";

interface IProps {
  tagList: ITag[];
}

const AddBeer: React.FC<IProps> = ({ tagList }) => {
  return (
    <Block
      direction={Direction.COLUMN}
      sort={12}
      style={{
        width: "100%",
        maxWidth: "320px",
        minHeight: "100vh",
        overflow: "hidden",
        backgroundColor: ColorPalette.Gray.GAINSBORO,
      }}
    >
      <Header beerCount={0} />
      <TagList tagList={tagList} />
    </Block>
  );
};

export default AddBeer;
