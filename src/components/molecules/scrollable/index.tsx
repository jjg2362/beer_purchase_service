import React from "react";
import classNames from "classnames";

import Block, { Direction, Sort } from "../block";
import styles from "./style.module.css";

export enum ScrollType {
  HORIZONTAL,
  VERTICAL,
}

export enum ViewType {
  WRAP,
  OVERFLOW,
}

interface IProps {
  children: React.ReactNode;
  className?: string;
  scrollType?: ScrollType;
  viewType?: ViewType;
  margin?: [number, number?, number?, number?];
  padding?: [number, number?, number?, number?];
  innerPadding?: [number, number?, number?, number?];
}

const Scrollable: React.FC<IProps> = ({
  className,
  children,
  scrollType = ScrollType.HORIZONTAL,
  viewType = ViewType.WRAP,
  padding = [0],
  margin = [0],
  innerPadding = [0],
}) => {
  const classProps = classNames(styles.default, className);

  const styleProps = {
    [scrollType === ScrollType.HORIZONTAL ? "overflowX" : "overflowY"]:
      viewType === ViewType.OVERFLOW ? "auto" : "visible",
    flexWrap: ViewType.WRAP ? "wrap" : "nowrap",
  };

  return (
    <Block
      className={classProps}
      style={styleProps}
      direction={Direction.COLUMN}
      sort={Sort.TOP_LEFT}
      margin={margin}
      padding={padding}
    >
      <Block
        sort={Sort.TOP_LEFT}
        direction={
          scrollType === ScrollType.HORIZONTAL
            ? Direction.ROW
            : Direction.COLUMN
        }
        padding={innerPadding}
      >
        {children}
      </Block>
    </Block>
  );
};

export default Scrollable;
