import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [toggleForm, setToggleForm] = useState(false);  
  const [name, setName] = useState(" ");
  const [amount, setAmount] = useState(" ");
  const [date, setDate] = useState(" ");
  const [inputValue, setInputValue] = useState("Value from onchanges");

  const handleCancelForm = () => {
    setInputValue(" ");
  };

  const handleShowForm = () => {
    setToggleForm(true);
  };

  return (
    <div className='container'>
      {toggleForm ? (<div className="app-form">
          <div className="rinput">
            <label>Name</label>
            <input
            type="text" 
            placeholder="Enter name here ..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          </div>
          <div className="rinput">
            <label>Amount</label>
            <input 
            type="text" 
            placeholder="Enter amount here ..."
            value={amount}
            onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="rinput">
            <label>Date</label>
            <input 
            type="date" 
            placeholder="dd/mm/yy" 
            value={date}
            onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="rinput rbutton">
            <button className="btn-add">Add</button>
            <button className="btn-cancel" onClick={handleCancelForm}>Cancel</button>
          </div>
        </div>
      ) : (
      <div className='adding'>
        <button className='btn-add' onClick={handleShowForm}>ADD NEW EXPENSE</button>
      </div>
      )};
      <div className='content'>
        <div className='filter'>
          <p>Filter by year</p>
          <select>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
        </div>
        <div className='body'>
          <div className='content-body__chart'>
            <div className="chart">
              <p>Jan</p>
              <div className="percent">
                <div className="chart-bar-fill"></div>
              </div>
            </div>
            <div className="chart">
              <p>Feb</p>
              <div className="percent">
                <div className="chart-bar-fill"></div>
              </div>
            </div>
            <div className="chart">
              <p>Mar</p>
              <div className="percent">
                <div className="chart-bar-fill"></div>
              </div>
            </div>
            <div className="chart">
              <p>May</p>
              <div className="percent">
                <div className="chart-bar-fill"></div>
              </div>
            </div>
            <div className="chart">
              <p>Jun</p>
              <div className="percent">
                <div className="chart-bar-fill"></div>
              </div>
            </div>
            <div className="chart">
              <p>Jut</p>
              <div className="percent">
                <div className="chart-bar-fill"></div>
              </div>
            </div>
            <div className="chart">
              <p>Aug</p>
              <div className="percent">
                <div className="chart-bar-fill"></div>
              </div>
            </div>
            <div className="chart">
              <p>Sep</p>
              <div className="percent">
                <div className="chart-bar-fill"></div>
              </div>
            </div>
            <div className="chart">
              <p>Oct</p>
              <div className="percent">
                <div className="chart-bar-fill"></div>
              </div>
            </div>
            <div className="chart">
              <p>Nov</p>
              <div className="percent">
                <div className="chart-bar-fill"></div>
              </div>
            </div>
            <div className="chart">
              <p>Dec</p>
              <div className="percent">
                <div className="chart-bar-fill"></div>
              </div>
            </div>
          </div>
            <div className='bodyy'>
              <div className='bodyy-left'>
                <div className='exp'>
                  <p className='exp-month'>January</p>
                  <p className='exp-year'>2022</p>
                  <p className='exp-day'>16</p>
                </div>
                <h3 className='exp-title'>Some Book</h3>
              </div>
              <div className='exp-cash'>$50</div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
