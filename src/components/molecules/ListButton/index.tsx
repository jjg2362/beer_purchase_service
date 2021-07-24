import React from "react";
import classNames from "classnames";

import { ColorPalette } from "../../../models/color";
import Button from "../../atoms/button";
import styles from "./style.module.css";
import Block, { Direction } from "../block";

interface IProps {
  isOn: boolean;
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
}

const ListButton: React.FC<IProps> = ({ isOn, onClick }) => {
  const iconColor = isOn ? ColorPalette.Blue.BLUE : ColorPalette.Black.LIGHT;

  return (
    <Button onClick={onClick} margin={[0, 10, 0, 0]}>
      <Block
        direction={Direction.COLUMN}
        sort={42}
        style={{ width: "23px", height: "19px" }}
      >
        <Block>
          <svg
            width="5px"
            height="5px"
            viewBox="0 0 5 5"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className={classNames(styles.icon)}
          >
            <g
              id="Welcome"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="맥주-목록-페이지-2"
                transform="translate(-242.000000, -30.000000)"
                fillRule="nonzero"
              >
                <g id="Header">
                  <path
                    fill={iconColor}
                    d="M244.186441,35 C245.393754,35 246.372881,34.016724 246.372881,32.8135593 C246.372881,31.6062458 245.389605,30.6271186 244.186441,30.6271186 C242.983276,30.6271186 242,31.6103946 242,32.8135593 C242,34.016724 242.983276,35 244.186441,35 Z M244.186441,31.6394365 C244.83366,31.6394365 245.356415,32.1663397 245.356415,32.8094105 C245.356415,33.4566301 244.829511,33.9793844 244.186441,33.9793844 C243.54337,33.9793844 243.016467,33.4524813 243.016467,32.8094105 C243.016467,32.1663397 243.54337,31.6394365 244.186441,31.6394365 Z"
                    id="Shape"
                  ></path>
                </g>
              </g>
            </g>
          </svg>

          <svg
            width="15px"
            height="2px"
            viewBox="0 0 15 2"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className={classNames(styles.icon)}
          >
            <g
              id="Welcome"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="맥주-목록-페이지-2"
                transform="translate(-248.000000, -18.000000)"
                fillRule="nonzero"
              >
                <g id="Header">
                  <path
                    fill={iconColor}
                    d="M249.327554,19.7457627 L261.926684,19.7457627 C262.210843,19.7457627 262.440678,19.518396 262.440678,19.2372881 C262.440678,18.9561802 262.210843,18.7288136 261.926684,18.7288136 L249.327554,18.7288136 C249.043394,18.7288136 248.813559,18.9561802 248.813559,19.2372881 C248.813559,19.518396 249.043394,19.7457627 249.327554,19.7457627 Z"
                    id="Shape"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </Block>
        <Block>
          <svg
            width="5px"
            height="5px"
            viewBox="0 0 5 5"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className={classNames(styles.icon)}
          >
            <g
              id="Welcome"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="맥주-목록-페이지-2"
                transform="translate(-242.000000, -30.000000)"
                fillRule="nonzero"
              >
                <g id="Header">
                  <path
                    fill={iconColor}
                    d="M244.186441,35 C245.393754,35 246.372881,34.016724 246.372881,32.8135593 C246.372881,31.6062458 245.389605,30.6271186 244.186441,30.6271186 C242.983276,30.6271186 242,31.6103946 242,32.8135593 C242,34.016724 242.983276,35 244.186441,35 Z M244.186441,31.6394365 C244.83366,31.6394365 245.356415,32.1663397 245.356415,32.8094105 C245.356415,33.4566301 244.829511,33.9793844 244.186441,33.9793844 C243.54337,33.9793844 243.016467,33.4524813 243.016467,32.8094105 C243.016467,32.1663397 243.54337,31.6394365 244.186441,31.6394365 Z"
                    id="Shape"
                  ></path>
                </g>
              </g>
            </g>
          </svg>

          <svg
            width="15px"
            height="2px"
            viewBox="0 0 15 2"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className={classNames(styles.icon)}
          >
            <g
              id="Welcome"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="맥주-목록-페이지-2"
                transform="translate(-248.000000, -18.000000)"
                fillRule="nonzero"
              >
                <g id="Header">
                  <path
                    fill={iconColor}
                    d="M249.327554,19.7457627 L261.926684,19.7457627 C262.210843,19.7457627 262.440678,19.518396 262.440678,19.2372881 C262.440678,18.9561802 262.210843,18.7288136 261.926684,18.7288136 L249.327554,18.7288136 C249.043394,18.7288136 248.813559,18.9561802 248.813559,19.2372881 C248.813559,19.518396 249.043394,19.7457627 249.327554,19.7457627 Z"
                    id="Shape"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </Block>
        <Block>
          <svg
            width="5px"
            height="5px"
            viewBox="0 0 5 5"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className={classNames(styles.icon)}
          >
            <g
              id="Welcome"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="맥주-목록-페이지-2"
                transform="translate(-242.000000, -30.000000)"
                fillRule="nonzero"
              >
                <g id="Header">
                  <path
                    fill={iconColor}
                    d="M244.186441,35 C245.393754,35 246.372881,34.016724 246.372881,32.8135593 C246.372881,31.6062458 245.389605,30.6271186 244.186441,30.6271186 C242.983276,30.6271186 242,31.6103946 242,32.8135593 C242,34.016724 242.983276,35 244.186441,35 Z M244.186441,31.6394365 C244.83366,31.6394365 245.356415,32.1663397 245.356415,32.8094105 C245.356415,33.4566301 244.829511,33.9793844 244.186441,33.9793844 C243.54337,33.9793844 243.016467,33.4524813 243.016467,32.8094105 C243.016467,32.1663397 243.54337,31.6394365 244.186441,31.6394365 Z"
                    id="Shape"
                  ></path>
                </g>
              </g>
            </g>
          </svg>

          <svg
            width="15px"
            height="2px"
            viewBox="0 0 15 2"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className={classNames(styles.icon)}
          >
            <g
              id="Welcome"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="맥주-목록-페이지-2"
                transform="translate(-248.000000, -18.000000)"
                fillRule="nonzero"
              >
                <g id="Header">
                  <path
                    fill={iconColor}
                    d="M249.327554,19.7457627 L261.926684,19.7457627 C262.210843,19.7457627 262.440678,19.518396 262.440678,19.2372881 C262.440678,18.9561802 262.210843,18.7288136 261.926684,18.7288136 L249.327554,18.7288136 C249.043394,18.7288136 248.813559,18.9561802 248.813559,19.2372881 C248.813559,19.518396 249.043394,19.7457627 249.327554,19.7457627 Z"
                    id="Shape"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </Block>
      </Block>
    </Button>
  );
};

export default ListButton;
