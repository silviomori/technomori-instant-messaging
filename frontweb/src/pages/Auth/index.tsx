import './styles.css';
import { ReactComponent as AuthImage } from 'assets/img/auth/auth-image.svg';
import Signin from './Signin';

const Auth = () => {
  return (
    <div className="auth-container">
      <div className="auth-banner-container">
        <div className="mb-4">
          <span className="h1 text-primary">SnapMessage</span>
          <h3>Stay connected and message in real-time.</h3>
        </div>
        <p>
          Enjoy seamless communication with our user-friendly interface and
          advanced technology.
        </p>
        <AuthImage />
      </div>
      <div className="auth-form-container">
        <Signin />
      </div>
    </div>
  );
};

export default Auth;
