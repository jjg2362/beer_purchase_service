import { IPurchaseResult, IPurchaseItem, IBeer } from "../models/types";

const usePurchase = () : {onPurchase(purchaseItems: IPurchaseItem[],  beerLists: IBeer[]): IPurchaseResult} => {

  const onPurchase = (purchaseItems: IPurchaseItem[], beerLists: IBeer[]) => {
    // fetch("https://04a5916d-c237-4406-805d-bab16ba73b41.mock.pstmn.io/api", {
    //   method: 'POST',
    //   body: JSON.stringify(purchaseItems),
    //   redirect: 'follow'
    // })
    //   .then(response => response.json())
    //   .then((result: IPurchaseResult) => {
    //     return result;
    //   })
    //   .catch(error => console.log('error', error));

    const result: IPurchaseResult = {
      totalCount: 0,
      totalPrice: 0,
    };
  
    purchaseItems.forEach((item) => {
      const foundBeer = beerLists.find((v) => v.id === item.id);
  
      if (foundBeer !== undefined) {
        const count = item.count + result.totalCount;
        const price = foundBeer.price * item.count + result.totalPrice;
        result.totalCount = count;
        result.totalPrice = price;
      }
    });
  
    return result;
  }

  return {
    onPurchase,
  }
}

export default usePurchase
