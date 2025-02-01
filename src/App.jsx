// src/App.jsx
import './App.css'
import './index.css'
import Bookshelf from './components/Bookshelf/Bookshelf.jsx'

const App = () => {
  return (
    <>
    <div id="root">
      <h1>My Bookshelf</h1>
      <Bookshelf />
    </div>
    </>
  );
};

export default App;