import { useContext } from 'react';

import './styles.css';
import { useForm } from 'react-hook-form';

type CredentialsDTO = {
  email: string;
  password: string;
};

type LocationState = {
  from: string;
};

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CredentialsDTO>();

  const onSubmit = (credentialsDTO: CredentialsDTO) => {
    console.log(credentialsDTO);
  };

  return (
    <div className="signin-card">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            {...register('email', {
              required: 'Required field',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            type="text"
            className={`form-control base-input ${
              errors.email ? 'is-invalid' : ''
            }`}
            placeholder="Email"
            name="email"
          />
          <div className="invalid-feedback d-block">
            {errors.email?.message}
          </div>
        </div>
        <div className="mb-2">
          <input
            {...register('password', { required: 'Required field' })}
            type="password"
            className={`form-control base-input ${
              errors.password ? 'is-invalid' : ''
            }`}
            placeholder="Password"
            name="password"
          />
          <div className="invalid-feedback d-block">
            {errors.password?.message}
          </div>
        </div>
        <a href="/admin/auth/recover" className="signin-link-recover">
          Forgot password
        </a>
        <button className="btn btn-primary h4 signin-submit w-100 rounded-3">
          Sign in
        </button>

        <div className="signup-container">
          <span className="signin-form-not-registered">
            New to SnapMessage?
          </span>
          <a href="/admin/auth/register" className="signin-link-register">
            Create account
          </a>
        </div>
      </form>
    </div>
  );
};

export default Signin;
