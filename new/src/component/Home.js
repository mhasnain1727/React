import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
// import {Route,BrowserRouter} from 'react-router-dom'

import { Button, Form, FormGroup, Label, Input, FormText,Navbar,NavbarBrand ,Row,Col, CardBody,Card} from 'reactstrap';

class Home extends Component {
    constructor(props) {
        super(props);
      
        // Set initial state (ONLY ALLOWED IN CONSTRUCTOR)
        this.state = {
            color: "blue"
        };
        this.inccount = this.inccount.bind(this);
    }

    inccount(e){
        let colors=["red","blue","yellow","green"]

        this.setState({
            color:colors[parseInt(Math.random()*4)]
        })
    }
  render(){
return(
<div >
<Row>  
        <Col sm="12" md={{ size: 6, offset: 3 }}>
        <Card style={{margin:"15%",border: "3px solid grey", borderRadius:"20px" }}>
        <CardBody><Form style={{width:"90%",}}>
        <h1 style={{textAlign:"center",color:this.state.color}}>Login Page </h1><br></br>
      
       <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Login ID" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Password" />
      </FormGroup>
      <Button color="primary" size="small" onClick={this.inccount} style={{border: "3px solid black"}}>Submit</Button>
  

 </Form></CardBody>
</Card>
 </Col>

      </Row>
</div>
)
  }

}
export default Home;
