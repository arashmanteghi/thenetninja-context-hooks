import React, { useState, useEffect } from 'react';
import SongList from './components/SongList';

function App() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setValue(1);
    }, 5000);
  }, [])
  return (
    <div className="App">
      <h2>value: {value}</h2>
      {value === 0 && <SongList />}
    </div>
  );
}

export default App;
