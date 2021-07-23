import React from "react";
import classNames from "classnames";

import Header from "../../organisms/header";
import styles from "./style.module.css";

interface IProps {}

const AddBeer: React.FC<IProps> = () => {
  return (
    <div className={classNames(styles.container)}>
      <Header beerCount={0} />
    </div>
  );
};

export default AddBeer;
