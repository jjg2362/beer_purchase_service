import { useState, useEffect } from "react"
import { ITag } from "../models/types";

const useFetchTags = () : {tagList : ITag[]} => {
  const [tagList, setTagList] = useState<ITag[]>([])
  
  useEffect(() => {
      fetch("https://04a5916d-c237-4406-805d-bab16ba73b41.mock.pstmn.io/api/tags", {
        method: 'GET',
        redirect: 'follow'
      })
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
