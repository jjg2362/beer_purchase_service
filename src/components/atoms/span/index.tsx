import React from "react";
import classNames from "classnames";

import { ColorType, ColorPalette } from "../../../models/color";
import { CalculateBox } from "../../../utils";
import styles from "./style.module.css";

export enum TextAlign {
  LEFT = "left",
  CENTER = "center",
  RIGHT = "right",
}

interface IProps {
  children: React.ReactNode;
  className?: string;
  lineHeight?: number;
  weight?: number;
  color?: ColorType;
  size?: number;
  margin?: [number, number?, number?, number?];
  align?: TextAlign;
  style?: object;
}

const Span: React.FC<IProps> = ({
  children,
  className,
  lineHeight = 1,
  weight = 300,
  color = ColorPalette.Black.BLACK,
  size = 12,
  margin = [0],
  align = TextAlign.LEFT,
  style,
}) => {
  const classProps = classNames(styles.default, className);
  const styleProps = {
    ...style,
    fontSize: size,
    color,
    fontWeight: weight,
    lineHeight,
    margin: CalculateBox(margin),
    textAlign: align,
  };

  return (
    <span className={classProps} style={styleProps}>
      {children}
    </span>
  );
};

export default Span;
