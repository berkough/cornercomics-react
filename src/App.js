import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Nav from './components/Nav';
import Main from './components/Main';
import Collection from './components/Collection';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='collection' element={<Collection />} />
      </Routes>
    </>
  );
}

export default App;
