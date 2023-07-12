import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { styled } from "styled-components";

export default function DatePickerTest() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DateParent>
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
      />
    </DateParent>
  );
}

const DateParent = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .react-datepicker-popper {
    transform: translate(345px, 490px) !important;
  }

  .react-datepicker__triangle {
    display: none;
  }
`;
