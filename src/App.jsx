import Navbar from './components/Navbar/Navbar';
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  return (
    <>
      <Navbar />
      <ItemListContainer greeting={"Bienvenidos a DecoTodoVuelve"}/>
    </>
  )
}

export default App
