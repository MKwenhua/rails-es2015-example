import Layout from "./layout.es6.js";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from "react";
import ReactDOM from 'react-dom';



window.gotAsset = (function() {
  var reactset = false;

  const setReact = () => {
  	reactset = true;
  	
    const root =  document.getElementById('container');

    ReactDOM.render( 
       <MuiThemeProvider>
    		  <Layout/> 
    	 </MuiThemeProvider>, 
       root);
    }
   
  function displayContent() {
    setTimeout(function() {
      var loadbox = document.getElementById('loadbox2');
      var main = document.getElementById('mainContent');
      loadbox.style.display = 'none';
      main.style.display = 'block';
    }, 0);
  }
  return function() {
    if(!reactset){
    	setReact();
    }else{
      displayContent();
    }
  };
})();



