import React, { useRef } from 'react'
import "./register.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";



const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const phone = useRef();
  // const city = useRef();
  const country = useRef();
  const navigate = useNavigate();


  const handleClick = async (e) => {
    e.preventDefault();
    if (confirmPassword.current.value !== password.current.value) {
      confirmPassword.current.setCustomValidity("Mật khẩu không khớp!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
        phone: phone.current.value,
        // city: city.current.value,
        country: country.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        navigate("/")
      } catch (err) {
        console.log(err);
      }
    }
  }
  
  return (
    <container className="Register">
        <wrapper className="Wrapper">
        <title className='Title'>CREATE AN ACCOUNT</title>
        <form className='Form'>
            <div className='Input'>
                <input placeholder="Username" required ref={username} type="username" />
                <input placeholder="Email" required ref={email} type="email"/>
                <input placeholder="Phone" required ref={phone} type="phone"/>
                {/* <input placeholder="City" required ref={city} type="city"/> */}
                <input placeholder="Country" required ref={country} type="country"/>
                <input placeholder='Password' required ref={password}/>
                <input placeholder='Confirm password'  required ref={confirmPassword}/>
            </div>
          <agreement className="Agreement">
          Bằng cách tạo tài khoản, tôi đồng ý với việc xử lý dữ liệu cá nhân của mình theo <b>CHÍNH SÁCH BẢO MẬT</b> của TK - Booking ✔
          </agreement>
          <button className='Button' >Tạo tài khoản</button>
        </form>
        <p className='p'>Đã có tài khoản?<Link to='/login' style={{ textDecoration : "none"}}> Đăng nhập !</Link></p>
        </wrapper>
    </container>
  )
}

export default Register
