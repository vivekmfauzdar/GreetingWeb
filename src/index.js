
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

let say = '';
let clr = {}
// let dateTime = new Date().toLocaleTimeString();
let dateTime = "11";
if(dateTime >= 1 && dateTime <= 12){

     say = " Good Morning"
     clr.color = "#4C4B16"
}else if(dateTime >= 12 && dateTime < 19){

     say = " Good Evening"
     clr.color = "#FFA41B"

}else
{
     say = " Good Night"
     clr.color = "#1D5B79"

}


ReactDOM.render( 
    <React.Fragment>
        <div className='head_div'>
            <h1 className='one'>RamRam Ji,<span style={clr}>{say}</span>
            </h1>
        
        </div>
        </React.Fragment>,

     document.getElementById('root') )


