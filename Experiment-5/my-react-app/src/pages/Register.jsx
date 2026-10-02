import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Registration() {
  return (
    <section className="section auth-section">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-5">
            <div className="card auth-card registration-card">
              <div className="card-body">
                <h4 className="mb-3 text-center">Registration</h4>
                <form>
                  <div className="form-group mb-3">
                    <input type="email" className="form-control" id="email" name="email" placeholder="Email" />
                  </div>
                  <div className="form-group mb-3">
                    <input type="password" className="form-control" id="password" name="password" placeholder="Password" />
                  </div>
                  <div className="form-group mb-3">
                    <input type="tel" className="form-control" placeholder="Enter Mobile" name="TEL" />
                  </div>
                  <input type="submit" className="btn btn-primary w-100" value="Register" />
                  <p className="mt-3 text-center">
                    Already have an account <Link to="/login">Login here</Link>
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

export default Registration;