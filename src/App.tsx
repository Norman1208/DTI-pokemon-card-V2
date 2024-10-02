import './App.css'
import Header from './components/Header'
import Manipulator from './components/Manipulator'
import MobileWrapper from './components/MobileWrapper'
// import usePokemonList from './hooks/usePokemonList'
// import usePokemonDetails from './hooks/usePokemonDetail'

function App() {
  // Use the custom hook to fetch pokemon list
  // Example below
  // const list = usePokemonList();
  // const detail = usePokemonDetails("bulbasaur");

  return (
    <div className='bg-[#3D4466]'>
      {/* Start the development here */}
      <MobileWrapper>
        <Header />
        <Manipulator />
      </MobileWrapper>
      
      {/* Use react-router-dom Expected routes:  */}
      {/* 1. Home path: "/" */}
      {/* 1. Details path: "/details:" */}
    </div>
  )
}

export default App
