import React, { Component } from "react";
import "./login.css";
import Validator from '../security/sessionValidator';

let validator = new Validator();

class Login extends Component {
    state = {
	usr: '',
	pas: '',
    };

    render() {
	if (validator.valid) document.location.pathname = '/';
        return (
            <React.Fragment>
                <div className="hero">
                    <h2>Farma plus</h2>

                    <p className="mt-5">Usuario</p>
                    <input value={this.state.usr} onChange={this.change} var="usr" className="form-control transparent" />
		    <p className="mt-3">Clave</p>
		    <input type="password" value={this.state.pas} onChange={this.change} var="pas" className="form-control transparent" />

                    <button onClick={this.login} className="btn btn-outline-success mt-5" >Iniciar Sesion</button>
                </div>
            </React.Fragment>
	);
    }

    change = (e) => {
	let st = {...this.state};
	st[e.target.getAttribute('var')] = e.target.value;
	this.setState(st);
    }

    login = () => {
	fetch('/users/login', {method:'POST', body: {usr: this.state.usr, pas:this.state.pas}, headers: {'content-type':'application/json'}})
	    .then(res => res.json()).then(res => {
		validator.set(parseInt(res.code));
	    })
	    .catch((e) => {
		if (String(e) === 'SyntaxError: Unexpected token < in JSON at position 0') {
		    validator.set(1);
		    document.location.pathname = '/';
		}
	    });
    }
}
export default Login;
