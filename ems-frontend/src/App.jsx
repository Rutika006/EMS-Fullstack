import './App.css'
import EmployeeComponent from './components/EmployeeComponent'
import Footer from './components/Footer'
import Header from './components/Header'
import ListEmployeeComponents from './components/ListEmployeeComponents'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {
  
  return (
    <>
      <BrowserRouter>
      <Header/>
           <Routes>
             <Route path='/' element={<ListEmployeeComponents/>}></Route>
             <Route path='/employes' element={<ListEmployeeComponents/>}></Route>
             <Route path='/add-employee' element={<EmployeeComponent/>}></Route>
             <Route path='/edit-employee/:id' element={<EmployeeComponent/>}></Route>
           </Routes>
      
      <Footer/> 
      </BrowserRouter>
    </>
  )
}

export default App
