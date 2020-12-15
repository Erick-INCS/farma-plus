import React, { Component } from 'react'
import { connect } from 'react-redux';


export interface NavigationProps {
  currentPage: string;
}
 
class Navigation extends React.Component<NavigationProps> {
  public state = { currentPage: '' }
  render() { 
    return ( <ul className="sidebar navbar-nav">
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
    <li className="nav-item">
      <a className="nav-link" href="/users">
        <i className="fa fa-fw fa-bar-chart"></i>
        <span>Usuarios</span></a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/history">
        <i className="fa fa-fw fa-tags"></i>
        <span>Historial</span></a>
    </li>
{/*         
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
  </ul> );
  }
}
 
export default connect()(Navigation);