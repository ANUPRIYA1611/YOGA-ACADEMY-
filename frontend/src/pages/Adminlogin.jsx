import { Button, ButtonToolbar, Form } from "rsuite"
import "../assets/css/login.css"
import { Link } from "react-router-dom"
const Adminlogin=()=>{
  return(
    <div className="loginbody">
      <div></div>
    <div className="logincontainer">
     <Form className="form">
      <p className="formtext">ADMIN LOGIN</p>
      <br></br>
    <Form.Group controlId="name">
      <Form.ControlLabel className="formlogin">USER NAME</Form.ControlLabel>
      <Form.Control name="name" />
    </Form.Group>
    <Form.Group controlId="email">
      <Form.ControlLabel className="formlogin">EMAIL ID</Form.ControlLabel>
      <Form.Control name="email" type="email" />
      </Form.Group>
    <Form.Group controlId="password">
      <Form.ControlLabel  className="formlogin">PASSWORD</Form.ControlLabel>
      <Form.Control name="password" type="password" autoComplete="off" />
    </Form.Group>
    <Form.Group>
      <ButtonToolbar>
        <Button  className="formbutton"><Link to='/dashboard'>SUBMIT</Link></Button>
      </ButtonToolbar>
      <br></br>
       
    </Form.Group>
  </Form>
  </div>
  </div>
  )
}
export default Adminlogin