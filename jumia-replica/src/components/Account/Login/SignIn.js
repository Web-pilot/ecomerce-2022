import "./SignIn.css";
import {FaFireAlt} from "react-icons/fa";
import {FcGoogle
} from "react-icons/fc";

const SignIn = () => {

  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self")
  }
  return (
    <section className="sign_in_container">
        <h3><FaFireAlt/> </h3>
        <span  className="btn_block" onClick={google}> <span><FcGoogle /></span> Sign In with Google</span>
        <h4>Click on the button to sign in using your google</h4>
    <h1>Or</h1>
    <hr />
    <a href="#" className="btn_block"> <span><FcGoogle /></span> Create Account</a>
    </section>
  )
}

export default SignIn;