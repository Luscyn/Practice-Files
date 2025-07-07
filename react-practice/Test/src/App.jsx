
import './App.css'
import Header from './components/Header'
import MovieCard from './components/MovieCard'



function App() {

  const movieNumber = 0;

  return (
    <>
      <Header title="header"/>

      {movieNumber === 0 ? (<MovieCard movie={{}} />) 
      : (<MovieCard movie={{title: "The Witch", release_date: "2020"}} />)}

      
      

    </>
  )
}

export default App
