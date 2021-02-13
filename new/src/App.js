
import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Route,BrowserRouter} from 'react-router-dom'
import Home from './component/Home'
import {Navbar} from 'reactstrap';

class App extends Component {
  render(){
return(
<div >
<Navbar color="dark" light expand="md">
<h3 style={{textAlign:"center",width:"100%", color:"white"}}>Welcome To Login Page</h3>
</Navbar>

<Home/>
</div>

  )
  }

}
export default App;
