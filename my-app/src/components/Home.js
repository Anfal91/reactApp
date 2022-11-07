import React from 'react'
import { Link } from 'react-router-dom';

import './Style.css';

export default function Home() {
    // let loginForm = {
    //     display:"none"
    // }
    
        let registerBtn = ()=>
        {
            document.getElementById("loginForm").style.display="block";

        }
        let cnclBtn = () =>
        {
            document.getElementById("loginForm").style.display="none";
        }
    

    const sliderImg = {
        textAlign: "center",
        backgroundImage:"url('images/sliderbg.png')",
        height: "100vh",
        width: "100%"
        
    }
    
  return (
        <div>
            <div style={{display:"none"}} id="loginForm" className='form-body'>
    <div className="login-page">
  <div className="form">

    <form className="login-form">
    <input type="text" placeholder="name"/>
      <input type="password" placeholder="password"/>
      <input type="text" placeholder="email address"/>
      <input type="text" placeholder="Contact no."/>
      <button>create</button>
      <p className="message">Not intreasted? <Link to="/" onClick={cnclBtn}>Cancel</Link></p>
    </form>
  </div>
</div>

</div>
    <div style={sliderImg} className="slider">
        <div className="container">
            <div className="slider-item">
                <div className="slider-logo">
                    <img src= "images/048678b8-bb59-4ad7-bea1-a534189013c4-removebg-preview.png" alt=''/>
                </div>
                <div className="slider-text">
                    <h2>
                        Accept Payments Directly to your Bank <br/> Account <br/>
                        At 0% Transaction Fee
                    </h2>


                    <div className="slider-btn">
                        <Link className="btn1" to='/' onClick={registerBtn}><i className="fa-solid fa-user-plus"></i> Register </Link>
                        <a className="btn2" href="/"><i className="fa-solid fa-right-to-bracket"></i> Login</a>

                    </div>
                </div>

            </div>
        </div>
    </div>



    <div className="wcu">
        <div className="container">
            <div className="wcu-title">
                <p>Simplified Payment Solutions for Online Businesses</p>
            </div>
            <div className="row  align-items-center">
                <div className="col-6">
                    <img src="images/1.png" alt=""/>
                </div>
                <div className="col-6">
                    <h3>No Transaction Charge
                    </h3>
                    <p>Receive your customer and merchant's payment via upi gateway service and save transaction charge.
                        0% transaction Fee.

                    </p>
                </div>
            </div>

            <div className="row align-items-center">
                <div className="col-6 align-self-center">
                    <h3>Settlements in Real Time
                    </h3>
                    <p>You see it, you get it. As soon as your customer has paid, you receive an instant credit to your
                        UPI Merchant App.
                    </p>
                </div>
                <div className="col-6">
                    <img src="images/2.png" alt=""/>
                </div>
            </div>

            <div className="row align-items-center">
                <div className="col-6">
                    <img src="images/3.png" alt=""/>
                </div>
                <div className="col-6 align-self-center">
                    <h3>Enable Multiple UPI Methods
                    </h3>
                    <p>Customers can enter VPA or can choose their favourite UPI app to pay directly.
                    </p>
                </div>
            </div>
        </div>
    </div>
 

    <div className="payments">
        <div className="container">
            <div className="payments-title">
                <h2>Accepting Payments Made Easy, Simple & FREE!</h2>
                <p>The logos below are the property of respective trademark owners. All the below apps support BHIM-UPI.
                </p>
            </div>
            <div className="row">
                <div className="col-3">
                    <img src="images/bank_gpay.jpg" alt=""/>
                </div>
                <div className="col-3">
                    <img src="images/bank_phonepe.jpg" alt=""/>
                </div>
                <div className="col-3">
                    <img src="images/bank_freecharge.jpg" alt=""/>
                </div>
                <div className="col-3">
                    <img src="images/bank_bhim_upi.jpg" alt=""/>
                </div>
            </div>

            <div className="row">
                <div className="col-3">
                    <img src="images/bank_sbi.jpg" alt=""/>
                </div>
                <div className="col-3">
                    <img src="images/bank_airtel.jpg" alt=""/>
                </div>
                <div className="col-3">
                    <img src="images/bank_amazon_pay.jpg" alt=""/>
                </div>
                <div className="col-3">
                    <img src="images/bank_payzapp.jpg" alt=""/>
                </div>
            </div>
        </div>
    </div>



    <div className="blog">
        <div className="container">
            <div className="blog-title">
                <h3>
                    Power Of UPI Gateway
                </h3>
            </div>

            <div className="row">
                <div className="col-4">
                    <i className="fa-solid fa-infinity"></i>
                    <h4>
                        No Transactions Limit
                    </h4>
                    <p>
                        Our all plans are truly unlimited. Unlimited Payment Acceptance for your Business.
                    </p>
                </div>

                <div className="col-4">
                    <i className="fa-solid fa-envelope"></i>
                    <h4>Transaction Alert Via Email & SMS
                    </h4>
                    <p>Your customer get alert of every transaction on their Email and Text SMS instantly.
                    </p>
                </div>

                <div className="col-4">
                    <i className="fa-solid fa-code"></i>
                    <h4>Webhook
                    </h4>
                    <p>Configure a webhook/callback in your account, through our Panel.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col-4">
                    <i className="fa-solid fa-user-gear"></i>
                    <h4>Developer Friendly
                    </h4>
                    <p>Integrates quickly and easily, Just add a payment form to the web, set webhook and done whether
                        business or personal.
                    </p>
                </div>

                <div className="col-4">
                    <i className="fa-solid fa-plane-departure"></i>
                    <h4>Grow your Business
                    </h4>
                    <p>Powerful dashboard and Android App to give real time business insights, manage UPIs &
                        Transaction.
                    </p>
                </div>

                <div className="col-4">
                    <i className="fa-solid fa-headphones"></i>
                    <h4>Support</h4>
                    <p>Definitely, We can Serve you better. We provide 24x7 support via Email and Whatsapp.
                    </p>
                </div>
            </div>
        </div>
    </div>



    <div className="Ls">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="Ls-content">
                        <h4>Start Accepting Payment Today!</h4>
                        <a href="/"><i className="fa-solid fa-rocket"></i> Lets Start</a>
                    </div>
                </div>
            </div>
        </div>
    </div>



    <div className="hiw">
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <h5>Want to Know How UPI Gateway Work's ?</h5>
                    <p>Watch Video to know more.</p>
                    <a href="/">Test Our Speed</a>
                </div>
                <div className="col-6"></div>
            </div>
        </div>
        
    </div>

    </div>

    
  )
}
