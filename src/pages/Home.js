import HeroSection from "../components/HeroSection";
import Item from "../components/Item";
import "./Home.css";

export default function Home({
  handleScrollToItems,
  handleScrollToFooter,
  itemRef,
}) {
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
