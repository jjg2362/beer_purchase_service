import React from "react";
import "./app.css";
import Span from "./components/atoms/span";
import useFetchBeers from "./hooks/useFetchBeers";
import useFetchTags from "./hooks/useFetchTags";

const App: React.FC = () => {
  const { beerList } = useFetchBeers();
  const { tagList } = useFetchTags();

  return (
    <div>
      <Span size={16}>Hello</Span>
    </div>
  );
};

export default App;
