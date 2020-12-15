import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

class Catalog extends Component {
  state = {  }
  render() {
    return (
      <div id="wrapper">
        <ul className="sidebar navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              <i className="fa fa-fw fa-home"></i>
              <span>Vender</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/catalog">
              <i className="fa fa-fw fa-line-chart"></i>
              <span>Catalogo</span>
            </a>
          </li>

        </ul>

        <div id="content-wrapper">
          <div className="container-fluid">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Inicio</a>
              </li>
              <li className="breadcrumb-item active">Vender</li>
            </ol>

            <div className="row">
            
            <div className="card mb-3 col-12">
                <div className="card-header bg-primary text-white">
                  <i className="fa fa-table"></i>
                  Productos
                  <a href="#" className="text-white" data-toggle="modal" data-target="#addProductModal">
                    <span className="float-right">
                      <i className="fa fa-plus"></i>
                      Nuevo producto
                    </span>
                  </a>
                </div>

                <table className="table table-bordered" id="dataTable">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Producto</th>
                          <th>Cantidad</th>
                          <th>Precio</th>
                          <th>Fecha</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tfoot>
                        <tr>
                          <th>#</th>
                          <th>Producto</th>
                          <th>Cantidad</th>
                          <th>Precio</th>
                          <th>Fecha</th>
                          <th>Total</th>
                        </tr>
                      </tfoot>
                      <tbody>
                        <tr>
                          <td>#456488</td>
                          <td>Audionic MIC AM-20</td>
                          <td>03</td>
                          <td className="text-success">$220</td>
                          <td>00/00/0000</td>
                          <td className="text-primary">$220</td>
                        </tr>
                      </tbody>
                    </table>
            </div>
          </div>

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
      </div>

    </div>
      );
  }
}

export default connect()(Catalog);