import './App.css'
import '@mantine/core/styles.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Profilepage from './pages/Profilepage';

function App() {
  
  return (
    <>
    <Router>
    <Routes>
      <Route exact path="/"
      element={<Home/>}/>
      <Route exact path="/Tasks"
      element={<Tasks/>}/>
      <Route exact path="/Profilepage"
      element={<Profilepage/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
