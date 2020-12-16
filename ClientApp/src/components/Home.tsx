import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import PageFooter from './PageFooter';
// import DataTable from './DataTable';

class Home extends Component {
  state = {   }
  render() { 
    return ( <div>
      <div id="wrapper">
  
       <Navigation currentPage=""></Navigation>
  
        <div id="content-wrapper">
          <div className="container-fluid">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Inicio</a>
              </li>
              <li className="breadcrumb-item active">Vender</li>
            </ol>
  
            <div className="row">
            
  
            <div className="card mb-3 p-0 mx-1 col-4">
                <div className="card-header bg-primary text-white">
                  <i className="fa fa-table"></i>
                  Cargar producto
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
  
  
              <div className="card mb-3 p-0 mx-1 col-7">
                <div className="card-header bg-primary text-white">
                  <i className="fa fa-table"></i>
                  Venta
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <DataTable headers={{
                      'id': '#',
                      'name': 'Producto',
                      'quantity': 'Cantidad',
                      'price': 'Precio',
                      'date': 'Fecha',
                      'total': 'Total',
                    }} data={[{
                      id:'#456488',
                      name:'Audionic MIC AM-20',
                      quantity:'03',
                      price:'$220',
                      date:'00/00/0000',
                      total:'$220',
                    }]}></DataTable>
                  </div>
                </div>
              </div>
  
            </div>
          </div>
  
          <PageFooter></PageFooter>
          
        </div>
      </div>
  
    </div> );
  }
}
 
export default connect()(Home);