import { Card } from "./Card";
import { Scoreborad } from "./Scoreboard";
import { useState } from "react";

export function Board({ newDeal, hiddenCards, setHiddenCards }) {
  const [firstCard, setFirstCard] = useState("");
  const [cardReverseSetters, setCardReverseSetters] = useState([]);
  const [score, setScore] = useState(0);
  function compareCards(image, setCardReverse) {
    setCardReverseSetters((prevCardReverseSetters) => [
      ...prevCardReverseSetters,
      setCardReverse,
    ]);

    if (firstCard === "") {
      setFirstCard(image);
      return;
    }
    console.log(image);
    if (firstCard === image) {
      setScore(score + 1);
      setCardReverseSetters([]);
      setHiddenCards((prevCards) => prevCards - 2);
      console.log(hiddenCards);

      if (hiddenCards === 0) {
        console.log(hiddenCards);
        // console.log("Koniec gry");
      }
    } else {
      console.log(cardReverseSetters);
      setTimeout(() => {
        cardReverseSetters.map((card) => card(false));
        setCardReverse(false);
        setCardReverseSetters([]);
      }, 500);
      // odwroc karty po sec
      //przekazanie ruchu nast gracz
    }

    setFirstCard("");
  }

  return (
    <>
      <Scoreborad score={score} />
      <div className="m-4 flex flex-wrap gap-4">
        {newDeal.map((animal, key) => (
          <Card key={key} image={animal} id={key} compareCards={compareCards} />
        ))}
      </div>
    </>
  );
}
