import React, {useState} from 'react'

export default function Form() {
  let [text,updateText] = useState("Enter text here");

  let btnClick = ()=>
  {
    let newText = text.toLocaleUpperCase()
    updateText(newText)
  }
  let txtChange = (changeitem) =>
  {
    updateText(changeitem.target.value);
  }
  return (
    
    <div className="container">
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" value={text} onChange={txtChange} id="exampleFormControlTextarea1" rows="3"></textarea>
  <button className="btn btn-primary" onClick={btnClick}>convert</button>
</div>
</div>

  )
}
