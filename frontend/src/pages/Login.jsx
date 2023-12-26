// import "./App.css"
// import React from "react";


import React from 'react'
import {useState} from 'react'
import axios from 'axios';
import './Login.css'
const Login=()=>{
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')

    let style={
      height:'200px',
      width:'200',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',  
  }
    function nameChange(e){
      e.preventDefault();
      const n=e.target.value
      setName(n)
      //console.log(name)
    }

    function passChange(e){
      e.preventDefault()
      const p = e.target.value
      setPassword(p)
      //console.log(password)
    }
  
    //console.log(name,password)

    function handle(e){
        e.preventDefault()
        const data={name,password}
        console.log(name,password)
        axios.post('http://localhost:8080/login',data)
        .then(response=>{
            const s=response.data;
            console.log(s)
            alert('Login successfully')
        })
        //setName('')
        //setPassword('')

    }

return(
	<div  className='login_container' style={style}>
				<div className='login_form_container'>
					<div className='left'>
        <form className='form_container' onSubmit={e=>handle(e)}>
		<h1 style={{color:'orange'}}>Login:</h1>
        <label>Email:</label><br></br>
        <input className='input' type="email" onChange={e=>nameChange(e)} placeholder='Enter the mail'/><br></br>
        <label>Password:</label><br></br>
        <input className='input' type="text" onChange ={e=>passChange(e)} placeholder="Enter the password"/><br></br>
        <input className='green_btn' type="submit" name="LOGIN"/>
        </form>
	</div>
  </div>
  </div>
	)
}

export default Login  
 

