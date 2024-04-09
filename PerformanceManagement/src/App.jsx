import './App.css'
import '@mantine/core/styles.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Profilepage from './pages/Profilepage';
import Navbar from './components/ManagerPages/Navbar';
import Login from './components/Login'
import ManagerDashboard from './components/ManagerPages/ManagerDashboard'
import AddEmployees from './components/ManagerPages/AddEmployees';
import AssignTasks from './components/ManagerPages/AssignTasks';
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
      <Route exact path="/manager" element={<Navbar/>}/>
      <Route exact path="/managerdash" element={<ManagerDashboard/>}/>
      
      <Route exact path="/login" element={<Login/>}/>
      
      <Route exact path="/manageemployees" element={<AddEmployees/>}/>
      <Route exact path="/assigntasks" element={<AssignTasks/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
