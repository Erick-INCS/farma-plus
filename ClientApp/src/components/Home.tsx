import * as React from 'react';
import { connect } from 'react-redux';

const Home = () => (
  <div>
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
{/*         
        <li className="nav-item">
          <a className="nav-link" href="sales-reports.html">
            <i className="fa fa-fw fa-bar-chart"></i>
            <span>Sales Reports</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="inventory-reports.html">
            <i className="fa fa-fw fa-tags"></i>
            <span>Inventory Reports</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="payment-reports.html">
            <i className="fa fa-fw fa-money"></i>
            <span>Payment Reports</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="sales.html">
            <i className="fa fa-fw fa-table"></i>
            <span>Check Sales</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href data-toggle="modal" data-target="#addSaleModal">
            <i className="fa fa-fw fa-plus"></i>
            <span>Record New Sale</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href data-toggle="modal" data-target="#addProductModal">
            <i className="fa fa-fw fa-tags"></i>
            <span>Add New Product</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="product-brands.html">
            <i className="fa fa-fw fa-industry"></i>
            <span>Product Brands</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="product-vendors.html">
            <i className="fa fa-fw fa-users"></i>
            <span>Product Vendors</span></a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            <i className="fa fa-fw fa-folder"></i>
            <span>
              Manage Products
              <i className="float-right fa fa-angle-down"></i>
            </span>
          </a>
          <div className="dropdown-menu" aria-labelledby="pagesDropdown">
            <h6 className="dropdown-header">Inventory</h6>
            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#addProductModal"> <i
                className="fa fa-plus"></i> Add Product</a>
            <a className="dropdown-item" href="products.html"> <i className="fa fa-tags"></i> All Products</a>
            <div className="dropdown-divider"></div>
            <h6 className="dropdown-header">Product Types</h6>
            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#addProductTypeModal"> <i
                className="fa fa-plus"></i> Add New Type</a>
            <a className="dropdown-item" href="product-types.html"> <i className="fa fa-tags"></i> Product Types</a>
            <div className="dropdown-divider"></div>
            <h6 className="dropdown-header">Dealers &amp; Brands</h6>
            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#addProductVendorModal"> <i
                className="fa fa-user"></i> Add New Vendor</a>
            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#addProductBrandModal"> <i
                className="fa fa-industry"></i> Add New Brand</a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="history.html">
            <i className="fa fa-fw fa-calendar"></i>
            <span>History</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="export-record.html">
            <i className="fa fa-fw fa-external-link"></i>
            <span>Export Record</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="general-settings.html">
            <i className="fa fa-fw fa-cogs"></i>
            <span>General Settings</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="help.html">
            <i className="fa fa-fw fa-life-ring"></i>
            <span>Help</span></a>
        </li> */}
      </ul>

      <div id="content-wrapper">
        <div className="container-fluid">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Inicio</a>
            </li>
            <li className="breadcrumb-item active">Vender</li>
          </ol>

          <div className="row">
          

          <div className="card mb-3 col-12">
              <div className="card-header bg-primary text-white">
                <i className="fa fa-table"></i>
                Nueva venta
              </div>
              <div className="card-body">
                <div className="table-responsive">
                <form >
                  <div>
                    <div className="form-group">
                      <label>Selecciona un producto</label>
                      <select className="form-control text-primary" required>
                        <option disabled selected>Por favor selecciona un producto</option>
                        <option disabled>Speakers &amp; MICs</option>
                        <option>Audionic MIC AM-20</option>
                        <option>USB Sound Card</option>
                        <option>Audionic Headphones AHT-11</option>
                        <option disabled>Accesorios</option>
                        <option>Razer Mousepad</option>
                        <option>Blue Mousepad</option>
                        <option>Apple Mouse Wireless A11</option>
                        <option>DELL Mouse Wireless D232</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Cantidad</label>
                      <input className="form-control" type="number" value="0" />
                    </div>
                    <div className="form-group">
                      <label>Precio</label>
                      <h5>$00</h5>
                    </div>
                    <div className="form-group">
                      <label>Descripcion </label>
                      <h5>$00</h5>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button className="btn btn-secondary" type="button">Cancelar</button>
                    <input type="submit" className="btn btn-primary" value="Procesar"/>
                  </div>
                </form>
                </div>
              </div>
            </div>


            <div className="card mb-3 col-12">
              <div className="card-header bg-primary text-white">
                <i className="fa fa-table"></i>
                Historial de ventas
              </div>
              <div className="card-body">
                <div className="table-responsive">
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
            </div>

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

export default connect()(Home);