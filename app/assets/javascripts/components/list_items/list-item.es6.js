import React from "react";

const SideLI = (cT, bool, keyIndex) => {
   let liClass = bool ? "active" : "";
   return (
      <li key={keyIndex} className={liClass} >
	  	<span className="icon-span"><i className="material-icons">{cT.icon}</i></span>
	  	<span>{cT.name}</span>
  	</li>);

}
module.exports = {
   sideNav: SideLI
};