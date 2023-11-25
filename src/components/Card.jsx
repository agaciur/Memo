import { useState } from "react";

export function Card(props) {
  const [cardReverse, setCardReverse] = useState(false);
  // const [firstCard, setFirstCard] = useState("");
  // const [secondCard, setSecondCard] = useState(null)

  // console.log(reverse);
  // function checkCards(i) {
  //   if (firstCard === "") {
  //     setFirstCard(i);
  //   }
  //   console.log(firstCard);
  // }

  function handleCardReverse(e) {
    setCardReverse(true);
    // let info = e.target.id; // checkCards(info);
    // console.log(e.target);
    // setFirstCard(e.target);
    console.log(props.image);
  }

  return (
    <>
      {cardReverse ? (
        <div className="h-40 w-32 rounded-md bg-yellow-100">
          <img src={props.image} alt={props.image} />
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
