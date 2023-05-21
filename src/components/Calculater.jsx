import React, { useState } from 'react'
import './Calculater.css';
// import Calculation from './Calculation';
function Calculater() {
  const [result, setResult] = useState("");
  const [formData,setFormData]=useState([]);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
};
const handleSubmit = (event) => {
  event.preventDefault();
  localStorage.setItem('myFormData', JSON.stringify(formData));
  
};
const setName=localStorage.getItem('myFormData');
const setjson=JSON.parse(setName);
  const handleClick=(e)=>{
     setResult(result.concat(e.target.name));
  }
  const clear=()=>{
    setResult("");
  }
 
  const calculate=()=>{
    try{

      setResult(eval(result).toString());
    }catch(err){
      setResult("Error");
    }
  }
  return (
    <div className='div1'>
      <div className='div'>
        <div className="container">
          <h5>Calculator</h5>
          <form action="">
            <input className="bg-black" type="number" value={result} />
          </form>
          <div className='Keypad'>
            <button  onClick={clear} className="bg-secondary text-white" id="clear">AC</button>
            <button name="plus" onClick={handleClick} className="bg-secondary text-white" id="plusminus">+/-</button>
            <button name="persentage" onClick={handleClick}className="bg-secondary text-white" id="percentage">%</button>
            <button name="/" onClick={handleClick}className='bg-warning text-white' >&divide;</button>
            <button name="7" onClick={handleClick}className='bg-dark-subtle text-white' >7</button>
            <button  name="8"onClick={handleClick}className='bg-dark-subtle text-white' id="eight">8</button>
            <button  name="9"onClick={handleClick}className='bg-dark-subtle text-white' id="nine">9</button>
            <button name="*" onClick={handleClick}className='bg-warning text-white' id="into">x</button>
            <button name="4" onClick={handleClick}className='bg-dark-subtle text-white' id="four">4</button>
            <button name="5" onClick={handleClick}className='bg-dark-subtle text-white' id="five">5</button>
            <button name="6" onClick={handleClick}className='bg-dark-subtle text-white' id="six">6</button>
            <button name="-" onClick={handleClick}className='bg-warning text-white' id="minus">-</button>
            <button name="1" onClick={handleClick}className='bg-dark-subtle text-white' id="one">1</button>
            <button name="2" onClick={handleClick}className='bg-dark-subtle text-white' id="two">2</button>
            <button  name="3"onClick={handleClick}className='bg-dark-subtle text-white' id="three">3</button>
            <button name="+" onClick={handleClick}className='bg-warning text-white' id="plus">+</button>
            <button name="0" onClick={handleClick}className='bg-dark-subtle  text-white Zero'>0</button>
            <button name="." onClick={handleClick}className='bg-dark-subtle text-white' id=".">.</button>
           
            <button name="=" onClick={calculate}className='bg-warning text-white' id="result">=</button>

          </div> <br></br>
          <h5>Calculation Name</h5>
          <div className='d-flex flex-row div' >

            <form onSubmit={handleSubmit}>
            <input type="text" class="form-control" onChange={handleChange} id="username" name="calculation" />
            <button className='saveButton ' type="submit">Save</button>
            </form>
            
          </div>
        </div>
        <div className='container'>
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
                <td>{setjson.calculation}</td>
                <td>{}</td>
                <td>{result}</td>
                <td>14</td>
                <td>14</td>
              </tr>
            </tbody>
          </table>
          {/* <Calculation/> */}
        </div>
      </div>
    </div>
  )
}

export default Calculater;