import './styles.css';
import { useAuth0 } from '@auth0/auth0-react';

const Signin = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="signin-card">
      <h1 className="my-5">Sign In</h1>

      <h2>
        Enjoy seamless communication with our user-friendly interface and
        advanced technology.
      </h2>

      <button
        className="btn btn-primary signin-submit w-100 rounded-3 py-2 my-5"
        onClick={() => loginWithRedirect()}
      >
        Sign in
      </button>
    </div>
  );
};

export default Signin;
