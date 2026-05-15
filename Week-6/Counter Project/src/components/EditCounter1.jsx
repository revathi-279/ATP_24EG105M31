import { useContext } from "react";
import { counterContextObj } from "../contexts/ContextProvider";

function EditCounter1() {
  const { counter, incrementCounter, decrementCounter } = useContext(counterContextObj);

  return (
    <div className="bg-purple-200 rounded-xl p-6 text-center">
      <h1 className="text-2xl mb-4">EditCounter1</h1>
      <h1 className="text-4xl font-bold mb-6">{counter}</h1>
      <div className="flex justify-center gap-4">
        <button onClick={incrementCounter} className="bg-purple-600 text-white rounded-lg px-5 py-2 text-2xl">
          +
        </button>
       <button onClick={decrementCounter} className="bg-purple-600 text-white rounded-lg px-5 py-2 text-2xl"> 
          -
        </button>
      </div>
    </div>
  );
}

export default EditCounter1;