import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import PageFooter from './PageFooter';

class Users extends Component {
  state = {  }
  render() {
    return (
      <div id="wrapper">
        
        <Navigation currentPage=""></Navigation>

        <div id="content-wrapper">
          <div className="container-fluid">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Inicio</a>
              </li>
              <li className="breadcrumb-item active">Usuarios</li>
            </ol>

            <div className="row">
            
            <div className="card mb-3 col-12">
                <div className="card-header bg-primary text-white">
                  <i className="fa fa-table"></i>
                  Usuarios
                  <a href="#" className="text-white" data-toggle="modal" data-target="#addProductModal">
                    <span className="float-right">
                      <i className="fa fa-plus"></i>
                      Nuevo Usuario
                    </span>
                  </a>
                </div>

                <table className="table table-bordered" id="dataTable">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Nombre</th>
                          <th>Tipo</th>
                          <th>Fecha</th>
                        </tr>
                      </thead>
                      <tfoot>
                        <tr>
                          <th>#</th>
                          <th>Nombre</th>
                          <th>Tipo</th>
                          <th>Fecha</th>
                        </tr>
                      </tfoot>
                      <tbody>
                        <tr>
                          <td>#</td>
                          <td>Usr01</td>
                          <td>Administrador</td>
                          <td>00/00/0000</td>
                        </tr>
                      </tbody>
                    </table>
            </div>
          </div>

          <PageFooter></PageFooter>
        </div>
      </div>

    </div>
      );
  }
}

export default connect()(Users);