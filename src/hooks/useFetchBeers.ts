import { useState, useEffect } from "react"
import { IBeer } from "../models/types";

const useFetchBeers = () : {beerList : IBeer[]} => {
  const [beerList, setBeerList] = useState<IBeer[]>([])
  
  useEffect(() => {
    fetch("https://04a5916d-c237-4406-805d-bab16ba73b41.mock.pstmn.io/api/beer", {
        method: 'GET',
        redirect: 'follow'
      })
        .then(response => response.json())
        .then(result => setBeerList(result))
        .catch(error => console.log('error', error));
  }, [])

  return {
    beerList,
  }
}

export default useFetchBeers
