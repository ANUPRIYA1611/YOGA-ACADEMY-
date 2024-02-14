import { Button, ButtonToolbar, Form } from "rsuite"
import "../assets/css/login.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {signIn} from '../services/auth'
import { jwtDecode } from "jwt-decode"
const Login=()=>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Access the navigation function

  const handleEmailChange = (value) => {
      setEmail(value);
  };

  const handlePasswordChange = (value) => {
      setPassword(value);
  };

  const handleFormSubmit = (e) => {
      e.preventDefault();

      const form = {
          email: email,
          password: password
      }
      signIn(form)
      .then((res) => {
        const decoded = jwtDecode(res.data.token);
        sessionStorage.setItem('token', res.data.token);
        console.log(decoded.sub);
        if(decoded.sub === "anupriya@gmail.com"){
            setEmail("");
            setPassword("");
            navigate('/dashboard');
        }
        else{
            setEmail("");
        setPassword("");
        navigate('/home');
        }
        
    })
          .catch((err) => {
              setEmail("");
              setPassword("");
              console.log(err);
             
          });
  };
  return(
    <div className="loginbody">
      <div></div>
    <div className="logincontainer">
     <Form className="form">
      <p className="formtext">LOGIN</p>
      <br></br>
    
   
    <Form.Group controlId="email">
      <Form.ControlLabel className="formlogin">EMAIL ID</Form.ControlLabel>
      <Form.Control placeholder="Email" name="email" autoComplete="off" onChange={handleEmailChange} value={email} />
      </Form.Group>
    <Form.Group controlId="password">
      <Form.ControlLabel  className="formlogin">PASSWORD</Form.ControlLabel>
      <Form.Control placeholder="Password" name="password" type="password" autoComplete="off" onChange={handlePasswordChange} value={password}/>
    </Form.Group>
    <Form.Group>
      <ButtonToolbar>
        <Button  className="formbutton" onClick={handleFormSubmit}>SUBMIT</Button>
      </ButtonToolbar>
      <br></br>
        <p className="formp">New User without an account? <Link to='/register'>SIGNUP</Link></p>
    </Form.Group>
  </Form>
  </div>
  </div>
  )
}
export default Login