import Header from './components/Header/Header';
import './App.css';
import { Fragment } from 'react';
import Introduction from './components/Introduction/Introduction';
import Book from './components/Book/Book';

function App() {
  return (
    <Fragment>
      <Header />
      <Introduction />
      <Book />
    </Fragment>
  );
}

export default App;
