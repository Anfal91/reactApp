import React, { useState } from 'react'


export default function About() {
     const [myCss, setcss] = useState(
        {
            backgroundColor:'white',
            color:'black'
        }
     );
     const [btntxt, setbtntxt] = useState("Enable dark mode")

    // setcss("backgroundColor:white")
    let btncolor = {
        backgroundColor:'#222'
    }
    let btnClick = () =>
    {
      if(myCss.backgroundColor ==='white')
      {
        setcss({
          backgroundColor:'#222',
          color:'white'
         })

         setbtntxt("disable dark mode")

      }
      if (myCss.backgroundColor ==='#222')
      {
        setcss({
          backgroundColor:'white',
          color:'#222'
         })

         setbtntxt("enable dark mode")

      }

    }
  return (
    <div className="container">
        <div className="card" style={myCss}>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    <button style={btncolor} id='btn' onClick={btnClick} className='btn btn-primary my-3'>{btntxt}</button>
    </div>
  )
}
