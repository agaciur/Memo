import { Card } from "./Card";

export function Board({ newDeal, handleCardReverse }) {
  return (
    <>
      <div className="m-4 flex flex-wrap gap-4">
        {newDeal.map(({ image, active }, index) => (
          <Card
            key={index}
            image={image}
            active={active}
            handleCardReverse={() => handleCardReverse(index, image, active)}
          />
        ))}
      </div>
    </>
  );
}
