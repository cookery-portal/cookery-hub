import React from "react";
import "./footer.css";

const Footer = () => (


<div className="footer">
<div className="footer-middle">
<div className="jumbotron-fluid">
  <div className="container">
    
     <div className="row">
      <div className="col-md-3 col-sm-6">
        
        <div className="footer-pad">
          <h4>Heading 1</h4>
          <ul className="list-unstyled">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Mentors</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
       
        <div className="footer-pad">
          <h4>Heading 2</h4>
          <ul className="list-unstyled">
            <li><a href="#">Policy</a></li>
            <li><a href="#">Locations</a></li>
            <li><a href="#">Disclaimer</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        
        <div className="footer-pad">
          <h4>Heading 3</h4>
          <ul className="list-unstyled">
            <li><a href="#">Parks and Recreation</a></li>
            <li><a href="#">Public Works</a></li>
            <li><a href="#">Police Department</a></li>
            <li><a href="#">Fire</a></li>
            <li><a href="#">Mayor and City Council</a></li>
            <li>
              <a href="#"></a>
            </li>
          </ul>
        </div>
      </div>
    	<div className="col-md-3">
    		<h4>Follow Us</h4>
            {/* <ul className="social-network social-circle">
             <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
             <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
            </ul>				 */}
            {/* <!--Facebook--> */}
            <a class="btn-floating btn-lg btn-fb" type="button" role="button"><i class="fab fa-facebook-f"></i></a>
            {/* <!--Twitter--> */}
            <a class="btn-floating btn-lg btn-tw" type="button" role="button"><i class="fab fa-twitter"></i></a>
            {/* <!--Google +--> */}
            <a class="btn-floating btn-lg btn-gplus" type="button" role="button"><i class="fab fa-google-plus-g"></i></a>
            {/* <!--Linkedin--> */}
            <a class="btn-floating btn-lg btn-li" type="button" role="button"><i class="fab fa-linkedin-in"></i></a>
            {/* <!--Instagram--> */}
            <a class="btn-floating btn-lg btn-ins" type="button" role="button"><i class="fab fa-instagram"></i></a>
		</div>
    </div>
	<div className="row">
		<div className="col-md-12 copy">
			<p className="text-center">&copy; Copyright 2020 - Cookery Portal.  All rights reserved.</p>
		</div>
	</div>
</div>
</div>
</div>
</div>


/*<div className="mainfooter" role="contentinfo">
  <div className="footer-middle">
  <div className="jumbotron-fluid">
  <div className="container">
    <div className="row">
      <div className="col-md-3 col-sm-6">
        
        <div className="footer-pad">
          <h4>Heading 1</h4>
          <ul className="list-unstyled">
            <li><a href="#"></a></li>
            <li><a href="#">Payment Center</a></li>
            <li><a href="#">Contact Directory</a></li>
            <li><a href="#">Forms</a></li>
            <li><a href="#">News and Updates</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
       
        <div className="footer-pad">
          <h4>Heading 2</h4>
          <ul className="list-unstyled">
            <li><a href="#">Website Tutorial</a></li>
            <li><a href="#">Accessibility</a></li>
            <li><a href="#">Disclaimer</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Webmaster</a></li>
          </ul>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        
        <div className="footer-pad">
          <h4>Heading 3</h4>
          <ul className="list-unstyled">
            <li><a href="#">Parks and Recreation</a></li>
            <li><a href="#">Public Works</a></li>
            <li><a href="#">Police Department</a></li>
            <li><a href="#">Fire</a></li>
            <li><a href="#">Mayor and City Council</a></li>
            <li>
              <a href="#"></a>
            </li>
          </ul>
        </div>
      </div>
    	<div className="col-md-3">
    		<h4>Follow Us</h4>
            <ul className="social-network social-circle">
             <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
             <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
            </ul>				
		</div>
    </div>
	<div className="row">
		<div className="col-md-12 copy">
			<p className="text-center">&copy; Copyright 2020 - Cookery Portal.  All rights reserved.</p>
		</div>
	</div>


  </div>
  </div>
  </div>
</div>*/

 
);

export default Footer;