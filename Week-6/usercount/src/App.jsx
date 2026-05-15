import { useState } from "react";
import Users from "./components/Users";
import Usercount from "./components/UserCount";

function App() {
  console.log("App component");

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="text-center p-10">
      <h1 className="text-4xl text-purple-900 mb-5">User App</h1>

      <Usercount count={count} />

      <Users increment={increment} />
    </div>
  );
}

export default App;