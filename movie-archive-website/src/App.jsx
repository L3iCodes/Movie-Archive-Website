import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './app.css'
import HomePage from './Pages/HomePage'
import MoviePage from './Pages/MoviePage'
import Navbar from './Components/Navbar'
import BrowsePage from './Pages/BrowsePage'

function App() {
  
  return (
    <>
      <Router>
        <Navbar /> {/* Visible on all pages */}
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/browse' element={<BrowsePage/>} />
          <Route path='/movie/:id' element={<MoviePage />} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
