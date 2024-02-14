import { Button, ButtonToolbar, Form,  SelectPicker, Stack } from "rsuite"
import "../assets/css/login.css"
import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react';
import { signUp } from "../services/auth";



const data = ['Male','Female'].map(
    item => ({ label: item, value: item })
  );
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [healthinformation, setHealthinformation] = useState("");

  const navigate = useNavigate(); // Access the navigation function

  const handleEmailChange = (value) => {
      setEmail(value);
  };
  const handleNameChange = (value) => {
    setName(value);
};

  const handlePasswordChange = (value) => {
    setPassword(value);
};

const handleGenderChange = (value) => {
  setGender(value);
};
const handleHealthChange = (value) => {
  setHealthinformation(value);
};

  const handleFormSubmit = (e) => {
      e.preventDefault();

      const form = {
          name: name ,
          email: email,
          password: password,
          gender : gender,
          healthinformation : healthinformation


      }
      signUp(form)
          .then(() => {
              
              // sessionStorage.setItem('token', res.data.token);
              setName("");
              setEmail("");
              setPassword("");
              setGender("");
              setHealthinformation("");
              navigate('/login');
          })
          .catch((err) => {
              setEmail("");
              setPassword("");
              setPassword("");
              setGender("");
              setHealthinformation("");
              console.log(err);
             
          });
  };
  return(
  <>
  <div className='loginbody'>

 </div>
 <div className='logincontainer2'>
  <Form className="form1">
    <h1 style={{marginLeft:"-400px"}}>Register</h1>
    <br/>
    <Form.Group controlId="name">
      <Form.ControlLabel className="formlogin">Username</Form.ControlLabel>
      <Form.Control placeholder="UserName" name="name" autoComplete="off" onChange={handleNameChange} value={name} />
      <Form.HelpText>Username is required</Form.HelpText>
    </Form.Group>
    <Form.Group controlId="email">
      <Form.ControlLabel className="formlogin">Email</Form.ControlLabel>
      <Form.Control placeholder="Email" name="email" autoComplete="off" onChange={handleEmailChange} value={email}  />
      <Form.HelpText tooltip>Email is required</Form.HelpText>
    </Form.Group>
    <Form.Group controlId="password">
      <Form.ControlLabel className="formlogin">Password</Form.ControlLabel>
      <Form.Control placeholder="Password" name="password" type="password" autoComplete="off" onChange={handlePasswordChange} value={password} />
    </Form.Group>
    <Form.Group controlId="password">
    <Form.ControlLabel className="formlogin">Gender</Form.ControlLabel>
   
    <Stack spacing={10} direction="column" alignItems="flex-start">
  
    <SelectPicker
      data={data}
      searchable={false}
      style={{ width: 224 }}
      name="gender"  autoComplete="off" onChange={handleGenderChange} value={gender}
      placeholder="Select your gender"
    />
   
  </Stack>
  </Form.Group>
  <Form.Group controlId="textarea">
      <Form.ControlLabel className="formlogin">Health Information</Form.ControlLabel>
      <Form.Control rows={5} name="healthinformation"  onChange={handleHealthChange} value={healthinformation} />
    </Form.Group>
    <Form.Group>
      <ButtonToolbar>
        <Link to="/login"><Button appearance="primary"   onClick={handleFormSubmit}>Submit</Button></Link>
        <Button appearance="default">Cancel</Button>
      </ButtonToolbar>
    </Form.Group>
  </Form>
  </div>
  </>
);
};
export default Signup;