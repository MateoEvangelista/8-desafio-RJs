import React, { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
  const [counter, setCounter] = useState(initial);

  const handlerCounterUp = () => {
    if (counter < stock) setCounter(counter + 1);
  };

  const handlerCounterDown = () => {
    if (counter > initial) setCounter(counter - 1);
  };

  return (
    <>
      <p className="contador d-flex justify-content-center">{counter}</p>
      <div className="botones d-flex justify-content-evenly">
        <button
          className="boton btn btn-secondary btn-sm"
          type="button"
          onClick={handlerCounterUp}
        >
          +
        </button>
        <button
          className="boton btn btn-secondary btn-sm"
          type="button"
          onClick={handlerCounterDown}
        >
          -
        </button>
      </div>
    </>
  );
}

export default ItemCount;
