import HeroSection from "../components/HeroSection";
import Item from "../components/Item";
import { useRef } from "react";
import "./Home.css";

export default function Home() {
  const handleScroll = () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const ref = useRef(null);
  return (
    <>
      <HeroSection handleScroll={handleScroll} />
      <Item ref={ref} />
    </>
  );
}
