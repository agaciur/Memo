// import "./App.css"
import { Board } from "./components/Board";
import { useState } from "react";
import panda from "./assets/images/panda.svg";
import cow from "./assets/images/cow.svg";
import dog from "./assets/images/dog.svg";
import elephant from "./assets/images/elephant.svg";
import penguin from "./assets/images/penguin.svg";
import pig from "./assets/images/pig.svg";
import rat from "./assets/images/rat.svg";
import sheep from "./assets/images/sheep.svg";
import turkey from "./assets/images/turkey.svg";
import zebra from "./assets/images/zebra.svg";

const animalArray = [
  cow,
  cow,
  dog,
  dog,
  elephant,
  elephant,
  panda,
  panda,
  penguin,
  penguin,
  pig,
  pig,
  rat,
  rat,
  sheep,
  sheep,
  turkey,
  turkey,
  zebra,
  zebra,
];

function App() {
  const [newDeal, setNewDeal] = useState([]);
  const [clickStart, setClickStart] = useState(false);
  const [hiddenCards, setHiddenCards] = useState(animalArray.length);

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  function startGame() {
    setNewDeal(shuffle(animalArray));
    setClickStart(true);
  }

  function nextGame() {
    setNewDeal(shuffle(animalArray));
    setClickStart(true);
  }
  return (
    <div className="container mx-auto">
      <div className="grid justify-items-center">
        <h1 className="my-6 text-center text-6xl font-bold text-cyan-950">
          Memory
        </h1>
        {clickStart ? (
          <button
            className=" mb-4 w-52 rounded-full bg-yellow-600 px-4 py-2 text-white transition hover:bg-yellow-400 hover:text-cyan-950"
            onClick={nextGame}
          >
            Nowe rozdanie
          </button>
        ) : (
          <button
            className=" mb-4 w-52 rounded-full bg-yellow-600 px-4 py-2 text-white transition hover:bg-yellow-400 hover:text-cyan-950"
            onClick={startGame}
          >
            Rozpocznij grę
          </button>
        )}
      </div>
      <Board
        newDeal={newDeal}
        hiddenCards={hiddenCards}
        setHiddenCards={setHiddenCards}
      />
    </div>
  );
}

export default App;
