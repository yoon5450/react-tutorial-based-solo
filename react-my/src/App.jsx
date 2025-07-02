// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function MyButton() {
  return <button>I'm a button</button>;
}

function App() {
  const products = [
    // 여러 아이템 항목
    { title: "Cabbage", id: 1 },
    { title: "Garlic", id: 2 },
    { title: "Apple", id: 3 },
  ];

  // 새로운 변수에 데이터를 삽입 ( 불변성 )
  const listItems = products.map((product) => (
    <li key={product.id}>{product.title}</li>
  ));

  return <ul>{listItems}</ul>;
}

export default App;
