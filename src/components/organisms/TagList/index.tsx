import React from "react";
import { ColorPalette } from "../../../models/color";
import { ITag } from "../../../models/types";
import Button from "../../atoms/button";
import Scrollable, { ScrollType, ViewType } from "../../molecules/scrollable";

interface IProps {
  tagList: ITag[];
}

const TagList: React.FC<IProps> = ({ tagList }) => {
  return (
    <Scrollable
      scrollType={ScrollType.HORIZONTAL}
      viewType={ViewType.OVERFLOW}
      margin={[0, 0, 10, 0]}
      padding={[0, 0, 0, 20]}
    >
      {tagList.map((item, index) => {
        return (
          <Button
            bgColor={ColorPalette.Blue.BLUE}
            color={ColorPalette.White.WHITE}
            size={12}
            weight={300}
            padding={[10, 12]}
            radius={4}
            margin={index < tagList.length - 1 ? [0, 5, 0, 0] : [0]}
          >
            {item.name}
          </Button>
        );
      })}
    </Scrollable>
  );
};

export default TagList;
