import React, { useState } from 'react';

const YourComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('입력된 값:', inputValue === '');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='number'
        name='test'
        id='test'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type='submit'>제출</button>
    </form>
  );
};

export default YourComponent;
