import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 

const Loginform = () => {
  const [user, setuser] = useState({
    fname: "",
    pass: ""
  });

  const navigate = useNavigate(); 

  const handalchange = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
  };

  const submitdata = async (e) => {
    e.preventDefault(); 

    axios
    //   .get(`http://localhost:8000/user?fname=${user.fname}&pass=${user.pass}`)
    .get('http://localhost:8000/user',{
        fname:user.fname,
        pass:user.pass
    })
      .then((res) => {
        if (res.data.length > 0) {
        //   alert("Login Successful!");
          navigate('/sidebar'); 
        } else {
          alert("404 - Invalid Credentials");
        }
      })
      .catch((err) => {
        console.log(err);
      })
     
  };

  return (
    <>
      <div className='setform'>
        <div className='form1'>
          <h1 className='log'>Login Form</h1>
          <br />
          <form onSubmit={submitdata}>
            <label htmlFor="fname" className='form-label'>Name</label>
            <input
              type='text'
              id='fname'
              name='fname'
              className='form-control'
              placeholder='Enter name'
              onChange={handalchange}
              value={user.fname}
              required
            />
            <br />
            <label htmlFor="pass" className='form-label'>Password</label>
            <input
              type="password"
              id='pass'
              name='pass'
              className='form-control'
              placeholder='Enter password'
              onChange={handalchange}
              value={user.pass}
              required
            />
            <br /><br />
            <button type='submit' className='btn sub'>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Loginform;
