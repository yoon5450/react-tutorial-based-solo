import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import ShoppingList from "./ShoopingList";

export default function MyApp() {
  // 상위 요소로 useState를 옮김
  const [count, setCount] = useState(0); // 초기값을 0으로 설정
  
  // 이벤트 핸들러 함수도 상위로 이동
  function handleClick() {
    // 클릭할 때마다 count + 1
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update separately</h1>
      {/* 하위 요소로 parameter를 전달함 */}
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

// count, onclick 객체로 뿌려진 데이터를 이용해 값이 변경됨
function MyButton({ count, onClick }) {
  return <button onClick={onClick}> Clicked {count} times</button>;
}
