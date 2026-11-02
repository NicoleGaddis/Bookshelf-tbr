import { useState } from 'react';
import Header from './components/layout/Header';
import Books from './components/books/Books';
import Shelf from './components/shelf/Shelf';
import EditBook from './components/books/EditBook';
import './App.css';


function App() {
  const [shelfIsShown, setShelfIsShown] = useState(false);

  const showShelfHandler = () => {
    setShelfIsShown(true);
  };
  const hideShelfHandler = () => {
    setShelfIsShown(false);
  };

  const [bookIsShown, setBookIsShown] = useState(false);

  const showBookHandler = () => {
    setBookIsShown(true);
  };
  const hideBookHandler = () => {
    setBookIsShown(false);
  };

  //Gemini ai was used to fix fetch not updating when book is added
  const [refreshKey, setRefreshKey] = useState(0);

  const triggerRefresh = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div>
      {shelfIsShown && <Shelf onCloseShelf={hideShelfHandler} onRefresh={triggerRefresh} />}
      <Header onShowShelf={showShelfHandler}  />
      <main>
        {bookIsShown && <EditBook onCloseBook={hideBookHandler} />}
        <Books onShowBook={showBookHandler} refreshTrigger={refreshKey} />
      </main>
    </div>
  );
}
export default App;