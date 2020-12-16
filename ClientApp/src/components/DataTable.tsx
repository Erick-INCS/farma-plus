import React, { Component } from 'react'

export interface DataTableProps {
    data : Array<object>;
    headers : object;
}
 
 
class DataTable extends React.Component<DataTableProps> {
    state = {  }
    render() { 
        return ( <table className="table table-bordered" id="dataTable">
        <thead>
          <tr>
              {Object.keys(this.props.headers).map(h=> <th>{'this.props.headers[h]'}</th>)}
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
      </table> );
    }
}
 
export default DataTable;