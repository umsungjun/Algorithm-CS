import { useEffect, useRef } from "react";
import { styled } from "styled-components";

export default function ScrollIntoViewTest() {
  const chatBoxRef = useRef<HTMLDivElement>(null);
  const handleKeyPress = () => {
    console.log("useEffect triggered");
    chatBoxRef.current?.scrollIntoView(false);
  };

  window.addEventListener("keydown", handleKeyPress);
  return <TestSection ref={chatBoxRef}>scrollIntoViewTest</TestSection>;
}

const TestSection = styled.div`
  width: 100%;
  height: 200vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
