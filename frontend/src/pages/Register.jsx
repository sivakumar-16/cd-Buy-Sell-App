//import './App.css';
//import { useState } from 'react';
import React from 'react';

// export default function createaccount(){
    const Register=()=>{

       
	return(
		<div>
			<form action=""> 
				<div> 
					<label htmlFor="email">Email</label>
					<input type="text" name="email" id="email"/> 
				</div> 
				<div> 
					<label htmlFor="passw">Password</label>
					<input type="text" name="passw" id="passw"/> 
				</div>  
				<button type="submit">Register</button>
			</form>
		</div>
	)
}

export default  Register
       