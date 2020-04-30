import React from "react";
import Card from "./components/card";
import emojidata from "./emojidata";
function App() {
  return <div className="row">{emojidata.map(Card)}</div>;
}

export default App;
