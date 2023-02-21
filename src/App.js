import './App.css';
import { Route, Routes } from 'react-router';
import Nav from './components/Nav';
import Main from './components/Main';
import Collection from './components/Collection';
import Options from './components/Options';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={ <Main /> } />
        <Route path='/collection' element={ <Collection /> } />
        <Route path='/options' element={ <Options /> } />
      </Routes>
    </>
  );
}

export default App;
