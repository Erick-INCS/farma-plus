import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./menu.css";

class Menu extends Component {
    state = {};
    render() {
        return (
            <div className="menu">
                <section className="title">
                    <h1>Farma plus</h1>
                </section>

                <section className="options">
                    <ul>
                        <li className="selected">
                            <Link to="/"> Inicio </Link>
                        </li>

                        <li>
                            <Link to="/"> Option 2 </Link>
                        </li>
                    </ul>
                </section>
            </div>
        );
    }
}
export default Menu;
