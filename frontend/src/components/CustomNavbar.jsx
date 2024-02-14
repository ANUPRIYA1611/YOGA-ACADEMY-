import { Nav, Navbar } from "rsuite"
import HomeIcon from '@rsuite/icons/legacy/Home';
import { Link } from "react-router-dom";

import "../assets/css/nav.css"
const CustomNavbar=()=>{
    return(
      <div className="nav1" >
    <Navbar style={{backgroundColor:'transparent'}} >
    <Navbar.Brand href="#" className="font">YOGA!!</Navbar.Brand>
    <Nav className="navbar">
      <Nav.Item icon={<HomeIcon />} className="font"><Link to={'/home'}>HOME</Link></Nav.Item>
      
      <Nav.Item  className="font"><Link to='/about'>ABOUT</Link></Nav.Item>
      <Nav.Item  className="font"><Link to='/enroll'>ENROLL</Link></Nav.Item>
    </Nav>
    <Nav pullRight>
    {/* <GearIcon spin style={{ fontSize: '1.5em' }} /> */}
     
    <Nav.Menu eventKey="1"  >
            <Nav.Item eventKey="1-1" className="font1" ><Link to='/login'>LOGIN</Link></Nav.Item>
            <Nav.Item eventKey="1-2" className="font1"><Link to='/signup'>SIGN UP</Link></Nav.Item>
            
          </Nav.Menu>
    </Nav>
  </Navbar>
  </div>
    )
}
export default CustomNavbar