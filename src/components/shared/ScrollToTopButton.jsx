import { AiOutlineArrowUp } from "react-icons/ai";
const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button className="scroll-to-top-button" onClick={handleScrollToTop}>
      <AiOutlineArrowUp size={24} />
    </button>
  );
};
export default ScrollToTopButton;
