import React, { memo } from "react";

import { EPageState } from "../../../models/types";

import { ColorPalette } from "../../../models/color";
import P from "../../atoms/p";
import Block from "../../molecules/block";
import CartButton from "../../molecules/cartButton";
import ListButton from "../../molecules/listButton";
import Sticky from "../../molecules/sticky";

interface IProps {
  beerCount: number;
  pageState: EPageState;
  onClickListButton(): void;
  onClickCartButton(): void;
}

const Header: React.FC<IProps> = memo(
  ({ beerCount, pageState, onClickListButton, onClickCartButton }) => {
    return (
      <Sticky coordinate={11}>
        <Block
          style={{
            backgroundColor: ColorPalette.White.WHITE,
            boxShadow: "0 2px 1px rgba(0, 0, 0, 0.2)",
          }}
          padding={[15, 12]}
          sort={42}
        >
          <P size={20} color={ColorPalette.Black.LIGHT}>
            맥주담기
          </P>

          <Block sort={23}>
            <ListButton
              onClick={onClickListButton}
              isOn={pageState === EPageState.LIST}
            />
            <CartButton
              onClick={onClickCartButton}
              isOn={pageState === EPageState.CART}
              beerCount={beerCount}
            />
          </Block>
        </Block>
      </Sticky>
    );
  }
);

export default Header;
