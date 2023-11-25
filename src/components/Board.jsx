import { Card } from "./Card";
import { Scoreborad } from "./Scoreboard";
import { useState } from "react";

export function Board({ newDeal }) {
  // const [reverse, setReverse] = useState(false);

  // function changeReverseCard() {
  //   setReverse(true);
  // }

  return (
    <>
      <Scoreborad />
      <div className="m-4 flex flex-wrap gap-4">
        {newDeal.map((animal, key) => (
          <Card
            key={key}
            image={animal}
            id={key}
            // reverse={reverse}
            // setter={setReverse}
          />
        ))}
      </div>
    </>
  );
}
