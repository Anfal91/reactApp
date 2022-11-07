import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
    const [btntxt,setbtntxt] = useState ("Get in touch")
    let btnClick = () =>
    {
        setbtntxt("Thank You")
    }
  return (
    <div>
       <div className="contact">
        <div className="container">
            <div className="contact-title">
                <h1>Contact Us</h1>
            </div>
            <div className="contact-content">
                <div className="row">
                    <div className="col-6">
                        <h2>We are always ready for you</h2>
                        <input type="text" className="my-3" placeholder="please enter your name" name="txt1" id="txt1"/>
                        <br/>
                        <input type="email" className="my-3" placeholder="please enter your email" name="txt2" id="txt2"/>
                        <br/>
                        <input type="text" className="my-3" placeholder="please enter your number" name="txt3" id="txt3"/>
                        <br/>
                        <Link to="/contact" onClick={btnClick} className="gt-btn">{btntxt}</Link>
                    </div>
                    <div className="col-6">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
