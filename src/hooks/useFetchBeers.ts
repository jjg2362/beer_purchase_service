import { useState, useEffect } from "react"
import { IBeer } from "../models/types";

const requestOptions: RequestInit = {
    method: 'GET',
    redirect: 'follow'
  };

const useFetchBeers = () : {beerList : IBeer[], setBeerList: (beerList: IBeer[]) => void} => {
  const [beerList, setBeerList] = useState<IBeer[]>([])
  
  useEffect(() => {
    fetch("https://0bdffadc-6eba-45d3-8fa0-faae85d08141.mock.pstmn.io//api/beers", requestOptions)
      .then(response => response.json())
      .then(result => {
        const lists = result.map((item: IBeer) => {
        return {...item, count: 0, priority: 0}}
        );
        setBeerList(lists);
      })
      .catch(error => console.log('error', error));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    beerList,
    setBeerList
  }
}

export default useFetchBeers
