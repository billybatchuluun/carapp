import { Cars } from "@/components/Cars";
import { useState } from "react";
import { Cars } from "@/components/Cars";

export default function Home() {
  function car(props) {
    return <h2>I am a {props.brand}!</h2>;
  }
  function Garage() {
    <>
      <h2>who lives in my garage?</h2>
      <car brand="Ford" />
    </>;
  }
  const carInfo = { brand: "Toyota", color: "red", name: "Corola", door: 4 };
  // { brand: "Nissan", color: "green", name: "Maxima", door: 4 },
  // { brand: "Ford", color: "blue", name: "F-150", door: 2 };

  return <></>;
}
