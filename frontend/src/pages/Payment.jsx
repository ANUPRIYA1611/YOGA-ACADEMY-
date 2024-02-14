import { useState } from 'react';
import '../assets/css/payment.css';
import { useNavigate } from 'react-router-dom';
import { paymentList } from '../services/user';
import { Form } from 'rsuite';
const Payment=()=>{
  
    const [name, setName] = useState("");
    const [coursename, setCourseName] = useState("");
    const [amount, setAmount] = useState("");
  
    const navigate = useNavigate(); // Access the navigation function
  
  
    const handleNameChange = (value) => {
      setName(value);
  };
  
   
  const handleCourseNameChange = (value) => {
      setCourseName(value);
  };
  
  
  const handleAmountChange = (value) => {
    setAmount(value);
  };
  
    const handleFormSubmit = (e) => {
        e.preventDefault();
  
        const form = {
            name: name ,
            amount : amount,
            course_name:coursename
  
        }
        
        paymentList(form)
            .then(() => {
                
                setName("");
                setCourseName("");
                setAmount("");
                navigate('/home');
            })
            .catch((err) => {
              setName("");
              setCourseName("");
              setAmount("");
             
                console.log(err);
               
            });
    };
    return(
        <>
<div className="card4 mt-50 mb-50">
  <div className="card4-title mx-auto">PAYMENT</div>
  <div className="nav">
    
  </div>
 
    <span id="card4-header">Saved cards:</span>
    <div className="row row-1">
      <div className="col-2">
        <img
          className="img-fluid"
          src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
        />
      </div>
      <div className="col-7">
        <input type="text" placeholder="**** **** **** 3193" />
      </div>
      <div className="col-3 d-flex justify-content-center">
        <a href="#">Remove card</a>
      </div>
    </div>
    <div className="row row-1">
      <div className="col-2">
        <img
          className="img-fluid"
          src="https://img.icons8.com/color/48/000000/visa.png"
        />
      </div>
      <div className="col-7">
        <input type="text" placeholder="**** **** **** 4296" />
      </div>
      <div className="col-3 d-flex justify-content-center">
        <a href="#">Remove card</a>
      </div>
    </div>
    <span id="card4-header">Add new card:</span>
    <Form>
    <div className="row-1">
      <div className="row row-2">
      <Form.Group controlId="user_id">
      <Form.ControlLabel>Card Holder Name</Form.ControlLabel>
        
        <Form.Control placeholder="HOLDER NAME" name="name" autoComplete="off" onChange={handleNameChange} value={name} />
        </Form.Group>
      </div>
    </div>
    <div className="row-1">
      <div className="row row-2">
      <Form.Group controlId="name">
      <Form.ControlLabel>Course Name</Form.ControlLabel>
        
        <Form.Control placeholder="Course Name" name="coursename" autoComplete="off" onChange={handleCourseNameChange} value={coursename} />
        </Form.Group>
      </div>
      
    </div>
    <div className="row three">
      <div className="col-7">
        <div className="row-1">
          <div className="row row-2">
          <Form.Group controlId="number">
      <Form.ControlLabel>Card Number</Form.ControlLabel>
           
            <Form.Control placeholder="CARD NUMBER" name="number" autoComplete="off" />
            </Form.Group>
          </div>
         
        </div>
      </div>
      <div className="row-1">
      <div className="row row-2">
      <Form.Group controlId="expiry">
      <Form.ControlLabel>Expiry Date</Form.ControlLabel>
        
        <Form.Control placeholder="EXPIRY DATE" name="expiry" autoComplete="off"  />
        </Form.Group>
      </div>
     
    </div>
    <div className="row-1">
      <div className="row row-2">
      <Form.Group controlId="cvv">
      <Form.ControlLabel>CVV</Form.ControlLabel>
       
        <Form.Control placeholder="CVV" name="cvv" autoComplete="off" />
        </Form.Group>
      </div> 
    </div>
    <div className="row row-2">
    <Form.Group controlId="amount">
      <Form.ControlLabel>AMOUNT</Form.ControlLabel>
       
        <Form.Control placeholder="AMOUNT" name="amount" autoComplete="off" onChange={handleAmountChange} value={amount} />
        </Form.Group>
      </div>
      
    </div>
    <button className="btn d-flex mx-auto"    onClick={handleFormSubmit}>
      <b>PAY NOW!!</b>
    </button>
  </Form>
 
</div>


        </>
    )
}
export default Payment