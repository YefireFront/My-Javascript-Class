const { useState } = require("react");


 function clickHandler(){
    console.log('welcome ti the jungle');
 }

 const fnArrow = ()=>{
    console.log(`vengo de arrow`);
 }

<button 
className="freach"
id="yeffer"
onClick={()=>{
    clickHandler()
    fnArrow()
}}
>Click me </button>


