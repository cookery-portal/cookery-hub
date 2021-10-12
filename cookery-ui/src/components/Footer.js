import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../containers/Home.css'



class Footer extends React.Component
{
  render()
  {
    return (
        // <div class="container-fluid pb-0 mb-0 justify-content-center text-dark bg-secondary">
        <div className="footer_root">
     <footer>
         <div class="row my-5 justify-content-center py-5">
             <div class="col-11">
                 <div class="row ">
                     <div class="col-xl-4">
                         <h3 class="mb-md-0 mb-5 bold-text a">About Us</h3>
                         <p>T.......... ..........</p>
                     </div>
                     <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                         <h6 class="mb-3 mb-lg-4 bold-text a"><b>MENU</b></h6>
                         <ul class="list-unstyled">
                             <li>Home</li>
                             <li>SignUp</li>
                             <li>Login</li>
                         </ul>
                     </div>
                     <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                         <h6 class="mb-3 mb-lg-4 bold-text mt-sm-0 mt-5"><b>Xyz</b></h6>
                         <p class="mb-1">12345</p>
                         <p>SECTOR</p>
                     </div>
                 </div>
                 <div class="row ">
                     <div class="col-xl-4 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                         <p class="social text-muted mb-0 pb-0 bold-text"> 
                         <span class="mx-2">
                             <i class="fa fa-facebook" aria-hidden="true"></i>
                        </span> <span class="mx-2">
                            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                        </span> 
                        <span class="mx-2">
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                        </span> 
                        <span class="mx-2">
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                        </span> </p>
                        <small class="rights">
                            <span>&#174;</span> CookeryPortal All Rights Reserved.
                        </small>
                     </div>
                     <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                         <h6 class="mt-55 mt-2 bold-text"><b>Email</b></h6><small> <span><i class="fa fa-envelope" aria-hidden="true"></i></span>cookeryportal@outlook.com</small>
                     </div>
                 </div>
             </div>
         </div>
     </footer>
 </div>
    )
  }
}
export default Footer;