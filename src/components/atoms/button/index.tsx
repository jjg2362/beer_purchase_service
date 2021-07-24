import React from "react";
import classNames from "classnames";

import { ColorType, ColorPalette } from "../../../models/color";
import styles from "./style.module.css";
import { CalculateBox } from "../../../utils";

interface IProps {
  children: React.ReactNode;
  onClick?: any;
  className?: string;
  isCapture?: boolean;
  weight?: number;
  color?: ColorType;
  size?: number;
  bgColor?: ColorType | "none";
  radius?: number;
  margin?: [number, number?, number?, number?];
  padding?: [number, number?, number?, number?];
  disabled?: boolean;
  style?: object;
}

const Button: React.FC<IProps> = ({
  children,
  className,
  isCapture = false,
  weight = 300,
  color = ColorPalette.Black.BLACK,
  size = 12,
  bgColor = "none",
  radius = 0,
  margin = [0],
  padding = [0],
  onClick,
  disabled = false,
  style,
}) => {
  const classProps = classNames(styles.default, className);
  const styleProps = {
    ...style,
    fontSize: size,
    color,
    fontWeight: weight,
    backgroundColor: bgColor,
    borderRadius: radius,
    margin: CalculateBox(margin),
    padding: CalculateBox(padding),
  };
  let clickEvent = isCapture ? { onClickCapture: onClick } : { onClick };

  return (
    <button
      {...clickEvent}
      className={classProps}
      style={styleProps}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
