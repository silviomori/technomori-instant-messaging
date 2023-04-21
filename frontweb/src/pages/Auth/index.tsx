import './styles.css';
import { ReactComponent as AuthImage } from 'assets/img/auth/auth-image.svg';
import Signin from './Signin';

const Auth = () => {
  return (
    <div className="auth-container py-5 align-self-center h-100 container d-flex flex-column justify-content-center">
      <div className="mb-4">
        <span className="h1 text-primary">SnapMessage</span>
        <h3>Stay connected and message in real-time.</h3>
      </div>
      <div className="d-flex w-100 align-items-center">
        <div className="auth-banner-container d-none d-lg-flex col-8">
          <AuthImage />
        </div>
        <div className="col-12 col-lg-4">
          <Signin />
        </div>
      </div>
    </div>
  );
};

export default Auth;
