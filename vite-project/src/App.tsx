import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const YourComponent = () => {
  return (
    <>
      <DatePicker
        selected={null}
        showTimeSelect
        onChange={(date) => console.log(date)}
      />
    </>
  );
};

export default YourComponent;
