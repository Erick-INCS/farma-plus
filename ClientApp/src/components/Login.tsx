import React, { Component } from 'react'

class Login extends Component {
    state = { }
    render() { 
        return (
        <div className="card card-login mx-auto mt-5">
          <div className="card-header bg-primary text-white">Login to your account</div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <div className="form-label-group">
                  <label>Usuario</label>
                  <input type="text" id="Usuario" className="form-control" placeholder="Usuario" required/>
                </div>
              </div>
              <div className="form-group">
                <div className="form-label-group">
                  <label>Contraseña</label>
                  <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                </div>
              </div>
              <a className="btn btn-primary btn-block" href="index.html">Login</a>
            </form>
          </div>
        </div>
      );
    }
}
 
export default Login;