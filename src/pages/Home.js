import HeroSection from "../components/HeroSection";
import Item from "../components/Item";
import Footer from "../components/Footer";
import { useRef } from "react";
import "./Home.css";

export default function Home() {
  const handleScrollToItems = () => {
    itemRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const itemRef = useRef(null);
  const footerRef = useRef(null);
  return (
    <>
      <HeroSection
        handleScrollToItems={handleScrollToItems}
        handleScrollToFooter={handleScrollToFooter}
      />
      <Item innerRef={itemRef} handleScrollToItems={handleScrollToItems} />
      <Footer innerRef={footerRef} />
    </>
  );
}
