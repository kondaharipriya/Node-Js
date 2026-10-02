import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <section className="section auth-section">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-5">
            <div className="card auth-card">
              <div className="card-body">
                <h4 className="mb-3 text-center">Login</h4>
                <form>
                  <div className="form-group mb-3">
                    <input type="email" className="form-control" id="email" name="email" placeholder="Email" />
                  </div>
                  <div className="form-group mb-3">
                    <input type="password" className="form-control" id="password" name="password" placeholder="Password" />
                  </div>
                  <input type="submit" className="btn btn-primary w-100" value="Login" />
                  <p className="mt-3 text-center">
                    Don&apos;t have an account <Link to="/registration">Register here</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;