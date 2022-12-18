// import React, { useState, useEffect } from 'react';
// import { Button } from './Button';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// import {

//   Nav,
//   Form,
//   FormControl,
//   NavDropdown,

// } from "react-bootstrap";

// function Navbar() {
//   const [click, setClick] = useState(false);
//   const [button, setButton] = useState(true);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   const showButton = () => {
//     if (window.innerWidth <= 960) {
//       setButton(false);
//     } else {
//       setButton(true);
//     }
//   };

//   useEffect(() => {
//     showButton();
//   }, []);

//   window.addEventListener('resize', showButton);

//   return (
//     <>
//       <nav className='navbar'>
//         <div className='navbar-container'>
//           <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
//             VAANI
//             <i class="fas fa-project-diagram"/>
//           </Link>
//           <div className='menu-icon' onClick={handleClick}>
//             <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
//           </div>
//           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//             <li className='nav-item'>
//             <Link
//                 to='/'
//                 className='nav-links'
//                 onClick={closeMobileMenu}>
//                   <div class="dropdown">
//   <button class="dropbtn">Home</button>
//   <div class="dropdown-content">
//     <Link to = '/about'>About</Link>
//     <Link to = '/partners'>Partners</Link>
   
//   </div>
// </div>
               
      
//           </Link>
//             </li>
//             <li className='nav-item'>
//               <Link
//                 to='/data'
//                 className='nav-links'
//                 onClick={closeMobileMenu}
//               >
//                 Data
//               </Link>
//             </li>
//             <li className='nav-item'>
//               <Link
//                 to='/people'
//                 className='nav-links'
//                 onClick={closeMobileMenu}
//               >
//                 People
//               </Link>
//             </li>
//             <li className='nav-item'>
//               <Link
//                 to='/contact'
//                 className='nav-links'
//                 onClick={closeMobileMenu}
//               >
//                 Contacts
//               </Link>
//             </li>

         
//           </ul>
          
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
    
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <div class="log">
            <img src="/images/iisc.ico" width="34px" height="32px"/> 
            </div>
         
          {/* <img src="/images/iisc.ico" width="33px" height="30px"/> */}
          
            Vaani
            
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {/* <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              <div class="dropdown">
   <button class="dropbtn">Home</button>
   <div class="dropdown-content">
    <Link to = '/about'>About</Link>
   <Link to = '/partners'>Partners</Link>
   
 </div>
</div>
              </Link>
            </li> */}   <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
              Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/data'
                className='nav-links'
                onClick={closeMobileMenu}
              >
               Data
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/team'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Team
              </Link>
            </li>
            
               <li className='nav-item'>
              <Link
                to='/methodology'
                className='nav-links'
                onClick={closeMobileMenu}
              >
              Methodology
              </Link>
            </li>
            
          
          
            <li className='nav-item'>
              <Link
                to='/media'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Media
              </Link>
           
            </li>
          
            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
           
            </li>
        
           
           
            
           
           

          
          </ul>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
