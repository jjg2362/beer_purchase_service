import React from "react";
import "./app.css";
import useFetchBeers from "./hooks/useFetchBeers";
import useFetchTags from "./hooks/useFetchTags";

const App: React.FC = () => {
  const { beerList } = useFetchBeers();
  const { tagList } = useFetchTags();

  return <div>hello</div>;
};

export default App;
