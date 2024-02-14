// import CustomNavSidebar from "../components/CustomNavSidebar"
import CustomNavbar from "../components/CustomNavbar"
import { Link } from "react-router-dom"
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../assets/css/home.css'
import { Carousel } from "rsuite"
const Home =()=>{
    return(
        <div className="container">
            <header>

            <CustomNavbar></CustomNavbar>
            
            </header>
            <main>
                <div>
                
   <Carousel autoplay className="custom-slider">
    <img src="https://bod-blog-assets.prod.cd.beachbodyondemand.com/bod-blog/wp-content/uploads/2018/06/15.jpg" height="500" />
    <img src="https://cdn.yogajournal.com/wp-content/uploads/2016/10/gratitude-quote-1-yogi-bhajan.jpg?width=730" height="500" />
    <img src="https://www.fitsri.com/wp-content/uploads/2021/02/Exercises-are-like-prose-1024x683.jpg" height="500" />
    {/* <img src="https://oqkrwv7qnepe-u4735.pressidiumcdn.com/wp-content/uploads/2023/04/yoga_gratitude_quotes_fitter_habits_2-1.jpg" height="500" /> */}
  </Carousel>
                <div className="cardhome">
                  <br></br> <br></br> <br></br>
                <h2 className="homeh2">EXPLORE COURSES</h2>
        <section className="homecards">
          <div className="s">
           
          </div>
          <div className="spcard">
            <img src="https://i.pinimg.com/originals/64/41/61/644161b5ce15397473f2c4a49620ee8f.gif" className="homeimg"></img>
            <h2 className="homeh2">Hatha Yoga</h2>
            <br></br>
            <p className="homep">Hatha school of Yoga that stresses mastery of the body as a way of attaining a state of spiritual perfection in which the mind from external objects.</p>
            {/* <br></br> */}
            <h3 className="homebutton"><Link to='/course'>ENROLL NOW!!</Link></h3>
          </div>
          <div className="spcard">
            <img src="https://i.pinimg.com/originals/1c/cf/db/1ccfdbb030155aae5a6eec0c514707f7.gif" className="homeimg"></img>
            <h2 className="homeh2">Ashtanga Yoga</h2>
            <br></br>
            <p className="homep">Ashtanga is a very dynamic and athletic form of hatha yoga, made up of six series or levels, with a fixed order of postures.</p>
           
            <h3 className="homebutton"><Link to='/course'>ENROLL NOW!!</Link></h3>
          </div>
          <div className="spcard">
            <img src="https://i.pinimg.com/originals/cc/b2/9a/ccb29aadc3680b839bf05da2af2fef75.gif" className="homeimg"></img>
            <h2 className="homeh2">Vinyasa Yoga</h2>
            <br></br>
            <p className="homep">Vinyasa yoga is a creative form of yoga where poses are linked together with the breath in a flowing sequence. The beauty of Vinyasa yoga is the variety.</p>
            {/* <br></br> */}
            <h3 className="homebutton"><Link to='/course'>ENROLL NOW!!</Link></h3>
          </div>
          
        </section>
      </div>
                </div>

        <h2 className="homeh2">OUR INSTITUTION</h2>
        <br></br><br></br>
<div>
  <div className="cardins">
    <div className="subins">
         <img src="https://afiaghana.com/gh_content/uploads/2020/09/4934.jpg" className="imgins"></img>
    </div>
    <div className="pins">
      <h2>JOIN OUR INSTITUTION!!</h2>
      <br></br>
         <p>educational institution that offers courses in yoga, covering various aspects such as philosophy, physical postures, breath control, and meditation. Instructors, often experienced and certified, guide students through theoretical and practical learning. Courses may focus on specific yoga styles or offer a more comprehensive approach. Yoga academies can operate in physical locations or provide online courses, aiming to enhance personal practice, train instructors, or promote holistic well-being. Accreditation and certifications are common to ensure the credibility of the education provided.</p>
         <br></br>
         <br></br>
         <button>JOIN US</button>
         <button>PODCAST</button>
         <br></br><br></br>
    </div>
  </div>
</div>
  <main>
   <br></br><br></br><br></br>
  <h2 className="homeh2">SO FAR</h2>
        <section className="card__wrapper" >
          <div className="card" >
          
    <div style={{width:"60px",height:"50px",overflow:"hidden",marginLeft:"-100px"}}/>
            <h3 style={{marginLeft:"50px"}}>10,000</h3>
            <h5>students enrolled</h5>
          </div>
          <div className="card">
         
            <h3 style={{marginLeft:"50px"}}>3000</h3>
            <h5>Institutions</h5>
          </div>
          <div className="card">
          
            <h3 style={{marginLeft:"50px"}}>30,000</h3>
            <h5>Courses</h5>
          </div>
          <div className="card">
          
            <h3 style={{marginLeft:"50px"}}>30,000</h3>
            <h5>Courses</h5>
          </div>
          <div className="card">
          

            <h3 style={{marginLeft:"50px"}}>8000</h3>
            <h5>Enrolled Courses</h5>
          </div>
        </section>
      </main>
      <>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: yoga@academy.com</p>
          <p>Phone: +123 456 7890</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Connect with us on social media:</p>
          <div className="social-icons">
          <div>
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>&copy; 2024 Yoga@Academy. All rights reserved.</p>
      </div>
    </footer>
</>
               
            </main>
        </div>
    )
}
export default Home