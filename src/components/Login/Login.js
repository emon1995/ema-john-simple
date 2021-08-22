import { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { reviewContext } from "../../App";
import { createUserWithEmailAndPassword, handleFbSignIn, handleGoogleSignIn, handleSignOut, initializeLoginFramework, signInWithEmailAndPassword } from "./loginManager";


function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignIn: false,
    name: "",
    email: "",
    photo: "",
  })

  initializeLoginFramework();

  const [loggedInUser, setLoggedInUser] = useContext(reviewContext);
  const history = useHistory();
  const location = useLocation();
  let {from } = location.state || {from: {pathname: "/"}};

  const googleSignIn = () => {
    handleGoogleSignIn()
    .then(res => {
      handleResponse(res, true)
    })
  }

  const signOut = () => {
    handleSignOut()
    .then(res => {
      handleResponse(res, false)
      
    })
  }

  const FbSignIn = () => {
    handleFbSignIn()
    .then(res => {
      handleResponse(res, true)
    })
  }

  const handleResponse = (res, redirect) => {
    setUser(res);
        setLoggedInUser(res);
        if(redirect){
          history.replace(from);
        }

  }


  const handleChange = event => {

    let isFormValid = true;
    if(event.target.name === 'email'){
      isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
    }
    if(event.target.name === 'password'){
      const isPasswordValid = event.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(event.target.value)
      isFormValid = isPasswordValid && passwordHasNumber;
    }
    if(isFormValid){
      const newUserInfo = {...user};
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  }

  const handleSubmit = (event) => {
    if(newUser && user.email && user.password){
          createUserWithEmailAndPassword(user.name, user.email, user.password)
          .then(res => {
            handleResponse(res, true)
          })
        }
    if(!newUser && user.email && user.password){
      signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        handleResponse(res, true)
      })
        }
        event.preventDefault();
  }

  

  return (
    <div style={{textAlign: "center"}}>
      {
        user.isSignIn ? <button onClick={signOut}>Sign out</button> :
        <button onClick={googleSignIn}>Sign in</button>
      }
      <br />
      <button onClick={FbSignIn}>Facebook Sign in</button>
      {
        user.isSignIn && <div>
          <p>Welcome, {user.name} </p>
          <p>Your Email: {user.email} </p>
          <img src={user.photo} alt="pho"  />
           </div>
      }
      <h1>Our own Authentication</h1>
      <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
      <label htmlFor="newUser">New User Sign Up</label>
      <form onSubmit={handleSubmit}>
        {
          newUser && <input type="text" name="name" placeholder="Enter Your Name" onBlur={handleChange} />
        }
        <br />
      <input type="email" onBlur={handleChange} placeholder="Enter your email" name="email" id="" required />
      <br />
      <input type="password" onBlur={handleChange} placeholder="Password" name="password" id="" required />
      <br />
      <input type="submit" value="Submit" />
      </form>
      <p style={{color: "red"}}>{user.error}</p>
      {
        user.success && <p style={{color: "green"}}>User {newUser ? 'Created': "Logged In"} successfully</p>
      }
    </div>
  );
}

export default Login;
