import React, { useState } from 'react';

const App = () => {
  const [input, setInput] = useState('');
  const [storedItem, setStoredItem] = useState([]);

  const submitForm = () => {
    setStoredItem([...storedItem, input]);
    setInput('');
  };
  return (
    <div style={{ textAlign: 'center' }}>
      <form>
        <input type="text" onChange={(e) => setInput(e.target.value)} value={input} placeholder="Enter Here" />

        <div style={{ marginTop: '1rem' }}>
          <button type="button" onClick={submitForm}>
            Submit
          </button>
        </div>

        <div>
          {storedItem.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </form>
    </div>
  );
};

export default App;
