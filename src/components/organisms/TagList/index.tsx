import React from "react";
import { memo } from "react";
import { ColorPalette } from "../../../models/color";
import { ITag } from "../../../models/types";
import Button from "../../atoms/button";
import Scrollable, { ScrollType, ViewType } from "../../molecules/scrollable";

interface IProps {
  tagList: ITag[];
  selectedTagLists: ITag[];
  onClickTag(item: ITag): void;
}

const TagList: React.FC<IProps> = memo(
  ({ tagList, selectedTagLists, onClickTag }) => {
    const renderTagItem = (item: ITag, index: number) => {
      const isSelected =
        selectedTagLists.findIndex((v) => v.name === item.name) > -1;
      return (
        <Button
          bgColor={isSelected ? ColorPalette.Blue.BLUE : "transparent"}
          color={
            isSelected ? ColorPalette.White.WHITE : ColorPalette.Blue.LIGHT
          }
          size={12}
          weight={300}
          padding={[10, 12]}
          radius={4}
          margin={index < tagList.length - 1 ? [0, 5, 0, 0] : [0]}
          onClick={() => onClickTag(item)}
          outline={isSelected ? "none" : ColorPalette.Blue.SKY}
        >
          {item.name}
        </Button>
      );
    };
    return (
      <Scrollable
        scrollType={ScrollType.HORIZONTAL}
        viewType={ViewType.OVERFLOW}
        margin={[0, 0, 10, 0]}
        padding={[0, 0, 0, 20]}
      >
        {tagList.length > 0 &&
          tagList.map((item, index) => renderTagItem(item, index))}
      </Scrollable>
    );
  }
);

export default TagList;
