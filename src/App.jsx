import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import New from './New';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/new" exact element={<New />} />
      </Routes>
    </>
  );
}

export default App;
