import { useState } from 'react';
import Navbar from './components/Navbar';
import NewsBoard from './components/NewsBoard';

const App = () => {
  const [category, setCategory] = useState('general');
  return (
    <div>
      <Navbar setCategory={setCategory} />
      <div style={{ maxWidth: '1430px', margin: '0 auto'}}>
        <NewsBoard category={category} />
      </div>
    </div>
  );
};

export default App;
