import CustomNavbar from "../components/CustomNavbar"
import CustomNavSidebar from "../components/CustomNavSidebar"
import Dashboard from "./Dashboard"
const Adminhome=()=>{
    return(
        <>
        <div>
            <CustomNavbar></CustomNavbar>
            <CustomNavSidebar></CustomNavSidebar>
        </div>
        <div>
            <Dashboard></Dashboard>
        </div>
        </>
    )
}
export default Adminhome