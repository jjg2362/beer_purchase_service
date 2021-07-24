import React, { useState, useCallback } from "react";

import { ColorPalette } from "../../../models/color";
import Block from "../../molecules/block";
import P from "../../atoms/p";
import CartButton from "../../molecules/cartButton";
import ListButton from "../../molecules/listButton";

enum EPageState {
  LIST,
  CART,
}

interface IProps {
  beerCount: number;
}

const Header: React.FC<IProps> = ({ beerCount }) => {
  const [pageState, setPageState] = useState<EPageState>(EPageState.LIST);

  const onClickCartButton = useCallback(() => {
    if (pageState !== EPageState.CART) {
      setPageState(EPageState.CART);
    }
  }, [pageState]);

  const onClickListButton = useCallback(() => {
    if (pageState !== EPageState.LIST) {
      setPageState(EPageState.LIST);
    }
  }, [pageState]);

  return (
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
  );
};

export default Header;
