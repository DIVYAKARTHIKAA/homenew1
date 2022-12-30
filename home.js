import React from 'react';
import './home.css';
import LocalHospitalSharpIcon from '@mui/icons-material/LocalHospitalSharp';
import ContactPhoneSharpIcon from '@mui/icons-material/ContactPhoneSharp';
import { Link } from 'react-router-dom';
const Home=()=>{
    return(
            <>
            <div className="pinkbc1">
            <div className="pinkcar1">
            <div className="pinkbpcar1">
            <h1 id="pinkhead1">Bodhi Plus</h1>
            <div className="pinkic1">
                    <LocalHospitalSharpIcon />
                    </div>
            </div>
            <div className="pinkabcar1">
                <p id="pinkab1"><Link to='/about'>About Us</Link></p>
                </div>
            <div className="pinkregcar1">
                <p id="pinkr1"><Link to='/Registration'>Sign Up</Link></p>
            </div>
            <div className="pinklogcar1">
                <p id="pinkl1"><Link to='/Login'>Login</Link></p>
            </div>
            
            <div className="pinkimg">
            <div class="pinktr1">Caring. Healing. Leading.</div>
            <div class="pinktrp1">For you,</div>
            <div class="pinktri1">For your family,</div>. 
            <div class="pinktrc1">For life.</div>
            <div class="pinktrt1">Patient centric care.</div>
            </div>
            <div className="pinkimg1"></div>
            </div>
            <div className="pinkce1">
                <div className="pinkcus1">
                <ContactPhoneSharpIcon/><h3 id="pinkheadc1">Contact Us :  </h3>
                <p id="pinkp1">(+91) 9487609321</p>
                <p id="pinkpp1">0422-2466696</p>
                <div className="pinkvl1"></div>
                <p id="pinkppp1">BodhiPlus@gmail.com</p>
                <h4 id="pinkpppp1">www.BodhiPlus.com</h4>
                <div className="pinkvll1"></div>
               
                
                </div>
                
            </div>
            </div>


       </>
    );
}

export default Home;