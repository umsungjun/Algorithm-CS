import { styled } from "styled-components";

function App() {
  return (
    <GridBody>
      <div>·</div>
      <div></div>
      <div></div>
      <div></div>
      <div>·</div>
      <div></div>
      <div></div>
      <div></div>
      <div>·</div>
    </GridBody>
  );
}

export default App;

const GridBody = styled.div`
  width: 50%;
  height: 70vh;
  border: 1px solid black;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);

  > div {
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10rem;
  }
`;
