// DEPENDENCY
import { useState } from 'react';

// COMPONENT
import { Lottery } from './components/Lottery';

// STYLE
import './App.css';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title="mini Lotto" numBalls={4} maxNum={10} />
      <Lottery title="mega Lotto" numBalls={10} maxNum={100} />
    </div>
  );
}

export default App;
