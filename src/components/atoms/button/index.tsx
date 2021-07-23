import React from "react";
import classNames from "classnames";

import { ColorType, ColorPalette } from "../../../models/color";
import styles from "./style.module.css";
import { CalculateBox } from "../../../utils";

interface IProps {
  children: React.ReactNode;
  className?: string;
  weight?: number;
  color?: ColorType;
  size?: number;
  bgColor?: ColorType | "none";
  radius?: number;
  margin?: [number, number?, number?, number?];
  padding?: [number, number?, number?, number?];
}

const Button: React.FC<IProps> = ({
  children,
  className,
  weight = 300,
  color = ColorPalette.Black.BLACK,
  size = 12,
  bgColor = "none",
  radius = 0,
  margin = [0],
  padding = [0],
}) => {
  const classProps = classNames(styles.default, className);
  const styleProps = {
    fontSize: size,
    color,
    fontWeight: weight,
    backgroundColor: bgColor,
    borderRadius: radius,
    margin: CalculateBox(margin),
    padding: CalculateBox(padding),
  };

  return (
    <button className={classProps} style={styleProps}>
      {children}
    </button>
  );
};

export default Button;
