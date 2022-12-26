import { useRef } from 'react';
import '../pages/Products.css'
import '../pages/Contact.css'
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import HS1 from '../HS1';
import Footer from '../Footer';
import { firestore,firebase} from './firebase';
import { addDoc,collection } from "@firebase/firestore";
import { async } from '@firebase/util';
export default function Contact() {
  window.scrollTo(0, 0);
  // Listen for form submit

var ref = collection(firestore,"contact-form");
const nameRef = useRef();
const emailRef = useRef();
const phoneRef = useRef();
const messageRef = useRef();
const compRef = useRef();

const handleSave = async(e) => {
  e.preventDefault();
  let data = {
    name:nameRef.current.value,
    company:compRef.current.value,
    email:emailRef.current.value,
    phone:phoneRef.current.value,
    message:messageRef.current.value,
  }

  try{
    addDoc(ref,data);
    nameRef.current.value= "";
    compRef.current.value= "";
    emailRef.current.value= "";
    phoneRef.current.value= "";
    messageRef.current.value= "";



  }catch(e){
    console.log(e);
  }
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();



  
}

// Submit form
// function submitForm(e){
//   e.preventDefault();

//   //Get value
 
// let data ={
//   name:names,
//   company:companys,


// }
//   messagesRef.addDoc(messagesRef,data);

//   }
  // // Save message
  // saveMessage(name, company, email, phone, message);

  // // Show alert
  // document.querySelector('.alert').style.display = 'block';

  // // Hide alert after 3 seconds
  // setTimeout(function(){
  //   document.querySelector('.alert').style.display = 'none';
  // },3000);

  // // Clear form
  // document.getElementById('contactForm').reset();


// Function to get form value
// function getInputVal(id){
//   return document.getElementById(id).value;
// }

// // Save message to firebase
// function saveMessage(name, company, email, phone, message){
//   var newMessageRef = messagesRef.push();
//   newMessageRef.set({
//     name: name,
//     company: company,
//     email: email,
//     phone: phone,
//     message: message
//   });
// }


  return (<>

{/* <div class="container-fluid contact-form">
        <div class="contact-form-container">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdvnxBXhOb3d7SrDzuNFsvD3K0tP6iuSPHa9f6y9E2-NubqqQ/viewform?embedded=true" width="100%" height="900" frameborder="1" marginheight="10" marginwidth="10">Loading…</iframe>
  </div>
  </div> */}

<div class="container1">
  <h1 class="title">Contact Us!</h1>
  <div class="wrapper animated bounceInLeft">
    <div class="contact">
  
      <div class="alert">Your message has been sent!</div>
      <form id="contactForm" onSubmit={handleSave}>
        <p class="name-field">
          <label>Name <span>*</span></label>
          <input type="text" name="name" id="name" ref = {nameRef} required/>
        </p>
        <p class="company-field">
          <label>Organization<span>*</span></label>
          <input type="text" name="company" id="company" ref = {compRef} required/>
        </p>
        <p class="email-field">
          <label>Email <span>*</span></label>
          <input type="email" name="email" id="email" ref = {emailRef} required/>
        </p>
        <p class="phone-field">
          <label>Phone<span>*</span></label>
          <input type="text" name="phone" id="phone" ref = {phoneRef} required/>
        </p>
        <p class="message-field full">
          <label>Message/Question<span>*</span></label>
          <textarea name="message" rows="5" id="message" ref = {messageRef} required></textarea>
        </p>
        <p class="required-field">Required field <span>*</span></p>
        <p class="submit-button">
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  </div>
</div>
  <p class = "sub">
The Project Vaani Team - 
vaanicontact@gmail.com |<br></br>
SPIRE LAB, Room No. EE C 326 
Department of Electrical Engineering
<br></br>
Indian Institute of Science 
Bangalore-560012
  </p>

  
  <Footer />

  </>);
}
