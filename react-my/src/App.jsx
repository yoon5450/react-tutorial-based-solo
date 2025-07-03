import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import ShoppingList from "./ShoopingList";

export default function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton /> // 같은 컴포넌트 명으로 호출
      <MyButton /> // 그러나 count 값은 각각 적용됨.
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0); // 초기값을 0으로 설정

  function handleClick() {
    // 클릭할 때마다 count + 1
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      {" "}
      // onclick 이벤트 부여 Clicked {count} times
    </button>
  );
}
