import React from 'react'
import './Calculater.css'
import { useState } from 'react';
function Calculation() {
    const [result, setResult] = useState("");
    const setData=localStorage.getItem('myFormData');
     const storageData=JSON.parse(setData);
  return (
    <div>
      <h5> Your Calculations</h5>
      
          <table className="table">
            <thead>
              <tr>
                 
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Calculation</th>
                <th scope="col">Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>{storageData.calculation}</td>
                <td></td>
                <td>{result}</td>
                <td>14</td>
                <td>14</td>
              </tr>
            </tbody>
          </table>
    </div>
  )
}

export default Calculation
