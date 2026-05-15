import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import UsersList from './components/UsersList.jsx'
//function component
function App(){
  //state
  
  //return react element
  return (
  <div>
    <Navbar/>
    <div className = "p-16">
       <UsersList/>
    </div>

    <Footer/>
  </div>
)

}

export default App;