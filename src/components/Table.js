import React from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { deleteData, editData } from './action/Action';
import EditData from './Edit';


function Tables() {
    const disp=useDispatch()
    const content=useSelector((state)=>state)
    
    console.log("content Data",content);
    
  return (
    <div>
       <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sl.no</th>
          <th>Name</th>
          <th>Password</th>
          <th>Action</th>
          <th>Action</th>

        </tr>
      </thead>
      <tbody>
      {content.map((val,i)=>{
        return (
        <tr key={i+1}>
          <td>{i+1}</td>
          <td>{val.name}</td>
          <td>{val.password}</td>
          <td> 
            <EditData val={val} i={i}/>
          </td>
          <td>
             <Button variant="primary" onClick={()=>{
                disp(deleteData(i))
             }}> Delete</Button></td>
        </tr>
        )
      })}
      </tbody>
    </Table>
    </div>
  )
}

export default Tables