import React from "react";

import AddBeer from "../components/templates/addBeer";
import useFetchBeers from "../hooks/useFetchBeers";
import useFetchTags from "../hooks/useFetchTags";

const AddBeerPage = () => {
  const { beerList } = useFetchBeers();
  const { tagList } = useFetchTags();

  return (
    <>
      <AddBeer />
    </>
  );
};

export default AddBeerPage;
