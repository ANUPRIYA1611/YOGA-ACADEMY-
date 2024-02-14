import { Link } from 'react-router-dom'
import '../assets/css/main.css'
const Main=()=>{
    return(
       <>
       <div>
        <div className="mainadmin">
            <img src="https://t3.ftcdn.net/jpg/00/65/75/68/360_F_65756860_GUZwzOKNMUU3HldFoIA44qss7ZIrCG8I.jpg" style={{width:"10%",height:"5%",marginLeft:"30%",marginTop:"10%"}}></img>
            <br></br>
            <p style={{fontSize:"24px",fontFamily:"inherit",color:"black",marginLeft:"32%"}}><Link to='/adminlogin'>ADMIN</Link></p>
        </div>
        <div className="mainadmin1">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK-cqV-aGe4jcDrt9MXAkp_uGOBFsBbmlLunQuD2xCt7pNXCdhVsL4ZTIqCRvakX81QTg&usqp=CAU"  style={{width:"10%",height:"5%",marginLeft:"60%",marginTop:"-19%"}}></img>
            <br></br>
            <p style={{fontSize:"24px",fontFamily:"inherit",color:"black",marginLeft:"62%",marginTop:"-5%"}}><Link to='/login'>USER</Link></p>
        
        </div>
       </div>
       </>
    )
}
export default Main