import HeroSection from "../components/HeroSection";
import Item from "../components/Item";
import { useRef } from "react";
import "./Home.css";

export default function Home() {
  const handleScroll = () => {
    itemRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const itemRef = useRef(null);
  return (
    <>
      <HeroSection handleScroll={handleScroll} />
      <Item innerRef={itemRef} />
    </>
  );
}
