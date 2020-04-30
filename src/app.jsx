import React from "react";
import Card from "./components/card";
import emojidata from "./emojidata";
import Nav from "./components/nav";
function App() {
  return (
    <div>
      <Nav />
      <div className="row">{emojidata.map(Card)}</div>;
    </div>
  );
}

export default App;
