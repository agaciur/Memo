export function Card({ image, active, handleCardReverse }) {
  return (
    <>
      {active ? (
        <div className="flex h-40 w-32 rounded-md bg-yellow-100">
          <img src={image} alt={image} />
        </div>
      ) : (
        <div
          className="h-40 w-32 cursor-pointer  justify-center  rounded-md bg-yellow-500"
          onClick={handleCardReverse}
        ></div>
      )}
    </>
  );
}
