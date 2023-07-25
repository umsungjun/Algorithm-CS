import React from "react";
import { styled } from "styled-components";

export default function Center() {
  return <TestDiv>Center</TestDiv>;
}

const TestDiv = styled.div`
  width: 3rem;
  height: 3rem;
  background: black;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
