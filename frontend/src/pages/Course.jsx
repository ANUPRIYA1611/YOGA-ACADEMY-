import { Button, ButtonToolbar, Form } from "rsuite"
import "../assets/css/course.css"
import { Link } from "react-router-dom"
const Course=()=>{
  
  return(
       <div>
    <div className="logincontainer">
     <Form className="form1">
         <h2 className="courseh2">START THE COURSES!!</h2>
    
    
    <Form.Group controlId="email">
      <Form.ControlLabel className="formlogin">COURSE NAME</Form.ControlLabel>
      <Form.Control name="email" type="email" />
    </Form.Group>
    <Form.Group controlId="password">
      <Form.ControlLabel  className="formlogin">INSITITUTION</Form.ControlLabel>
      <Form.Control name="password" type="password" autoComplete="off" />
    </Form.Group>
    <Form.Group controlId="password">
      <Form.ControlLabel  className="formlogin">DURATION-TIMING</Form.ControlLabel>
      <Form.Control name="password" type="password" autoComplete="off" />
    </Form.Group>
    <Form.Group>
      <ButtonToolbar>
        <Button className="formbutton"><Link to='/payment'>PAY NOW</Link></Button>
      </ButtonToolbar>
    </Form.Group>

  </Form>
  </div>
  </div>
  )
}
export default Course