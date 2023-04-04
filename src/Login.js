import "./Login.css";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { login } from "./features/userSlice";
import { useDispatch } from "react-redux";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const register = async (e) => {
    if (!name) {
      alert("Please enter your full name!");
    } else {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(`User ${user.uid} created`);
      await updateProfile(user, {
        displayName: name,
        photoURL: profilePic,
      });
      dispatch(
        login({
          email: user.email,
          uid: user.uid,
          displayName: name,
          photoURL: profilePic,
        })
      );
    }
  };

  const loginToApp = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      dispatch(
        login({
          email: userCredential.user.email,
          uid: userCredential.user.uid,
          displayName: userCredential.user.displayName,
          photoURL: userCredential.user.photoURL,
        })
      );
    }).catch((error) => alert(error));
  };

  return (
    <div className="login">
      <img
        src="https://brand.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg"
        alt="linked in"
      />
      <form>
        <input
          type="text"
          placeholder="Full name (required if registering)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Profile pic URL (optional)"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?
        <span className="login_register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
