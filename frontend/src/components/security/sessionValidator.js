class Validator {

    validate() {
	if (!this.valid) this.valid = parseInt(window.sessionStorage['session']);
	
	return this.valid;
    }

    tryRedirect() {
	if(!this.validate() &&  document.location.pathname !== '/login') {
	    document.location.pathname = '/login';
	}
    }

    set(val) {
	window.sessionStorage['session'] = val;
    }

    constructor() {
	this.valid = false;
	this.tryRedirect();
    }
}

export default Validator;
