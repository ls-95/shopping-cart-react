import HeroSection from "../components/sections/HeroSection";
import Item from "../components/Item";
import { useRef } from "react";
import "./Home.css";

export default function Home({ handleScrollToFooter }) {
  const itemRef = useRef(null);
  const handleScrollToItems = () => {
    itemRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <HeroSection
        handleScrollToItems={handleScrollToItems}
        handleScrollToFooter={handleScrollToFooter}
      />
      <Item innerRef={itemRef} handleScrollToItems={handleScrollToItems} />
    </>
  );
}
