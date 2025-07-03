import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import ShoppingList from "./ShoopingList";

export default function MyApp() {
  const [count, setCount] = useState(0); // 초기값을 0으로 설정

  function handleClick() {
    // 클릭할 때마다 count + 1
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return <button onClick={onClick}> Clicked {count} times</button>;
}
