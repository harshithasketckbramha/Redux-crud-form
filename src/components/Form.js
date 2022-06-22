import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import '../App.css';
import { addData } from './action/Action';

function Form() {
    const Disp=useDispatch()
    const[data,setdata]=useState({
        name:"",
        password:""
    })

    const handleChange=(e)=>{
        setdata({   
            ...data,
            [e.target.name]:e.target.value
        })
        console.log(data);
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("value",data);
        Disp(addData(data))
        setdata({
            name:"",
            password:""
        })
    }
  return (
   <div className='container'>
     <div className='main'>
            <form onSubmit={handleSubmit}>
        <h3>Form</h3>
                <div>
                <label>Name</label>
                <input type="text"
                 className="form-control"
                  name="name" value={data.name} 
                onChange={handleChange}></input>
                </div>

                <div>

                <label>Password</label>
                <input type="password" 
                 className="form-control"
                 name="password" value={data.password}
                onChange={handleChange}></input>
                </div>
                <div className='m-2'>
                <Button variant="primary" type='submit'>Submit</Button>
                </div>
            </form>
        </div>
   </div>


  )
}

export default Form