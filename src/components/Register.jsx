import React, { useState } from "react"

const Register = () => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        userName: "",
        dob: "",
        mobile: ""
    });

    const setName = (e) => {
        let copy = { ...userData };
        copy.name = e.target.value;
        setUserData(copy);
    };

    const setEmail = (e) => {
        let copy = { ...userData };
        copy.email = e.target.value;
        setUserData(copy);
    };

    const setUsername = (e) => {
        let copy = { ...userData };
        copy.userName = e.target.value;
        setUserData(copy);
    };

    const setPassword = (e) => {
        let copy = { ...userData };
        copy.password = e.target.value;
        setUserData(copy);
    };

    const setDob = (e) => {
        let copy = { ...userData };
        copy.dob = e.target.value;
        setUserData(copy);
    };

    const setMobile = (e) => {
        let copy = { ...userData };
        copy.mobile = e.target.value;
        setUserData(copy);
    };

    const handleRegister = async () => {
        console.log(userData);

        try {
            const response = await fetch("http://127.0.0.1:8000/user/register/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            });

            const data = await response.json();
            console.log(data);

            if (data.msg === "User Registered Successfully") {
                alert("Registration Successful!");
            } else {
                alert("Registration Failed!");
                alert("Registration Failed: " + JSON.stringify(data.errors || data.msg));
               console.log("Error:", data);  // Helps see full error

            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong!");
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <input type="text" onChange={setName} placeholder="Enter Name" value={userData.name} />
            <input type="email" onChange={setEmail} placeholder="Enter Email" value={userData.email} />
        <input type="text" onChange={setUsername} placeholder="Enter Username" value={userData.userName}/>
            <input type="password" onChange={setPassword} placeholder="Enter Password" value={userData.password} />
            <input type="text" onChange={setDob} placeholder="Enter DOB" value={userData.dob} />
            <input type="text" onChange={setMobile} placeholder="Enter Mobile" value={userData.mobile} />
            <button onClick={handleRegister}>REGISTER</button>
        </div>
    );
};

export default Register