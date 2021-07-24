import React from "react";
import classNames from "classnames";

import styles from "./style.module.css";

interface IProps {
  src: string;
  alt: string;
}

const Image: React.FC<IProps> = ({ src, alt }) => {
  return (
    <img className={classNames(styles.default)} src={`${src}`} alt={alt} />
  );
};

export default Image;
