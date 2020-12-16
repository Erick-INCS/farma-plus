import React, { Component } from 'react'

export interface DataTableProps {
    data : Array<IObjectKeys>;
    headers : IObjectKeys;
}

interface IObjectKeys {
  [key: string]: string | number;
}


class DataTable extends React.Component<DataTableProps> {
    state = {  }
    render() { 
        return ( <table className="table table-bordered" id="dataTable">
        <thead>
          <tr>
              {Object.keys(this.props.headers).map(h=> <th>{this.props.headers[h]}</th>)}
          </tr>
        </thead>
        <tfoot>
          <tr>
            {Object.keys(this.props.headers).map(h=> <th>{this.props.headers[h]}</th>)}
          </tr>
        </tfoot>
        <tbody>
            {this.props.data.map(r => 
            <tr>
                {Object.keys(this.props.headers).map(h=> <td>{r[h]}</td>)}
            </tr>
            )}
        </tbody>
      </table> );
    }
}
 
export default DataTable;