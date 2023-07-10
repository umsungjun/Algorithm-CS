import { useState } from "react";
import { styled } from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale"; //한국어 설정

function App() {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [dateHolder, setDateHolder] = useState<string>("YYYY.MM.DD");
  function formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
  }
  return (
    <Box>
      <Title>Date</Title>
      <Label htmlFor="startDate">
        {dateHolder}
        <i className="bi bi-calendar-check"></i>
      </Label>
      <StyledDatePicker // DatePicker의 styled-component명
        id="startDate"
        locale={ko} //한글
        dateFormat="yyyy.MM.dd"
        selected={startDate}
        onChange={(date: Date) => {
          setStartDate(date);
          console.log(date);
          setDateHolder(formatDate(date)); // date fomating을 통해서 string으로 변환할 수 있음
        }}
      />
    </Box>
  );
}

export default App;

const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.label`
  font-size: 1.2rem;
  color: #5c5c62;
`;

const Label = styled.label`
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  border: 2px solid #c9c9cf;
  width: 10rem;
  color: #c9c9cf;
  border-radius: 0.3rem;
  padding: 1rem 0;
`;
const StyledDatePicker = styled(DatePicker)`
  visibility: hidden;
`;
