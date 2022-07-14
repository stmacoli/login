import { useState } from "react";
import "./App.css";
import CardList from "./components/CardList/CardList";

// antigamente se usava função setState, entao a convenção ficou de usar setX
function App() {
  const [cards, setCards] = useState([
    { name: "tatata" },
    { name: "tatata" },
    { name: "tatata" },
    { name: "tatata" },
  ]);

  return (
    <div className="App">
      <CardList cards={cards} />
    </div>
  );
}

export default App;
