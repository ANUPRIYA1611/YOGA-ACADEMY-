import { Nav, Sidenav } from "rsuite"
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import '../assets/css/nav.css';
const CustomNavSidebar = ()=>{
    return(
      <div className="navside">
        <div style={{ width: 200 }}>
    <Sidenav defaultOpenKeys={['3', '4']}>
      <Sidenav.Body>
        <Nav activeKey="1">
          <Nav.Item eventKey="1" icon={<DashboardIcon />} className="font">
            DASHBOARD
          </Nav.Item>
          <Nav.Item eventKey="2" icon={<GroupIcon />} className="font">
            USER GROUP
          </Nav.Item>
          <Nav.Menu eventKey="3" title="ADVANCED" icon={<MagicIcon />} className="font">
            <Nav.Item eventKey="3-1" className="font">VIDEOS</Nav.Item>
            <Nav.Item eventKey="3-2" className="font">POINTS</Nav.Item>
            <Nav.Item eventKey="3-3" className="font">LOYALTY</Nav.Item>
          </Nav.Menu>
          <Nav.Menu eventKey="4" title="SETTINGS" icon={<GearCircleIcon />} className="font">
            <Nav.Item eventKey="4-1" className="font">APPLICATIONS</Nav.Item>
            <Nav.Item eventKey="4-2" className="font">CHANNELS</Nav.Item>
            <Nav.Item eventKey="4-3" className="font">VERSIONS</Nav.Item>
          </Nav.Menu>
        </Nav>
      </Sidenav.Body>
    </Sidenav>
  </div></div>
    )
}
export default CustomNavSidebar