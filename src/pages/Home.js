import HeroSection from "../components/HeroSection";
import Item from "../components/Item";
import { useRef } from "react";
import "./Home.css";

export default function Home() {
  const handleClick = () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const ref = useRef(null);
  return (
    <>
      <HeroSection handleClick={handleClick} />
      <Item ref={ref} />
    </>
  );
}
