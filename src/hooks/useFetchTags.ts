import { useState, useEffect } from "react"
import { ITag } from "../models/types";

const requestOptions: RequestInit = {
    method: 'GET',
    redirect: 'follow'
  };

const useFetchTags = () : {tagList : ITag[]} => {
  const [tagList, setTagList] = useState<ITag[]>([])
  
  useEffect(() => {
      fetch("https://0bdffadc-6eba-45d3-8fa0-faae85d08141.mock.pstmn.io//api/tags", requestOptions)
        .then(response => response.json())
        .then(result => setTagList(result))
        .catch(error => console.log('error', error));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    tagList
  }
}

export default useFetchTags
