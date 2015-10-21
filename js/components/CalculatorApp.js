import React, {PropTypes, Component} from 'react';
import '../../css/bootstrap/css/bootstrap.css';
import '../../css/bootstrap-material/css/material.css';

import NavBar from './NavBar.js';
import SmartSearch from './SmartSearch.js';

export default class CalculatorApp extends Component {
  render() {
    return(
      <div className="mobile_block well">
        <NavBar />
        <SmartSearch />
        <div >
            <table className="">
              <tr>
              <td><button href="#" className="btn btn-primary" data-constant="SIN" data-key="115">sin</button></td>
              <td><button href="#" className="btn btn-primary" data-constant="COS" data-key="99">cos</button> </td>
              <td><button href="#" className="btn btn-primary" data-constant="MOD" data-key="109">md</button> </td>
              <td colSpan="2"><button href="#" className="btn btn-block btn-danger" data-method="reset" data-key="8">C</button></td>
              </tr>
              <tr>
                <td> <button href="#" className="btn btn-primary" data-key="55">7</button></td>
                <td> <button href="#" className="btn btn-primary" data-key="56">8</button></td>
                <td> <button href="#" className="btn btn-primary" data-key="57">9</button></td>
                <td> <button href="#" className="btn btn-primary" data-constant="BRO" data-key="40">(</button></td>
                <td> <button href="#" className="btn btn-primary" data-constant="BRC" data-key="41">)</button></td>
              </tr>
              <tr>
                <td> <button href="#" className="btn btn-primary" data-key="52">4</button> </td>
                <td> <button href="#" className="btn btn-primary" data-key="53">5</button> </td>
                <td> <button href="#" className="btn btn-primary" data-key="54">6</button> </td>
                <td> <button href="#" className="btn btn-primary" data-constant="MIN" data-key="45">-</button> </td>
                <td> <button href="#" className="btn btn-primary" data-constant="SUM" data-key="43">+</button> </td>
              </tr>
              <tr>
                <td> <button href="#" className="btn btn-primary" data-key="49">1</button></td>
                <td> <button href="#" className="btn btn-primary" data-key="50">2</button></td>
                <td> <button href="#" className="btn btn-primary" data-key="51">3</button></td>
                <td> <button href="#" className="btn btn-primary" data-constant="DIV" data-key="47">/</button></td>
                <td> <button href="#" className="btn btn-primary" data-constant="MULT" data-key="42">*</button></td>
              </tr>
              <tr>
                <td><button href="#" className="btn btn-primary" data-key="46">.</button></td>
                <td><button href="#" className="btn btn-primary" data-key="48">0</button></td>
                <td><button href="#" className="btn btn-primary" data-constant="PROC" data-key="37">%</button></td>
                <td colSpan="2"><button href="#" className="btn btn-block btn-success" data-method="calculate" data-key="61">=</button></td>
              </tr>
            </table>
        </div>
      </div>
      );
    }
  }
