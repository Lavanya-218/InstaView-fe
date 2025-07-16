import React,{useState} from 'react'

const LoginDiv = () => {
  const[userData,setUserData]=useState(
    {
      userName:"",
      password:""
    })
    const setUserName=(e)=>{
      let copy={...userData}
      copy.userName=e.target.value 
      setUserData(copy)
    }
    const setUserPassword=(e)=>{
      let copy={...userData}
      copy.password=e.target.value 
      setUserData(copy)
    }
    
    const handletologin = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/user/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      });

      const data = await response.json();
      console.log("Login Response:", data);

      if (data.access) {
        localStorage.setItem("access_token", data.access);
        localStorage.setItem("refresh_token", data.refresh);
        alert("Login successful!");
      } else {
        alert("Login failed: " + (data.detail || "Invalid credentials"));
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong during login.");
    }
 }
 
  return (
    <div>
     <input type="text" onChange={setUserName} placeholder='Enter your UserName:'/>
     <input type="text" onChange={setUserPassword} placeholder='Enter your password:'/>
     <button onClick={handletologin}>LOGIN</button>
    </div>
  )
}

export default LoginDiv