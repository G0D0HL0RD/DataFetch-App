import React from 'react'
import Axios from 'axios';
import { useEffect, useState } from 'react';

function Component1() {
    const [data,setData] = useState([]);

    const url = "https://dummyjson.com/users";
    useEffect(()=>{
        Axios.get(url)
        .then((res)=>{
            if(res.status===200){
                setData(res.data.users)
                // console.log(res.data.users)
            }else{
                Promise.reject();
            }
        })
      .catch((err)=>{alert(err)});
        
    },[]);
    // console.log(data.users)
    const renderTable = ()=>{
        return data.map(user =>{
            return (
                <tr>
                    <td>{user.id}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.age}</td>
                    <td>{user.gender}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.username}</td>
                    <td>{user.birthDate}</td>
                    <td><img src={user.image} alt="img"/></td>
                    <td>{user.height}</td>
                    <td>{user.weight}</td>
                    <td>{user.address.city}</td>
                    <td>Latitude:{user.address.coordinates.lat} Longitude:{user.address.coordinates.lng}</td>
                    <td>{user.bank.cardExpire}</td>
                    <td>{user.company.name}</td>

                </tr>
            )
        })
    }

  return (
    <div className='bg-warning'>
        <h1 className='heading text-center'>Table which contains user data</h1>
        <table className='table table-bordered table-striped table-hover'>
        <thead className='table-dark'>
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Username</th>
                <th>BirthDate</th>
                <th>Image</th>
                <th>Height</th>
                <th>Weight</th>
                <th>Address City</th>
                <th>Location Coordinates</th>
                <th>Bank</th>
                <th>Company</th>
            </tr>
        </thead>
        <tbody className='table-light'> {renderTable()} </tbody>
      </table>
    </div>
  )

}
export default Component1;
