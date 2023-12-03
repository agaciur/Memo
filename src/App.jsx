import { Board } from "./components/Board";
import { useEffect, useState } from "react";
import { shuffle } from "./utils/shuffle";
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
import { Scoreborad } from "./components/Scoreboard";

const animalArray = [
  { image: cow, active: false },
  { image: cow, active: false },
  { image: dog, active: false },
  { image: dog, active: false },
  { image: elephant, active: false },
  { image: elephant, active: false },
  { image: panda, active: false },
  { image: panda, active: false },
  { image: penguin, active: false },
  { image: penguin, active: false },
  { image: pig, active: false },
  { image: pig, active: false },
  { image: rat, active: false },
  { image: rat, active: false },
  { image: sheep, active: false },
  { image: sheep, active: false },
  { image: turkey, active: false },
  { image: turkey, active: false },
  { image: zebra, active: false },
  { image: zebra, active: false },
];

function App() {
  const [newDeal, setNewDeal] = useState(shuffle(animalArray));
  const [score, setScore] = useState(0);
  const [firstCard, setFirstCard] = useState([]);
  useEffect(() => {
    const isEndOfGame = newDeal.every((animal) => animal.active);
    if (isEndOfGame) {
      setTimeout(() => alert("Koniec gry!"), 100);
    }
  }, [newDeal]);

  function showCard(index, image) {
    setNewDeal((prev) =>
      prev.map((item, key) => {
        if (key !== index) {
          return item;
        }
        return { ...item, active: true };
      }),
    );

    if (firstCard.length === 0) {
      setFirstCard([image, index]);
    } else {
      checkCards(index, image);
    }
  }

  function checkCards(index, image) {
    if (firstCard[0] === image) {
      setScore((prev) => prev + 1);
    } else {
      setTimeout(() => {
        setNewDeal((prev) =>
          prev.map((item, key) => {
            if (key !== index && key !== firstCard[1]) {
              return item;
            }
            return { ...item, active: false };
          }),
        );
      }, 500);
    }
    setFirstCard([]);
  }

  function nextGame(e) {
    setScore(0);
    setFirstCard([]);
    setNewDeal(shuffle(animalArray));
  }

  return (
    <div className="container mx-auto">
      <div className="grid justify-items-center">
        <h1 className="my-6 text-center text-6xl font-bold text-cyan-950">
          Memory
        </h1>
        <button
          className=" mb-4 w-52 rounded-full bg-yellow-600 px-4 py-2 text-white transition hover:bg-yellow-400 hover:text-cyan-950"
          onClick={nextGame}
        >
          Nowe rozdanie
        </button>
        <Scoreborad score={score} />
        <Board
          newDeal={newDeal}
          handleCardReverse={(index, image, active) =>
            showCard(index, image, active)
          }
        />
      </div>
    </div>
  );
}

export default App;
