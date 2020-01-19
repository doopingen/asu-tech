import React from "react";

const nav = (props) => {

  const mainNav = props.navOpts.navData.map((data) => 
    <li className="nav-item-landing-large" >
      <img id={data.id} src={data.imgsrc} alt={data.title}/>
    </li>
  )
  
  return(
    <div className="nav">
      <ul className="nav-container">
        <li className="nav-item-landing-large" >
          <img src="http://asu-tech.norvision.com/images/touch-to-start.png" alt="touch to start"/>
        </li>
       {mainNav}
      </ul>
    </div>
  )
}

export default nav