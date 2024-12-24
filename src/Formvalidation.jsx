import React, { useState } from "react";

const Fromvalidation = () => {
  let [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  let [errmsg,setErrmsg] = useState("");
  let {name, email, password, confirmPassword} = user;
console.log(user);

  function updateuser(e) {
    let key = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [key]: value });
  }

  function submitForm(e){
    e.preventDefault();
    if(!name || !email || !password || !confirmPassword){

        setErrmsg("All fields are required");
        return;
    } else if(password !=confirmPassword){
        setErrmsg("Passwords do not match");
        return;
    }else{
        setErrmsg("form Submitted")
        setUser({name:"",email:"",password:"",confirmPassword:""})
    }
  }
  return (
    <>
    <br/><br/>
    <p>{errmsg}</p>
      <form onSubmit={submitForm}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={updateuser}
          
        />
<br/>
<br/>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={updateuser}
          
        />
<br/>
<br/>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={updateuser}
          
        />
<br/>
<br/>
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={updateuser}
          
        />
<br/>
<br/>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Fromvalidation;
