import React, { Component } from 'react'
import { connect } from 'react-redux';


 
class PageFooter extends Component {
  state = { currentPage: '' }
  render() { 
    return ( 
    <div>
    <br /><br /><br />
      <footer className="sticky-footer">
        <div className="container my-auto">
          <div className="copyright text-center my-auto ">
            <br /><br /><br />
            <span>Copyright &copy; 2020 <a href="#">Erick Arroyo & Francisco Dias</a> Todos los derechos reservados.</span>
            <br /><br /><br />
          </div>
        </div>
      </footer> 
    </div>
      );
  }
}
 
export default connect()(PageFooter);