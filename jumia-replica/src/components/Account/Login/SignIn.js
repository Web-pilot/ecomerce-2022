import "./SignIn.css";
import { FaFireAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };
  return (
    <section className="sign_in_container">
      <h3>Real Comerce App</h3>
      <h3>
        <FaFireAlt />{" "}
      </h3>
      <span className="btn_block" onClick={google}>
        {" "}
        <span>
          <FcGoogle />
        </span>{" "}
        Sign In with Google
      </span>
      <h4>Click on the button to create account</h4>
      <span>You will get log in if you already have an account</span>
    </section>
  );
};

export default SignIn;
