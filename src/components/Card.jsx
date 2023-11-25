import { useState } from "react";

export function Card({ image, compareCards }) {
  const [cardReverse, setCardReverse] = useState(false);

  function handleCardReverse(e) {
    setCardReverse(true);
    compareCards(image, setCardReverse);
  }

  return (
    <>
      {cardReverse ? (
        <div className="h-40 w-32 rounded-md bg-yellow-100">
          <img src={image} alt={image} />
        </div>
      ) : (
        <div
          className="h-40 w-32 cursor-pointer  rounded-md  bg-yellow-500"
          onClick={handleCardReverse}
        ></div>
      )}
    </>
  );
}
