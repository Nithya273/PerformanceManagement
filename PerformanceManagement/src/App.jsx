import './App.css'
import '@mantine/core/styles.css'
import Navbar from "./components/Navbar"
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
