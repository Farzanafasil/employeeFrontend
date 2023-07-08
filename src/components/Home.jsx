import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Home = () => {
    const [data,setData]=useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>setData(res.data))
        .catch(err=>console.log(err));
    },[])
  return (
    <div>
      <Navbar/>

    <div className="container">
        <div>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      
    </tr>
  </thead>
  <tbody>
    { 
    data.map((user,index)=>{
        return<tr key={index}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
                      
        
      
      
        </tr>

    })
    
}
    
  </tbody>
</table>
        </div>
      </div>



    </div>
  )
}

export default Home